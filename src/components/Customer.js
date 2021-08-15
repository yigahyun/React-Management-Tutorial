import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{ //한명에 대한 고객 정보로 들어갈 내용이 두 개의 컴포넌트로 나눠서 만든다. 이렇게 계층적으로 컴포넌트를 구성할 수 있다는 것이 리액트의 장점!
    render() { 
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src = {this.props.image} alt = "profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}



export default Customer; // Customer 클래스를 내보내기 위해 export