import * as fireAuth from "firebase/auth";
import * as fireStorage from "firebase/storage";
import * as fireFirestore from "firebase/firestore";
import { useFirestore } from "vuefire";
import dayjs from "dayjs";

let events = [];

export default class {
  constructor(data = {}) {
    data = {
      ...this.getDefaults(),
      ...data,
    };
    for (let attr in data) this[attr] = data[attr];
  }

  defaults(data = {}) {
    return { id: null, ...data };
  }

  fill(data = {}) {
    Object.entries(this.getDefaults()).map(([attr, value]) => {
      this[attr] = data[attr] ?? value;
    });
  }

  getDefaults() {
    return {
      id: null,
      created_at: null,
      updated_at: null,
      ...this.defaults(),
    };
  }

  collection() {
    return null;
  }

  toJson() {
    let data = this.getDefaults();
    for (let attr in data) {
      data[attr] = this[attr];
    }
    return JSON.parse(JSON.stringify(data));
  }

  async save() {
    const db = useFirestore();
    let data = this.toJson();

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

    this.fill(data);
  }

  onSave() {
    //
  }

  on(name, call) {
    return events.push({ name, call });
  }

  dispatch(evt, ...args) {
    events.map(({ name, call }) => {
      if (name != evt) return;
      call(...args);
    });
  }

  static search() {
    return new Search(new this());
  }
}

class Search {
  constructor(parent) {
    this.busy = false;
    this.collection = parent.collection();
    this.params = { limit: 20 };
    this.data = [];
  }

  async submit() {
    this.busy = true;
    const db = useFirestore();
    const collection = fireFirestore.collection(db, this.collection);
    let queryParams = [
      collection,
      fireFirestore.orderBy("updated_at", "desc"),
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
