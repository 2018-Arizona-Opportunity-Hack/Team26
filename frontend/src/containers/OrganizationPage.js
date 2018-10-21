import React, { Component } from 'react';
import axios from 'axios';
import './OrganizationPage.scss';
import BarChart from './BarChart';

class OrganizationPage extends Component {
  constructor(props) {
    super(props)
    this.state = { users: {},
      user_name: "",
      user_email: "",
      user_phone: ""}
  }

  async componentDidMount(){
    let response = await axios.get('http://localhost:3000/users');
    console.log(response);
    let a = response.data;
    this.setState({user: response.data, user_name: a[a.length-1].user_name, user_email: a[a.length-1].user_email, user_phone: a[a.length-1].user_phone});
  }

  render() {
    return (
      <div className="OrganizationPage">
      <h1>Recently Signed Up</h1>
      <p>{this.state.user_name}, {this.state.user_phone}, {this.state.user_email}</p>
      </div>
    );
  }
}

export default OrganizationPage;