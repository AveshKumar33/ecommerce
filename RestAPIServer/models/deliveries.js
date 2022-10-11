export default class Delivery{
    constructor(id,orderid,vendorid,location,createdat,modifiedat){
        this.id=id;
        this.vendorid=vendorid;
        this.location=location;
        this.orderid=orderid;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}