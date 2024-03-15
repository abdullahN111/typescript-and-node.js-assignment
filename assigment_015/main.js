var guestArr = ["Faraz", "Ibrahim", "Abdul Rehman"];
var canNotAttend = "Ibrahim";
// console.log(canNotAttend + " " "can not attend the dinner")
var newGuest = "Abdullah";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner"));
});
