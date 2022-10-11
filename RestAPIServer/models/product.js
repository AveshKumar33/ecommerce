export default class Product{
    constructor(id,sellerid,categoryid,price,quantity,imageurl,description,title,createdat,modifiedat){
        this.id=id;
        this.sellerid=sellerid;
        this.categoryid=categoryid;
        this.price=price;
        this.quantity=quantity;
        this.imageurl=imageurl;
        this.description=description;
        this.title=title;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}