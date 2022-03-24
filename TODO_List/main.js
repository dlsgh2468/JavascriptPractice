// 유저가 값을 입력한다.
// + 버튼을 클릭하면 할 일이 추가된다.
// delete버튼을 누르면 할 일이 삭제된다.
// check버튼을 누르면 할 일이 끝나면서 밑줄이 긋는다 (isComplete를 true로)

// check버튼을 누르면 밑줄이 그어지면서 마친 일 목록으로 들어간다
let userInput = document.querySelector('#user-input');
let addButton = document.querySelector('#add');
let underLine = document.querySelector('.under-line');
let taskList = [];


function add(){
    
    let task = {
        id : randomIDGenerate(), // 랜덤한 ID값을 부여받는다.
        taskName : null,
        taskValue :  document.getElementById('user-input').value,
        isComplete : false
    };
    taskList.push(task);
    // console.log(taskList);
    render();
}

function render(){
    // 할 일 목록
    let taskBoard = document.querySelector('.taskBoard'); 
    let resultHtml = '';

    for(let i=0; i<taskList.length; i++){
        resultHtml +=`
        <div class="task">
            <div class="task-name">${taskList[i].taskValue}</div>
            <div>
                <button id="check" data="video" onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button id="delete">delete</button>
            </div>
        </div>`;   
    }
    taskBoard.innerHTML = resultHtml;
}

function toggleComplete(id){
    
    for(let i=0; i<taskList.length; i++){
        // 현재 클릭한 일의 task-name태그를 가져와야 하는데..
        
        
        if(taskList[i].id == id){
            
            taskList[i].taskName = document.querySelector(`.taskBoard`).children[i].firstElementChild;
            
            if(!taskList[i].isComplete){
                taskList[i].isComplete = true;
                taskList[i].taskName.classList.add('task-done');
                break;
            } else {
                taskList[i].isComplete = false;
                taskList[i].taskName.classList.remove('task-done');
                break;
            }
        } 
    }
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2,9);
}

addButton.addEventListener('click', add);