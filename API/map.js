let doc = document;


const moveSideMenu = () => {
    let sideBtn = doc.getElementById('show-menu-btn');
    let sideCont = doc.querySelector('.side-nav-con');
    let check = false;
    sideBtn.addEventListener('click' , () =>{
        sideBtn.classList.toggle('active');

        if(!check){
            // 집어넣기
            sideCont.style.transform = `translate3d(0,0,0)`;
            check=true;
        }
        else{
            // 다시빼기
            sideCont.style.transform = `translate3d(-150px,0,0)`;
            check=false;
        }
    });
}


(function init(){
    moveSideMenu();
})();
