type Person1 = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer1 = Person1 & {
  skills: string[];
};

const person1: Person1 = {
  name: '김사람'
};

const expert1: Developer1 = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person1[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person1, expert1]; // 근데 왜 엑스퍼트는 디벨로퍼 타입인데 펄슨 배열타입 안에?

type Color = 'red' | 'orange' | 'yellow';
const color1: Color = 'red';
const colors: Color[] = ['red', 'orange'];