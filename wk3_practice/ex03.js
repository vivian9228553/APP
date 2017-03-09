var person = {
    firstname : 'Ann',
    lastname: 'Ho',
    greet: function(){
        console.log(`Hello,${this.firstname} ${this.lastname}`);
    }
};
person.greet();
console.log(person['firstname']);

let name, phone;
let info = {
    name,
    phone,
    printInfo(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);      
    }
}

info.name = "ntue";
info.phone = "2732-1104";
info.printInfo();