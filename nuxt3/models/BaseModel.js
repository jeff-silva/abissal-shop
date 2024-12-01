import * as fireAuth from "firebase/auth";
import * as fireStorage from "firebase/storage";
import * as fireFirestore from "firebase/firestore";
import { useFirestore } from "vuefire";
import dayjs from "dayjs";

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
    const collectRef = fireFirestore.collection(db, this.collection());
    let data = this.toJson();
    console.log(data);

    if (data.id) {
      const docRef = await fireFirestore.doc(db, collectRef, data.id);
      console.log(docRef);
      // data.updated_at = dayjs().format();
      // const dataRef = await fireFirestore.updateDoc(docRef, data);
    } else {
      // data.created_at = data.updated_at = dayjs().format();
      // const dataRef = await fireFirestore.addDoc(collection, data);
      // data.id = dataRef.id;
    }

    // this.fill(data);
  }

  onSave() {
    //
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
      fireFirestore.orderBy("updatedAt", "desc"),
      // fireFirestore.limit(this.params.limit),
    ];
    const first = fireFirestore.query(...queryParams);
    const docsRef = await fireFirestore.getDocs(first);

    this.data = docsRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    this.busy = false;
  }
}
