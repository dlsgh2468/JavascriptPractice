// 랜덤번호 지정
// 유저 번호입력 가능해야함 , 버튼기능
// 번호를 맞추면 정답
// 번호가 작으면 down
// 번호가 크면 up
// reset 버튼
// 5번의 기회
// 1~100 범위의 숫자만 입력 가능 
// 이미 입력한 숫자는 입력되지 않도록

(function (){
    const userArea = document.querySelector('#user-input');
    const btnCheck = document.querySelector('#btn-check');
    const btnReset = document.querySelector('#btn-reset');
    let resultArea = document.querySelector('.result-area .text');
    let resultImg = document.querySelector('.result-area img');
    let chanceBox = document.querySelector('.chance');
    let chance = 5; // 기회
    let answer = 0; // 정답 (랜덤번호);
    let numberArr = [];

    function checkNumber(){
        let userNum = userArea.value;
        if(chance == 0){
            alert('모든 기회를 소진하였습니다.');
            btnCheck.disabled = true;
            return; // 종료
        }
        // 유효성 검사
        if(userNum < 1 || userNum > 100){  
            resultArea.textContent = '1부터 100사이의 숫자만 입력 가능합니다.';
            return;
        }
        if(numberArr.includes(userNum)){
            resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 넣어주세요.';
            console.log(numberArr);
            return;
        }

        chance--;
        chanceBox.textContent = `남은 기회 : ${chance}번`;


        if(userNum < answer){
            console.log('up');
            resultImg.src = 'https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif';
            resultArea.textContent = 'UP!';
            numberArr.push(userNum);
        } else if(userNum > answer){
            console.log('down');
            resultArea.textContent = 'DOWN!';
            numberArr.push(userNum);
        } else {
            console.log('correct');
            resultArea.textContent = '정답입니다!';
            btnCheck.disabled = true;
        }
        if(chance == 0){
            resultArea.textContent = '모든 기회를 소진하여 게임이 종료되었습니다.';
            btnCheck.disabled = true;
        }
    }

    function pickRandomNum(){
        answer = Math.floor(Math.random() * 100 + 1);
        console.log(`정답은 :: ${answer}`);
        
    }

    function reset(){
        pickRandomNum();
        chance = 5;
        btnCheck.disabled = false;
        resultArea.textContent = '정답 결과가 여기 나옵니다!';
        userArea.value = '';
    }
    
    btnCheck.addEventListener('click', checkNumber);
    btnReset.addEventListener('click', reset);
    userArea.addEventListener('focus', function(){
        userArea.value = '';
    });
    window.addEventListener('load',() => {
        // console.log('init');
        pickRandomNum();
    });

    
})();