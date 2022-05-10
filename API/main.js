// 처음 시작할 때 설정하는 것들은 모두 여기..!
let news = [];
let menu = document.querySelectorAll('.menu button');
menu.forEach((item) => item.addEventListener('click',(e) => getNewsByTopic(e)));
let url;
let page = 1;
let totalPages = 0;
const MAX_PAGE = 5;

// 뉴스 데이터를 가져오는 getNews함수 (중복되어 들어가는 것이라 따로 뺏음)
const getNews = async () => {
        // try{
        //     let header = new Headers({'x-api-key':'Axy3VSrAR2zrJPf_JgQ7qtD71RulmOIz2rR3rXBkY08'});
        //     // let header = new Headers({'x-api-key':'Axy3VSrAR2zrJPf_JgQ7qtD71RulmOIz2rR3rXBkY0'});
        //     // await을 쓰기위해서는 함수에 async(비동기처리)를 붙여줘야한다 ★
        //     let response = await fetch(url,{headers:header}); // ajax, axios,fetch 함수 ,await은 다음줄로 넘어가기전에 기다려 달라는 서버와의 통신을 하는 구문이 있을시에 사용
        //     let data = await response.json(); // data는 .json()을 이용하여 가져와보자
        //     if(response.status == 200){ // 정상적으로 data를 받아왔을 때 200이다.
        //         // 정상적인 경우에 출력
                
        //         if(data.total_hits == 0){
        //             throw new Error('검색된 결과가 없습니다.');
        //         }
        //         console.log(data);
        //         totalPages = data.total_pages;
        //         page = data.page;

        //         news = data.articles;
        //         // console.log(news);
        //         render();
        //     } else{ // 에러가 발생한 경우
        //         console.log(data);
        //         throw new Error(data.message)
        //     }
        // } catch(error){
        //     errorRender(error.message);
        // }
        
}

const getLatestNews = async () => {
    url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10'); // URL 클래스를 이용

    getNews();
};

// 클릭한 Topic에 따른 뉴스 가져오기
const getNewsByTopic = async (e) => {
    let topic = e.target.textContent.toLowerCase(); // url 주소에 들어가는 변수는 모두 소문자여야 하기 때문에 toLowerCase 함수 이용
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);

    getNews();
}

let searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', (e) => {
    if(e.keyCode == 13) {getNewsByKeyWord()};
})

// 검색을 통해 뉴스 불러오기
const getNewsByKeyWord = async () => {
    let keyWord = searchInput.value;
    if(!keyWord) return; // 빈칸일 경우 무시
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyWord}&countries=KR&page_size=10`);

    getNews();
}

let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getNewsByKeyWord); // 단순히 getNewsByKeyWord 변수명만을 이용해서 함수를 이용하려하면 ES6에서는 const let은 호이스팅이 적용이 안되기 때문에 변수선언 순서가 중요하다.


// 뉴스 페이지 생성
const render = () => {
    let newsHTML = '';

    newsHTML = news.map((item) => {
        return `
        <div class="news">
            <div class="left-inner">
                <!-- 뉴스 이미지 -->
                <img class="news-img" src="${item.media}" alt="">
            </div>
            <div class="right-inner">
                <!-- 글 -->
                <h2>
                    <!-- 주제 -->
                    ${item.title}
                </h2>
                <div>
                    <!-- 내용 -->
                    ${item.summary}
                </div>
                <div>
                    ${item.published_date} 출처 : ${item.rights}
                </div>
            </div>
        </div>
        `;
    }).join(''); // join은 배열변수를 string 형태로 바꿔주는 함수이다. 괄호 () 안에 어떤것을 쓰면 구분하는 콤마(,) 를 지정한 문자로 바꾸어 string으로 나타낸다.

    document.getElementById('newsBoard').innerHTML = newsHTML;
}

// 에러가 난 경우 처리
const errorRender = (message) => {
    let errorHTML = `<div class="error-msg">${message}</div>`;
    document.getElementById('newsBoard').innerHTML = errorHTML;
}

const pagenation = () => {
    // totalpage
    let pageGroup = Math.ceil(page / MAX_PAGE);
    let lastPage = pageGroup * MAX_PAGE;
    let firstPage = lastPage - 4;

    // let pagenationHTML = ``;
    let pagenationHTML = `<a href="#" class="active">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a>`;

    let links = document.getElementById('pageLinks').innerHTML = pagenationHTML;


    // page
    // firstpage
    // lastpage
    // print하기
}
pagenation();
getLatestNews();

