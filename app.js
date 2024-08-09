// var fruits = ["apple", "mango" , "pineapple"]
// var div = document.querySelector("div")

// fruits.push("watermelon")

// fruits.splice(1,1,"apple" , "grapes")

// for(i=0;i<fruits.length;i++){
//       console.log(fruits[i])
//       div.innerHTML += `fruits name = ${fruits[i]} <br/>`
// }

var input = document.querySelector("input")
var list = document.querySelector("ol")

var todo = [];

function todoapp(){
    console.log(input.value)
     todo.push(input.value) 
     renderlist()  
   
}

function renderlist(){
    list.innerHTML = ""
    for(i=0;i<todo.length;i++){
        console.log(todo)      
        list.innerHTML += `<li>${todo[i]}</li><button onclick ="Delete(${i})">Delete</button><button onclick ="Update(${i})">Update</button>`
    
    }
      input.value = ""
   
}

function Delete(index){
      todo.splice(index,1)
      renderlist()

}

function Update(index){
  todo.splice(index,1,prompt("enter updated value"))
    renderlist()
}
