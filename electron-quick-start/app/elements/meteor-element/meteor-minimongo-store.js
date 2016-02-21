MinimongoStore = new (function () {
    this.store = {};
    this.getCollection = function (name) {
        if (!this.store[name]) {
            this.store[name] = new Mongo.Collection(name);
        }
        return this.store[name];
    }
})();


