//var num, str, boo;
//num = 1;
//str = 'primitive data type';
//boo = !0;
//
//var obj, arr, fnc;
//
//fnc = function(){
//    console.log('this is function literal');
//    
//};
//arr = [];
//obj ={};
//
//console.log('num:',isType(num));
//console.log('str:',isType(str));
//console.log('boo:',isType(boo));
//
//console.log('obj:',isType(obj));
//console.log('arr:',isType(arr));
//console.log('fnc:',isType(fnc));
//
//
//var html, head, body;
//
//html = document.querySelector('html');
//head = document.querySelector('head');
//body = document.querySelector('body');
//
//console.log('html:', isType(html));
//console.log('head:', isType(head));
//console.log('body:', isType(body));
//
//var page, wrapper, brand, slogan;
//
//page = document.querySelector('#page');
//wrapper = document.querySelector('.wrapper');
//brand = document.querySelector('.brand');
//slogan = document.querySelector('.slogan');
//
//console.log('page:', isType(page));
//console.log('wrapper:', isType(wrapper));
//console.log('brand:', isType(brand));
//console.log('slogan:', isType(slogan));
//
//if (isType(wrapper) === 'null'){
//    console.info('문서에 <div class="wrapper"> 요소가 존재하는지 유무를 파악해보세요.')
//}
//
//var count = 100; 
//
//if (count = (count-100)){
//    colsole.log('0보다 작아');
//}else (count-100){
//    colsole.log('0보다 커');
//};
//
//console.log('')
var page = document.querySelector('#page');

var demo = page.querySelector('.demo');

if(!demo){
    page.setAttribute('title','demo는 없네');
}
else{
    page.setAttribute('title','demo 있다');
};