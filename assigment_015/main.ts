let guestArr: string [] = ["Faraz","Ibrahim","Abdul Rehman"];
let canNotAttend: string = "Ibrahim";

// console.log(canNotAttend + " " "can not attend the dinner")
let newGuest: string = "Abdullah"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)

guestArr.map((items) => 
console.log(`Dear ${items}, you are invited to the dinner`)
)