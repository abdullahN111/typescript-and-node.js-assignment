let placesToVisit: string [] = ["Turkey", "United States", "United Kingdom", "Saudia Arabia", "Italy"];

// console.log("Original order:", placesToVisit);
// console.log("Alphabetical order:", [...placesToVisit].sort());
// console.log("Original order after sorting:", placesToVisit);
// console.log("Alphabetical order:", [...placesToVisit].sort().reverse());
// console.log("Original order after reverse sorting:", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed order:", placesToVisit);
// console.log("back to original order:", placesToVisit);
// console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
// console.log("Original order:", placesToVisit);
// console.log("Original order:", placesToVisit);
// console.log("Original order:", placesToVisit);
