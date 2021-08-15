import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
    },
    table: {
    minWidth: 1080
    },
    progress:{
        margin:theme.spacing.unit*2
    }
});

/* 리액트 라이브러리가 컴포넌트를 실행할 때 
1) constructor() 
2) componentWillMount() : 컴포넌트가 마운트 되기 전에
3) render() : 실제로 컴포넌트 화면에 그리고
4) componentDidMount() : // 그 이후에 실행

props or state가 변경되는 경우 -> shoudComponentUpdate() 호출 -> view 갱신한다.
*/

class App extends Component {

state = {
    customers: '',
    completed: 0
}

componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
}

callApi = async () => {
    const config = {
        headers:{
            'Accept' : 'application/json'
        }
    }
    const response = await fetch('/api/customers',config);
    const body = await response.json();
    return body;
}

progress = () =>{
    const { completed } = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1});
}

render() {
const { classes } = this.props;
return (
<Paper className={classes.root}>
<Table className={classes.table}>
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
{this.state.customers ? this.state.customers.map(c => {
return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
}) : 
<TableRow>
    <TableCell colSpan = "6" align = "center">
        <CircularProgress className = {classes.progress} variant="determinate" value = {this.state.completed}/>


    </TableCell>
</TableRow>

}
</TableBody>
</Table>
</Paper>
);
}
}

export default withStyles(styles)(App);


