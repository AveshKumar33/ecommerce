export default class Payment{
    constructor(id,totalamount,discountpercentage,payableamount,orderid,modeofpayment,createdat,modifiedat){
        this.id=id;
        this.totalamount=totalamount;
        this.payableamount=payableamount;
        this.orderid=orderid;
        this.modeofpayment=modeofpayment;
        this.discountpercentage=discountpercentage;
        this.createdat=createdat;
        this.modifiedat=modifiedat;
    }
}