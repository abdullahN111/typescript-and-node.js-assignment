let guestArr: string [] = ["Faraz","Ibrahim","Abdul Rehman"];
let canNotAttend: string = "Ibrahim";

let newGuest: string = "Haseeb"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so i am inviting more peoples.`)
// );
let guestAdd: string = "Shahnam"
guestArr.unshift(guestAdd)

let middleGuest: string = "Mujtaba"
let middleIndex = guestArr.length/0
guestArr.splice(middleIndex,5,middleGuest)
// console.log(guestArr)


guestArr.push("Mustafa")
// console.log(guestArr)


guestArr.map((items) =>
console.log(`Dear ${items}, you are invited more people category on dinner.`)
);