console.log("JS is connected!")

// declare a variable and assign it a value, in this case an
// empty array
let colors = []

//if I had wanted the value of the variable not to change,
// I would have used const
const favoriteColor = 'teal'
// add items to the array
colors.push('green')
colors.push('red')
colors.push('purple')
colors.push('chartreuse')
colors.push('black')

// console.log(colors)

colors.push(favoriteColor)
// console.log(colors)

colors.pop()

// console.log(`My colors array: ${colors}`)

// to remove a value, I need to check through the array
// one at a time and make a new array with only the values that 
// I want

newColors = []

// for of loop
for (let color of colors) {
    console.log(color)
    if (color !== 'purple') {
        newColors.push(color)
    }
}


// the way we say "do a thing x times"
// for example, console log 'purple' 5 times
// for (let counter = 0; counter < 5; counter++) {
//     console.log(counter, 'purple')
// start   end  increment
// }
// use the above style of loop on an array
// alternate way to write the first loop (lines 32 - 38)
// do a thing as man times as there are items in the array
// colors = ['green', 'red', 'purple', 'chartreuse']
//this way is useful especially when you need to know
// which iteration (lap) you are on
for (let index = 0; index < colors.length; index++) {
    console.log(`${colors[index]} is in position ${index}`)
    if (colors[index] !== 'purple') {
        newColors.push(colors[index])
    }
}

let index = 0
while (index < colors.length) {
    if (colors[index] !== 'purple') {
        newColors.push(colors[index])
    }
    index += 1
}

// example of how a while loop would work in a game
// lives = 10
// while (lives > 0){
//     if collision() {
//         lives -= 1
//     }
// }


console.log(`newColors array after filtering out purple: ${newColors}`)





