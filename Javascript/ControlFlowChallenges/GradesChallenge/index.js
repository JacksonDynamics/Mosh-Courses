const marks = [80, 80, 100];


function calculateAverage(array) {
    let grades = 0;
    
    for(let mark of marks) {
        grades += mark
    }
    return grades / marks.length
}

function calculateGrade(marks) {
    const total = calculateAverage(marks)
    if(total < 60) return 'F';
    if(total < 70) return 'D';
    if(total < 80) return 'C';
    if(total < 90) return 'B';
    return 'A'
}

console.log(calculateGrade(marks));
