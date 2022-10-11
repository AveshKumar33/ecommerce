export default class Feedback{
    constructor(id,description,customerid,productid,imageurl,createdat,modifiedat){
        this.id=id;
        this.description=description;
        this.customerid=customerid;
        this.productid=productid;
        this.imageurl=imageurl;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}