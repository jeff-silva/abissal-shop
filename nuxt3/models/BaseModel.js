import * as fireAuth from "firebase/auth";
import * as fireStorage from "firebase/storage";
import * as fireFirestore from "firebase/firestore";
import { useFirestore } from "vuefire";
import dayjs from "dayjs";

export default class {
  constructor() {
    this.save = new Save(this);
    this.search = new Search(this);
    this.delete = new Delete(this);
    this.storage = new Storage(this);
    this.events = [];
  }

  collection() {
    return "app";
  }

  defaults() {
    return {};
  }

  getDefaults() {
    return {
      id: null,
      ...this.defaults(),
      created_at: null,
      updated_at: null,
    };
  }

  toJson() {
    let data = {};
    Object.entries(this.getDefaults()).map(([name, value]) => {
      data[name] = value ?? null;
    });
    return data;
  }

  searchParams() {
    return {};
  }

  getSearchParams() {
    return {
      limit: 20,
      order: "desc",
      order_by: "updated_at",
      ...this.searchParams(),
    };
  }

  on(name, call) {
    this.events.push({ name, call });
  }

  dispatch(evt, ...args) {
    this.events.map(({ name, call }) => {
      if (name != evt) return;
      call(...args);
    });
  }
}

class Save {
  constructor(parent) {
    this.busy = false;
    this.data = parent.toJson();
    this.on = (...args) => parent.on(...args);
    this.dispatch = (...args) => parent.dispatch(...args);
    this.toJson = () => parent.toJson();
    this.collection = () => parent.collection();
  }

  set(data = {}) {
    this.data = { ...this.toJson(), ...data };
    return this;
  }

  fill(data = {}) {
    for (let attr in data) {
      this[attr] = data[attr];
    }
    return this;
  }

  async submit() {
    let data = this.data;
    const db = useFirestore();
    this.busy = true;

    if (data.id) {
      data.updated_at = dayjs().format();
      const docRef = fireFirestore.doc(db, this.collection(), data.id);
      fireFirestore.setDoc(docRef, data, { merge: true });
      this.dispatch("updated", data);
      this.dispatch("saved", data);
    } else {
      data.created_at = data.updated_at = dayjs().format();
      const collectRef = fireFirestore.collection(db, this.collection());
      const docRef = await fireFirestore.addDoc(collectRef, data);
      data.id = docRef.id;
      this.dispatch("created", data);
      this.dispatch("saved", data);
    }

    this.busy = false;
  }
}

class Search {
  constructor(parent) {
    this.busy = false;
    this.collection = parent.collection();
    this.params = parent.getSearchParams();
    this.data = [];
    this.on = (...args) => parent.on(...args);
    this.dispatch = (...args) => parent.dispatch(...args);
  }

  async submit() {
    this.busy = true;
    const db = useFirestore();
    const collection = fireFirestore.collection(db, this.collection);

    let queryParams = [
      collection,
      fireFirestore.orderBy(this.params.order_by, this.params.order),
      fireFirestore.limit(this.params.limit),
    ];

    const first = fireFirestore.query(...queryParams);
    const docsRef = await fireFirestore.getDocs(first);

    this.data = docsRef.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    this.busy = false;
  }
}

class Delete {
  constructor(parent) {
    this.busy = false;
    this.collection = () => parent.collection();
    this.data = parent.toJson();
    this.on = (...args) => parent.on(...args);
    this.dispatch = (...args) => parent.dispatch(...args);
  }

  async submit(data) {
    this.busy = true;
    this.data = data;
    const db = useFirestore();
    const docRef = fireFirestore.doc(db, this.collection(), data.id);
    await fireFirestore.deleteDoc(docRef);
    this.dispatch("deleted", data);
    this.busy = false;
  }
}

class Storage {
  constructor(parent) {
    this.busy = false;
    this.collection = () => parent.collection();
    this.on = (...args) => parent.on(...args);
    this.dispatch = (...args) => parent.dispatch(...args);
  }

  async storeUploadData(snapshotRef) {
    const metadata = await fireStorage.getMetadata(snapshotRef);
    return {
      url: await fireStorage.getDownloadURL(snapshotRef),
      name: metadata.name,
      mime: metadata.contentType,
      size: metadata.size,
    };
  }

  browse() {
    Object.assign(document.createElement("input"), {
      type: "file",
      onchange: (ev) => {
        if (!ev.target.files[0]) return;
        this.upload(ev.target.files[0]);
      },
    }).click();
  }

  async upload(file) {
    this.busy = true;
    const storage = fireStorage.getStorage();
    const snapshot = await fireStorage.uploadBytes(
      fireStorage.ref(storage, file.name),
      file
    );
    const data = await this.storeUploadData(snapshot.ref);
    this.busy = false;
    return data;
  }

  remove(data) {}
}
