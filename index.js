// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on Input Field
window.onload = function(){
    theInput.focus();
}; 

// Adding The Task
theAddButton.onclick = function (){

    if(theInput.value === ''){

        console.log("no value");

    }else{

        let noTasksMsg = document.querySelector(".no-tasks-message");

        // Check If Span With No Tasks Message Exist
        if(document.body.contains(document.querySelector(".no-tasks-message"))){

            // Remove No Tasks Message
            noTasksMsg.remove();      
        }

        // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task to The Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Value
        theInput.value = '';

        // Focus on Field
        theInput.focus();

        // Calculate Tasks
        calculateTasks();
    }
};

document.addEventListener ('click' , function (e){

    // Delete Task
    if(e.target.className == "delete"){

        // Remove current Task
        e.target.parentNode.remove();

        // Check Number of Tasks Inside The Container
        if(tasksContainer.childElementCount == 0){

            createNoTasks();
        }
    }

    // Finish Task
    if(e.target.classList.contains('task-box')){

        // Toggle Class Finished
        e.target.classList.toggle("finished");
    }

    // Calculate Tasks
    calculateTasks();
});

// Function To Create No Tasks Message
function createNoTasks (){

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    //Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    //Add Class To Message Span
    msgSpan.className = "no-tasks-message";

    //Append The Message Span Element To The Container
    tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calculateTasks (){

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}
