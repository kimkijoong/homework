//typeof 키워드
//typeof ()는 함수가 아니다.


// `var` 싱글톤 패턴
var num = 102,
    str = 'typeof는 함수가 아니다.',
    boo = !false,
    fnc = function() {},
    arr = [num, boo, fnc],
    obj = {'number_type': num, 'boolean': boo};

// 원시데이터 유형
console.log('num의 데이터 유형:', typeof num);
console.log('str의 데이터 유형:', typeof str);
console.log('boo의 데이터 유형:', typeof boo);

// 참조데이터 유형
console.log('fnc의 데이터 유형:', typeof fnc);
console.log('arr의 데이터 유형:', typeof arr);
console.log('obj의 데이터 유형:', typeof obj);

console.log(typeof (num + str));

// null, object, array는 예상과 다르게 object로 나와서 혼동을 주니까 주의하자.
// 구분할 수가 없다. typeof 로는 


//instance -> 실체화된 객체
console.log('obj instanceof Object:', obj instanceof Object);
console.log('arr instanceof Object:', arr instanceof Object);
console.log('fnc instanceof Object:', fnc instanceof Object);

console.log('arr.constructor:',arr.constructor);
console.log('arr.constructor === Array',arr.constructor === Array);

function isType(data){
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}