// โจทย์:
// ให้เขียนฟังก์ชัน processStudentData ที่รับ students array เป็น input และทำตามขั้นตอนต่อไปนี้โดยใช้หลักการ functional programming (ห้ามใช้ for loop, while loop หรือการเปลี่ยนแปลงข้อมูลเดิมใน array)
//     คำนวณคะแนนเฉลี่ย (Average Score): สร้าง array ใหม่ที่มีชื่อว่า studentAverages ซึ่งแต่ละ object จะมี property เพิ่มขึ้นมาคือ averageScore โดยคำนวณจากคะแนนใน array scores ของนักเรียนแต่ละคน
//     กรองข้อมูล (Filter): กรอง array studentAverages ให้เหลือเฉพาะนักเรียนที่มีคะแนนเฉลี่ยตั้งแต่ 80 ขึ้นไป
//     สร้างสตริงผลลัพธ์ (Create String): แปลง array ที่ถูกกรองแล้ว ให้เป็น array ใหม่ของ string ในรูปแบบ "ชื่อนักเรียน: คะแนนเฉลี่ย"

// ตัวอย่างผลลัพธ์ที่ต้องการ:
// Output จากการเรียกใช้ processStudentData(students)
// ["Alice: 85", "Charlie: 90"]

const students = [
  { name: 'Alice', scores: [85, 92, 78] },
  { name: 'Bob', scores: [60, 75, 88] },
  { name: 'Charlie', scores: [95, 90, 85] }
];

function processStudentData(students){
    return students
    .map(student => {
        const averageScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
        return {...student, averageScore}
    })
    .filter(student => student.averageScore >= 80)
    .map(student => `${student.name}: ${Math.round(student.averageScore)}`)
}

const result = processStudentData(students)
console.log(result)