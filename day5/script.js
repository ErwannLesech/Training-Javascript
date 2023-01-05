let new_array = Array()

let five_array = Array(5)

console.log(five_array.length)

let mixedDataTypes = [1, "e", 4.15, 6, 'a', 10]

console.log(mixedDataTypes.length)

let itCompagnies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompagnies)
console.log(itCompagnies.length)
console.log(itCompagnies[0])
console.log(itCompagnies[itCompagnies.length - 1])

// third degree

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let ages_sorted = ages.sort()

console.log(ages_sorted[0])
console.log(ages_sorted[ages.length - 1])
console.log(ages_sorted[ages_sorted.length / 2])

let average = 0

for(let i = 0; i < ages.length; i++)
(
    average += ages_sorted[i]
)

console.log(average / ages_sorted.length)

console.log(ages_sorted[ages.length - 1] - ages_sorted[0])

