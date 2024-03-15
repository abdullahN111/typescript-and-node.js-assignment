function sandwich(...items: string[]): void {
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your sandwich Abdullah")

sandwich('Capsicam', 'Tomato', 'Chicken')
sandwich('Beef', 'Cheese')
sandwich('Garlic Chicken', 'Mayo Sauce')
