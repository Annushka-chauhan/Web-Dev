let todoIndex =1;

function addToDo(){
    //write the code that reads the content of the input box
    //create a new todo on the html dom 
    //if we want to put something into the html dom there are 2 steps 
     //1st create the actual  element which we want to put in a variable 
     //2nd get the div where we want to insert these values 
    //clears the input box 
     let element = document.getElementById("todoInput")
     const todo = element.value;
     if(todo === ""){
        return;
     }
     element.value=""

     const todoDiv = document.createElement("div");
     todoDiv.setAttribute("id", "todo"+ todoIndex)
     const todoSpan = document.createElement("span");
     todoSpan.innerHTML = todo
     todoDiv.appendChild(todoSpan)
     
     const todoButton = document.createElement("button");
     todoButton.innerHTML="Delete Todo"
     todoButton.setAttribute("onclick","deleteTodo("+ todoIndex +")")
     todoDiv.appendChild(todoButton)
     
     document.getElementById("todos").appendChild(todoDiv);
      todoIndex= todoIndex+1;
    //  const parentDiv = document.getElementById("todos")
    //  parentDiv.appendChild(newDiv)
}


function deleteTodo(index){
      const divElement = document.getElementById("todo" +index);
      divElement.parentElement.removeChild(divElement);
}