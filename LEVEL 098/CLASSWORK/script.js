function idk(name, lastname, phonenumber, email, password, confirmpassword) {
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.email = email;
    this.password = password;
    this. confrimpassword = confirmpassword;
}

let person1 = new idk('goa', 'recordingadze', '55555555', 'goarecordingadze@gmail.com', 'meravici123' , 'meravici123');
let person2 = new idk('novatori', 'bandzia', '55555554', 'novatoribandzia@gmail.com', 'novatoribandzia' , 'novatoribandzia');
let person3 = new idk('janezais', 'bestmentor', '55555551', 'janezaisbestmentor@gmail.com', 'janezaisbestmentor41' , 'janezaisbestmentor41');

console.log("მომხმარებელი 1:");
console.log(`Name: ${person1.name}`);
console.log(`Last Name: ${person1.lastname}`);
console.log(`Phone Number: ${person1.phonenumber}`);
console.log(`Email: ${person1.email}`);
console.log(`Password: ${person1.password}`);
console.log(`Confirm Password: ${person1.confirmpassword}`);

console.log("მომხმარებელი 2:");
console.log(`Name: ${person2.name}`);
console.log(`Last Name: ${person2.lastname}`);
console.log(`Phone Number: ${person2.phonenumber}`);
console.log(`Email: ${person2.email}`);
console.log(`Password: ${person2.password}`);
console.log(`Confirm Password: ${person2.confirmpassword}`);

console.log("მომხმარებელი 3:");
console.log(`Name: ${person3.name}`);
console.log(`Last Name: ${person3.lastname}`);
console.log(`Phone Number: ${person2.phonenumber}`);
console.log(`Email: ${person3.email}`);
console.log(`Password: ${person3.password}`);
console.log(`Confirm Password: ${person3.confirmpassword}`);