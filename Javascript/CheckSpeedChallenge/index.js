const result = checkSpeed(124)
console.log(result)

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint)
        return "Ok"

    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) 
        return ("License Suspended")
    else
        return ('Points', points)

}