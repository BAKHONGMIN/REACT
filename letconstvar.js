let myname = "박홍민";
let [myemail, macafe, mystudy] = ["ghdals2655@naver.com", "cafe.naver.com/ghdals2655","react"];
let myinfo = ["ghdals2655@google.com", "cafe.naver.com/ghdals2655","react"] //array
let myinfo2 = ["1", "2", "3","4","5"];//array



let myarr = [...myinfo, ...myinfo2];//array 연결
let myarr5 = [].concat(myinfo, myinfo2); //es5 version array 연결함수 concat이용


let [myarr0, myarr1, ...lastarrall] = myinfo2; //array를 단수변수로 갈라 놓기

console.log(myinfo[0]);
console.log(myinfo);
console.log(myarr[5]);
console.log(myarr5[5]);
console.log(lastarrall[1]);