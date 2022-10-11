export default class OrderDetail{
    constructor(id,productid,orderid,price,quantity,createdat,modifiedat){
        this.id=id;
        this.productid=productid;
        this.orderid=orderid;
        this.price=price;
        this.quantity=quantity;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}