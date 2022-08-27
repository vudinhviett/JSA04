// console.log(localStorage)

// /**
//  * @Create : localStorage.setItem(key, value)
//  */
// const number = 100
// const isOpen = true
// const cart = [1,2,3]
// localStorage.setItem("number", JSON.stringify(number));
// localStorage.setItem("isOpen", JSON.stringify(isOpen));
// localStorage.setItem("cart", JSON.stringify(cart));

// /**
//  * @Read : console.log(localStorage.getItem(key))
//  */
// const numberFromLC = JSON.parse(localStorage.getItem("number"))
// const isOpenFromLC = JSON.parse(localStorage.getItem("isOpen"))
// const cartFromLC = JSON.parse(localStorage.getItem("cart"))

// console.log(numberFromLC, ':', typeof numberFromLC);
// console.log(isOpenFromLC, ':', typeof isOpenFromLC);
// console.log(cartFromLC, ':', typeof cartFromLC);

// // Sử dụng JSON.stringify và JSON.parse để tránh viẹc dữ liệu ban đầu bị chuyển hoá thành string

// /**
//  * @Update 
//  */
// localStorage.setItem('isOpen', false)

// /**
//  * @Delete
//  */
// localStorage.removeItem('isOpen');
// localStorage.clear();

// Common function
function select(selector) {
    return document.querySelector(selector);
  }
  
  const taskForm = select('#task-form');
  const taskInput = select('#task');
  const taskListDoc = select('.task-list');
  
  function getToDoList() {
    let toDoList = JSON.parse(localStorage.getItem('task'));
    if (toDoList == null) {
      toDoList = [];
    }
    return toDoList;
  }
  
  function setToDoList(task) {
    let toDoList = getToDoList();
    toDoList.push(task);
    localStorage.setItem('task', JSON.stringify(toDoList));
  }
  
  function renderToDoList() {
    const toDoList = getToDoList(); // Lấy dữ liệu to do list về
    taskListDoc.innerHTML = ''; // Reset HTML của taskList về rỗng
    // Chạy vòng lặp qua mảng to Do list
    for (let task of toDoList) {
      // Thêm vào HTML
      taskListDoc.innerHTML += `<div class="task-container">
          <p class="task-content">${task}</p>
          <div>
              <i class="fa-solid fa-check finish-task-btn"></i>
              <i class="fa-solid fa-xmark delete-task-btn"></i>
          </div>
      </div>`;
    }
  }
  
  renderToDoList(); // lan dau tien vao trang web
  
  taskForm.onsubmit = function (e) {
    e.preventDefault();
    setToDoList(taskInput.value); // Thêm vào local storage
    taskInput.value = ''; // reset ô input về rỗng
    renderToDoList(); // render lại to do list
  };