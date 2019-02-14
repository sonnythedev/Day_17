/*

Write a Employee class through function. The Employee class/function will have a constructor that will take in firstName and lastName. There will also be a middleName property which will be just private variable. There will be a method called printName() which will print out firstName followed by middleName followed by lastName

*/


function Employee(firstName,lastName){
    this.middleName=''; //this middle name is private
    this.firstName=firstName;
    this.lastName=lastName;

    this.printName=function(){
        return this.firstName+' '+this.middleName+' '+this.lastName;
    }

    this.setMiddleName=function(middleName){
        this.middleName=middleName;
    }

    //this.hobbies='playing soccer';
}

function ITGuy(firstName,lastName){
    Employee.call(this,firstName,lastName);
    this.myDuties=function(){
        return 'writing code, support etc.';
    }
}

ITGuy.prototype=Object.create(Employee.prototype);

function ITManager(firstName,lastName){
    Employee.call(this,firstName,lastName);
    this.myDuties=function(){
        return 'managing people, over looking issues etc.';
    }
}



////Convert Employee to ES6 class


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



