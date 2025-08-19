const numbers = [1, 2, 5, 4, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]

console.log(exam_marks[0])
console.log(exam_marks[0][0])
console.log(exam_marks)
exam_marks[0][1] = 66           // Replaces 87 with 66 in the first row
exam_marks[1].pop()             // Pops the last element of the second row
console.log(exam_marks)
exam_marks[1].push(44)          // Pushes 44 in the second row
console.log(exam_marks)