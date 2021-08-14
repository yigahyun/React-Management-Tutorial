import { Component } from 'react';
import Customer from './components/Customer'; // Customer 클래스 불러온다.

const customer = [
  { //보내고자 하는 데이터 명시
  'id' : 1,
  'image':'https://placeimg.com/64/64/any',
  'name': '아기펭귄',
  'birthday' : '940807',
  'gender' : '남자',
  'job' : '가현바라기'
  },
  { //보내고자 하는 데이터 명시
    'id' : 2,
    'image':'https://placeimg.com/64/64/any',
    'name': '곰돌찡',
    'birthday' : '940807',
    'gender' : '남자',
    'job' : '가현 남친'
    },
  { //보내고자 하는 데이터 명시
    'id' : 3,
    'image':'https://placeimg.com/64/64/any',
    'name': '아깅이',
    'birthday' : '940807',
    'gender' : '남자',
    'job' : '공주의 아기'
  }
]


class App extends Component { // App 컴포넌트 안에 Customer 컴포넌트가 포함된 형태로 화면에 출력이 된다.
  render() {
    return (
      <div>
        {
          customer.map(c => { // 배열의 각 원소를 c로 순회해서 출력
            return ( // 그리고 이 한명의 c는 어떻게 출력이 될 거냐 하면
            <Customer
              key = {c.id} //map을 사용하려면 key가 필수이다. key값으로 각 원소를 구분한다.
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />);
          })
        }
      </div>   
    );
  }
}

export default App;
