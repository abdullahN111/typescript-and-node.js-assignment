var personName = "Abdullah Nadeem";
// in lowercase
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\b\w/, function (c) { return c.toUpperCase(); }));
