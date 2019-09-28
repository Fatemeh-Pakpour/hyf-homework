class Order{
    constructor(type, status, created, modified, id){
        this.type = type;
        this.status = status;
        this.created = created;
        this.modified = modified;
        this.id = id;
    }
}

// new Order("salad","ordered","2019-10-13","2019-10-16",2);
module.exports = Order;
