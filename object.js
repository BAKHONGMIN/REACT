let myobj = {
    mynm : "방보영",
    mycafe : "cafe.naver.com/ghdals2655",
    mystudy : ["리액트", "포토샵", "자바스크립트 es5"],
    myday : ["1월", "2월", "3월", "4월", "5월"],
    myallinfo : function() {
        console.log(`${this.mynm}은 ${this.myday[4]}에 ${this.mystudy[0]} 수업을 수료합니다.`);//this 는 myobj를 의미
    }

};

// function myallinfo(){
//     console.log(`${myobj.mynm}은 ${myobj.myday[4]}에 ${myobj.mystudy[0]} 수업을 수료합니다.`);
// }

console.log(JSON.stringify(myobj));
console.log(myobj.mystudy[0]);
// 방보영은 5월에 리액트 수업을 수료합니다.
// myallinfo();
myobj.myallinfo();