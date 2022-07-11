class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
      this.data[index].push([key, value]);
    } else {
      this.data[index].push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);
    if (!this.data[index]) return "No Element";
    if (this.data[index].length == 1) {
      return this.data[index][0][1];
    } else {
      const currentBucket = this.data[index];
      currentBucket.array.forEach((element) => {
        if (element[0] == key) {
          return element[1];
        }
      });
    }
  }

  keys() {
    const keys = [];
    this.data.forEach((currentBucket) => {
      currentBucket.forEach((element) => {
        keys.push(element[0]);
      });
    });
    return keys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("oranges", 3);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);

console.log(myHashTable.get("apples"));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
