const marks = [80, 80, 50];

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

console.log(calculateGrade(marks));

function calculateAverage(array){
    let marksTotal = 0;

    for (let index of array) 
        marksTotal += index;
    
    return marksTotal / array.length;
}


function calculateGrade(marks) {

    const grade = calculateAverage(marks)
    
    if ( grade < 60 ) return 'F';
    if ( grade < 70 ) return 'D';
    if ( grade < 80 ) return 'C';
    if ( grade < 90 ) return 'B';
    return 'A';
}

