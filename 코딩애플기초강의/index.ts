
let name1 :string = 'min';
let name2 :string[] =['min','hun'];
let name3 : { name? : string} = { name : 'kin'};
let name4 :string | number = 'min';

function 함수(x:number) :number {
  return x * 2;
}

// 타입은 변수에 담아 쓸 수 있음

type Name = string | number ; //타입명 선언할 때는 변수 첫글자 대문자로 많이 작성함 (일반변수랑 구분위해)

let 이름: Name = 123;

type Mytype = [string,boolean];

let john:Mytype = ['min',true];

type Member = {
  [key: string] : string,
};

let kate: Member = {
  name: 'kim', age : '123'
}

class User {
  name: string;
  constructor(name: string){
    this.name = name;
  }
}