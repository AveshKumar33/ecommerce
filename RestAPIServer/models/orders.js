export default class Order{
    constructor(id,customerid,status,createdat,modifiedat){
        this.id=id;
        this.customerid=customerid;
        this.status=status;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}