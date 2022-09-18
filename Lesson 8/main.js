/**
 * Note: Hoàn thành bài tập buổi 7
 */

// try {
//     console.log('Hello World')
//     throw new Error("Sap server")
// } catch (e) {
// console.log(e)
// }

// const login = () => {
//     console.log("Connecting to server...");
//     throw new Error();
// }

// try {
//     login();
// } catch (e) {
//     console.log(e);
//     console.log("He thong dang bao tri")
// }

// const login = () => {
//     setTimeout(() => {
//         console.log('Login')
//     },3000);
// }
// login(); // mat 3s de chay
// console.log('Go to home page');
/* ket qua: dong 32 in truoc dong 1
-> Bat dong bo
*/

// const login = (username,password) => {
//   return new Promise((resolve, reject) => {
//     if (username == "test" && password == "123456") {
//       resolve({
//         username: "test1",
//         name: "test1",
//       });
//     }
//     reject("Tai khoan hoac mat khau sai");
//   });
// };

// login('test','12345')
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

// const execute = async () => {
//     try {
//         const result = await login('test','12345');
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// };

// execute();

// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Login successful");
//         resolve();
//       }, 3000);
//   });
// };

// login().then(() => {
//   console.log("Go to home page");
// });

// fetch('https://catfact.ninja/fact') // trả về 1 Promise
//   .then((res) => {
//     // resolve thành công, trả về 1 response
//     return res.json(); // biến từ response thành dạng đọc được
//   })
//   .then((data) => {
//     // khi res.json thực hiện xong sẽ chạy xuống dưới
//     console.log(data);
//     document.write(data.fact);
//   })
//   .catch((e) => {
//     // khi thất bại bất kì dòng nào đều chạy vào đây
//     console.log(e);
//   });

const callApi = async () => {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

callApi();