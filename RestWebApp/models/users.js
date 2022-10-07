export default class User{
    constructor(id,name,email,password,contactnumber,city){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.contactnumber=contactnumber;
        this.city=city;
    }
    // display(){
    //     console.log('user id = '+this.id);
    //     console.log('user name = '+this.name);
    //     console.log('user email ='+this.email);
    //     console.log('user password = '+this.password);
    //     console.log('user contact no ='+this.contactnumber);
    //     console.log('user city = '+this.city);
    // }
}