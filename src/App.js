import { Component } from 'react';
import Customer from './components/Customer'; // Customer 클래스 불러온다.
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

// 가로 길이가 1080픽셀 보다 작아질 때는 테이블 크기 항상 유지하도록.
const styles = theme => ({
  root: {
    width:'100%',
    marginTop : theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth: 1080
  }
})

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
    const {classes} = this.props;
    return (
      <div>
        <Paper className = {classes.root}>
          <Table className = {classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {customer.map(c => {
                  return ( 
                    <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>); })
              }
            </TableBody>       
          </Table>
        </Paper>
        
        
      </div>   
    );
  }
}

export default withStyles(styles)(App);
