let store = {
  name: "noona's fruit store",
  fruits: ["banana", "apple", "mango"],
  location: "seoul",
};
// console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.location}에 있습니다.`);

let name = "noona store";
let fruits = ["banana", "apple", "mango"];
let address = {
  country: "Korea",
  city: "Seoul",
};

function findStore(obj) {
  let {
    name,
    address: { city },
  } = obj;
  return name == "noona store" && city == "Seoul";
}

// console.log(findStore({name,fruits,address}));

function getNumber() {
  let array = [1, 2, 3, 4, 5, 6]; // 여기서부터 바꾸시오

  return { first, third, forth };
}
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
//   console.log(getCalendar('January','Febuary','March')); // 여기를 바꾸시오

function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];

//   spread Operator
  return Math.min(...a,...b); // 여기를 바꾸시오
}
// console.log(getMinimum());

function sumNumber() {
    // 여기서부터 바꾸시오 
    const sum = (a, b)=> a+b
    return sum(40, 10);
    
}

function sumNumber() {
  //여기를 바꾸시오
  let addNumber = (a) => (b) => (c) => a+b+c;
  return addNumber(1)(2)(3);
}
// console.log(sumNumber());


let numArr = [1,2,3,4,5];

// numArr.forEach((item) => {console.log(item)});

let data = numArr.map((item) => {
    return item + 'AAA';
})

let filteredData = numArr.filter((item) => {return item >= 3});

// console.log(filteredData);

let findedData = numArr.findIndex((item) => {return item>3});
console.log(findedData)

