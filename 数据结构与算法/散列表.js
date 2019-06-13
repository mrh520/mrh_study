function HashTable() {
    let table = [];
    this.loseloseHashCode = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    this.put = function (key, value) {
        let position = this.loseloseHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    }
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
}