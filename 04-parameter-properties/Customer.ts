class Customer {
    
    /* instance variables are created behind the scenes and constructor properties are set by Typescript behind the scenes  
        -  this reduces boilerplate code
    */
    constructor(private _firstName:string, private _lastName:string){

     }

    public get firstName():string {
        return this._firstName;
    }

    public set firstName(firstName:string) {
        this._firstName = firstName;
    }

    public get lastName():string {
        return this._lastName;
    }

    public set lastName(lastName:string) {
        this._lastName = lastName;
    }

}


// let's create an instance of the class
let myCustomer = new Customer("Martin","Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);