import React, { Component } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import axios from 'axios';
import './BarChart.scss';

class CheckinPage extends Component {
    constructor(props) {
        super(props)
        this.state = { chartdata: {}}
    }

    async componentDidMount(){
        let response = await axios.get('http://localhost:3000/attendance');
        console.log(response);
        let a = response.data;
        this.setState({chartdata: response.data});
    }

  render() {
    return (
      <div className="BarChart">
        <BarChart width={730} height={250} data={this.state.chartdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="total_hours" />
            <YAxis dataKey="user_name"  />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

export default CheckinPage;