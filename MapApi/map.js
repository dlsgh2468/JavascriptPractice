let doc = document;
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

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
