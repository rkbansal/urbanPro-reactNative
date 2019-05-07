export async function fetchStudents(){
  const response = await fetch("http://www.mocky.io/v2/5c41950b0f0000543fe7b8a2");
  const students = await response.json();
  console.log(students);
  return students;
}