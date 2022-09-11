// const sum = (a, b) => {
//   return a + b;
// };

// let arr = [1, 2, 3, 4, 5];
// // Truy cập thông tin qua vị trí trong mảng ( index )
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// Tru cập trực tiếp đến giá trị cảu phần tử
// for (let x of arr) {
//   console.log(x);
// }
//Default parameter

const createNewUser = (avatar = "Default avatar") => {
  return {
    name: "New User",
    avatar: avatar,
    email: "newuser@gmail.com",
    password: "password",
  };
};

const initApp = (theme = "light_mode", endpoint = "") => {
  console.log("Ứng dụng đang ở trạng thái:", theme);
  console.log("đường dẫn hiện tại : https://www.example.com/" + endpoint);
};
initApp();
initApp("dark_mode", "login");

let name = "Hieu";
let str = `Hello ${name}`;
console.log(str + "" + name);

students = ['Viet','Vy','Linh','Long','Khoi','Nam'];
for (let x of students) {
    document.body.innerHTML += `<p>Hello ${x}</p>`;
}
