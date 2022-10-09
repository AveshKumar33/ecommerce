export default class Transaction{
    constructor(id,toaccount,fromaccount,amount,createdat){
        this.id=id;
        this.toaccount=toaccount;
        this.fromaccount=fromaccount;
        this.createdat=createdat;
        this.amount=amount;
    }
}