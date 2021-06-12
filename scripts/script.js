/* 
created by : A.Veera Teja
*/
const INPUT = document.querySelector(".inputs input");
const ADD_BUT = document.querySelector(".inputs button");
const TODO = document.querySelector(".todo_list");
/* styling add button based on user entry  */
INPUT.onkeyup = () =>{
  let User_entry = INPUT.value;
  if (User_entry.trim() != 0){
    /* user data true --> enable add button */
    ADD_BUT.classList.add("active");
  }
  else{
    /* user data false --> disable add button */
    ADD_BUT.classList.remove("active");
  }
}
// adding evet to addbutton on click
ADD_BUT.onclick = () =>{
  let User_entry = INPUT.value;
  //getting local storage 
  let Lsd = localStorage.getItem("NewTodo");
  if (Lsd === null){
    // if local storage is null creat an array
    TaskArray = [];
  }
  else{
    //parse the lsd to  array using json --> default it is string we convert it as js objest here 
    TaskArray = JSON.parse(Lsd);
  }
  //push the user enterd value to array
  TaskArray.push(User_entry);
  //update losal storage 
  localStorage.setItem("NewTodo",JSON.stringify(TaskArray));
  //resetting the user value area to null
  INPUT.value = '';
  //disabling add button
  ADD_BUT.classList.remove("active");
}
Show();
function Show(){
  let Lsd = localStorage.getItem("NewTodo");
  if (Lsd == null){
    TaskArray = [];
  }
  else{
    TaskArray = JSON.parse(Lsd);
  }
  let NewLi = "";
  TaskArray.forEach((element,index)=>{
    NewLi +=`<li>${element}<span class="checked" onclick="checker(${index})"><i class="fas fa-check"></i></span><span class ="trash" onclick="Delete(${index})"><i class = "fas fa-trash"></i></span></li>`;
  });
  TODO.innerHTML = NewLi;
  INPUT.value = "";
}