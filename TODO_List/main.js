// 유저가 값을 입력한다.
// + 버튼을 클릭하면 할 일이 추가된다.
// delete버튼을 누르면 할 일이 삭제된다.
// check버튼을 누르면 할 일이 끝나면서 밑줄을 긋는다 (isComplete를 true로)

// check버튼을 누르면 밑줄이 그어지면서 마친 일 목록으로 들어간다
let userInput = document.querySelector('#user-input');
let addButton = document.querySelector('#add');
let underLine = document.querySelector('.under-line');
let taskBoard = document.querySelector('.taskBoard'); 
let tabs = document.querySelectorAll('.task-tab div');
let mode = ''; // 일의 진행 상황
let taskList = [];
let filterdList ;



function add(){
    let task = {
        id : randomIDGenerate(), // 랜덤한 ID값을 부여받는다.
        taskValue :  document.getElementById('user-input').value,
        isComplete : false
    };
    taskList.push(task);
    render();
}

function render(filterdList){
    // 할 일 목록
    
    let resultHtml = '';
    let list = [];
    if(filterdList){
        list = filterdList;
    } else {
        list = taskList;
        document.querySelector('#All').click();
    }
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete){
            resultHtml +=`
            <div class="task">
                <div class="task-name task-done">${list[i].taskValue}</div>
                <div class="btn-tool">
                    <button id="check" class="reset" onclick="toggleComplete('${list[i].id}')"></button>
                    <button id="delete" onclick="deleteTask('${list[i].id}')"></button>
                </div>
            </div>`;   
        } else {
            resultHtml +=`
            <div class="task">
                <div class="task-name">${list[i].taskValue}</div>
                <div class="btn-tool">
                    <button id="check" onclick="toggleComplete('${list[i].id}')"></button>
                    <button id="delete" onclick="deleteTask('${list[i].id}')"></button>
                </div>
            </div>`;   
        }
    }
    taskBoard.innerHTML = resultHtml;
}

function toggleComplete(id){
    
    for(let i=0; i<taskList.length; i++){
        
        if(taskList[i].id == id){
            
            // taskList[i].taskName = document.querySelector(`.taskBoard`).children[i].querySelector('.task-name');
            // taskList[i].btnCheck = document.querySelector(`.taskBoard`).children[i].querySelector('.btn-tool #check');

            if(!taskList[i].isComplete){
                taskList[i].isComplete = !taskList[i].isComplete;
                render();
                break;
            } else {
                taskList[i].isComplete = !taskList[i].isComplete;
                render();
                break;
            }

        } 
    }
}

function deleteTask(id){
    let list = [];
    if(filterdList){
        list = filterdList;
        for(let i=0; i<list.length; i++){
            if(list[i].id == id){
                list.splice(i,1);
                render(list);
            }
        }
        // 필터링된 곳에서 삭제를 누를 때 원본 list들도 지워준다
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].id == id){
                taskList.splice(i,1);
            }
        }
    } else {
        list = taskList;
        for(let i=0; i<list.length; i++){
            if(list[i].id == id){
                list.splice(i,1);
                render();
            }
        }
    }
}
function filter(e){
    console.log('클릭발생');
    filterdList = [];
    mode = e.target.id;
    // console.log(window.getComputedStyle(e.target).getPropertyValue('margin-left'));
    underLine.style.width = `${e.target.offsetWidth}px`;
    underLine.style.left = `${e.target.offsetLeft}px`;


    if(mode == 'All'){
        filterdList = null;
        render();
    } else if(mode == 'ongoing'){
        for(let i=0; i<taskList.length; i++){
            if(!taskList[i].isComplete){
                filterdList.push(taskList[i]);
            }
        }
        render(filterdList);
    } else if(mode == 'Done'){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete){
                filterdList.push(taskList[i]);
            }
        }
        render(filterdList);
    }
}
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2,9);
}




addButton.addEventListener('click', add);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(e){
        filter(e);
    });
}
userInput.addEventListener('focus',() => {
    userInput.value = '';
});

userInput.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
        add();
    }
});

