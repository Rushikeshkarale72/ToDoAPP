//getting all required elements
const inputBox = document.querySelector(".inputfiled input")
const addBtn = document.querySelector(".inputfiled button")

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;  //getting user entered value
    if(userData.trim() !=0){ //if user values aren't only spaces
     addBtn.classList.add("active"); //active the button
    }else{
        addBtn.classList.remove("active");  //active the add button
    }
}

addBtn.onclick = ()=>{
    let userData = inputBox.value;  //getting user entered value
    let getlocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getlocalStorage == null){ //if localStorage is null
        ListArr = []; //creating blank arry
    }else{
       ListArr = JSON.parse(getlocalStorage); 
    }
    ListArr.push("userData"); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(ListArr));  //trnasforming js object into a json string

}