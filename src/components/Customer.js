import React from 'react';

class Customer extends React.Component{ //한명에 대한 고객 정보로 들어갈 내용이 두 개의 컴포넌트로 나눠서 만든다. 이렇게 계층적으로 컴포넌트를 구성할 수 있다는 것이 리액트의 장점!
    render() { 
        return(
            <div>
                <CustomerProfile id = {this.props.id} image = {this.props.image} name = {this.props.name}/>
                <CustomerInfo birthday = {this.props.birthday} gender = {this.props.gender} job = {this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src = {this.props.image} alt = "profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer; // Customer 클래스를 내보내기 위해 export