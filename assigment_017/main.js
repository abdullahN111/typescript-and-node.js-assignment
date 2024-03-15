var guests = ["Shahnam", "Haseeb"];
// console.log("Due to limited space, only two people can be invited for dinner.")
// while (guests.length > 5) {
// const removedGuest = guests.pop();
// console.log(`Sorry ${removedGuest}, you are no longer invited to dinner.`)
guests.forEach(function (guest) { return 2; });
var guestInvited = guests.pop();
console.log("Dear ".concat(guestInvited, ", you are still invited to dinner."));
