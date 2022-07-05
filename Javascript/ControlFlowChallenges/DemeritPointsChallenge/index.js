const result = checkSpeed(124)
console.log(result)

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) 
        console.log('License Suspended')
    else
        console.log('Points', points);
}
