/*
We will convert the function Employee to class Employee */

class Employee{
    constructor(firstName,lastName){
        let middleName=''; //this middle name is private
        this.firstName=firstName;
        this.lastName=lastName;
    }

    printName(){
        return this.firstName+' '+this.middleName+' '+this.lastName;
    }

    setMiddleName(middleName){
        this.middleName=middleName;
    }

    static officeCode(){ //it's class level not instance level
        return 'XXX123-';
    }
}

class ITGuy extends Employee{
    //Employee.call(this,firstName,lastName);
    constructor(firstName,lastName){
        super(firstName,lastName);
    }
    myDuties(){
        //specific method to ITGuy
        return 'writing code, support etc.';
    }
}

class ITManager extends Employee{
    constructor(firstName,lastName){
        super(firstName,lastName);

    }
    myDuties(){
        return 'managing people, over looking issues etc.';
    }
    roomCode(room){
        return Employee.officeCode()+room;
    }
    
}

Employee.prototype.hobbies='playing soccer';
let emp_1=new Employee('joe','doe');
console.log(emp_1.hobbies);

let itGuy_1=new ITGuy('john','smith');
console.log(itGuy_1.myDuties());
console.log(itGuy_1.hobbies);
console.log(itGuy_1.printName());

let itManager_1=new ITManager('Will','Smith');
console.log(itManager_1.myDuties());
//console.log(itManager_1.officeCode());
console.log(ITManager.officeCode());
console.log(itManager_1.roomCode(456));




