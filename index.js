function wakeDog(name, breed) {
    const answer = `Wake ${name} the ${breed}`
    console.log(answer)
    return answer
}
function leashDog(name, breed) {
    const answer = `Leash ${name} the ${breed}`
    console.log(answer)
    return answer
}

function walkToPark(name, breed) {
    const answer = `Walk to the park with ${name} the ${breed}`
    return answer
    console.log(answer)
}

function throwFrisbee(name, breed) {
    const answer = `Throw the frisbee for ${name} the ${breed}`
    console.log(answer)
    return answer
}
function walkHome(name, breed) {
    const answer = `Walk home with ${name} the ${breed}`
    console.log(answer)
    return answer
}

function unleashDog(name, breed) {
    const answer = `Unleash ${name} the ${breed}`
    console.log(answer)
    return answer
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
    return routine.map(eachFunction => eachFunction(name, breed))
}