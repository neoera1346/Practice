const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("기본 Array: ", array);

// ! If 조건문
if (array.length < 10) {
    console.log("10개 미만: ", "false")
} else {
    console.log("10개 이상: ", array)
}

// ! Show only evens
for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        console.log("Even: ", array[i])
    }
}

function onlyOdds(array) {
    console.log(array)
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
}

// ! Push method
let newArray = [];
for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        newArray.push(array[i])
    }
}
console.log("짝수 Array: ", newArray);

// ! Filter method
let oddNumbers = array.filter(function(number) {
    for (let i = 0; i < array.length; i++ ) {
        return number % 2 !== 0
    }  
  }
)
console.log("홀수 Array: ", oddNumbers)

// ! Map method
// Changing number array to boolean array
let booleanArray = array.map(function(number) {
    for (let i = 0; i < array.length; i++) {
        return number % 2 === 0
    }
})
console.log("Boolean으로 변환: ", booleanArray)

// ! Map method
let mappedArray = array.map(function(curVal, index, array) {
    // console.log("현재값: ", curVal),
    // console.log("인덱스: ", index),
    // console.log("배열: ", array)
    return curVal * 2;
})
console.log("곱2 Array: ", mappedArray)

// ! 오브젝트 배열 변환
const testJSON =
[
    {name: "무니", age: 21, height: 165},
    {name: "바우", age: 26, height: 177},
    {name: "죠르디", age: 30, height: 167},
    {name: "콘", age: 20, height: 162}
]
// console.log("testJSON: ", testJSON);

let newJSON = testJSON.map(function(element, index) {
    console.log("기존 오브젝트: ", element)

    let newObj = {}
    newObj[element.name] = element.age + ", " + element.height;
    return newObj;
})
console.log("새 오브젝트: ", newJSON)

// ! 오브젝트
let emptyObj = {};
console.log(emptyObj)
// Object.keys(emptyObj) = Object[value];

console.log(emptyObj)
