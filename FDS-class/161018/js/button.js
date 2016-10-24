// 일단 버튼정보를 담을 변수를 만들어서, 버튼 클래스를 가져와서 넣는다.

var btn = wrapper.querySelector('button-01');
var btnActive = btn.querySelector('button-active');

// 클릭을 했을때 활성화된 클래스가 부여되어있으면 변화없고, 클릭한 상태면 색이 변하는 클래스를 부여한다.


if (btnActive === null) {
    btn.setAtrribute(btnActive);
}else{
    btn.removeAttribute(btnActive);
}