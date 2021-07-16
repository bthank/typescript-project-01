class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
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