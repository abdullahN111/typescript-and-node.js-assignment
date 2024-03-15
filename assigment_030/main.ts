let users: string [] = ["Admin","Eric","Jimmy","Sam","Tim"]

for(let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status reprt?")
} else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}
