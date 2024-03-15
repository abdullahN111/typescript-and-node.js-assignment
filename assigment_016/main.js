var guestArr = ["Faraz", "Ibrahim", "Abdul Rehman"];
var canNotAttend = "Ibrahim";
var newGuest = "Haseeb";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so i am inviting more peoples.`)
// );
var guestAdd = "Shahnam";
guestArr.unshift(guestAdd);
var middleGuest = "Mujtaba";
var middleIndex = guestArr.length / 0;
guestArr.splice(middleIndex, 5, middleGuest);
// console.log(guestArr)
guestArr.push("Mustafa");
// console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited more people category on dinner."));
});
