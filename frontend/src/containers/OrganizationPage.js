import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import BigCalendar from 'react-big-calendar'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';
import { CSVLink } from "react-csv";

import moment from 'moment'

import './OrganizationPage.scss';

const localizer = BigCalendar.momentLocalizer(moment) 

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

class OrganizationPage extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      user: {},
      user_name: "",
      user_email: "",
      user_phone: "",
      event_date: "",
      event_start_time: "",
      event_end_time: "",
      event_name: "",
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    }

    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
  }

  handleStartTimeChange(event) {
    const input = event.target.value;

    this.setState({event_start_time: input});
  }

  handleEndTimeChange(event) {
    const input = event.target.value;

    this.setState({event_end_time: input});
  }

  handleDateChange(event) {
    const input = event.target.value;

    console.log(input)

    this.setState({event_date: input});
  }

  handleNameChange(event) {
    const input = event.target.value;

    this.setState({event_name: input});
  }

  addEventHandler (event) {
    event.preventDefault();

    
    alert('event ' + this.state.event_name + ' is on ' + new Date(this.state.event_date + ' ' + this.state.event_start_time).toString());

    this.setState({events: [...this.state.events, {
      start: new Date(this.state.event_date + ' ' + this.state.event_start_time),
      end: new Date(this.state.event_date + ' ' + this.state.event_end_time),
      title: this.state.event_name
    }]})
  }

  // async componentDidMount(){
  //   let response = await axios.get('http://localhost:3000/uav');
  //   console.log(response);
  //   let a = response.data;
  //   // this.setState({});
  // }

  async componentDidMount(){
    let response = await axios.get('http://localhost:3000/users');
    console.log(response);
    let a = response.data;
    this.setState({user: response.data, user_name: a[a.length-1].user_name, user_email: a[a.length-1].user_email, user_phone: a[a.length-1].user_phone});
  }

  render() {
    const data = [
      {name: 'Monday', day: 2},
      {name: 'Tuesday', day: 3},
      {name: 'Wednesday', day: 4},
      {name: 'Thursday', day: 2},
      {name: 'Friday', day: 5},
      {name: 'Saturday', day: 4},
      {name: 'Sunday', day: 7},
    ];

    return (
      <div className="OrganizationPage">
        {this.state.user_name.length > 0 && (<div className="RecentUser">
          <h1>Recently Signed Up:</h1>
          <p>{this.state.user_name}, {this.state.user_phone}, {this.state.user_email}</p>
        </div>)}
      <CSVLink data={csvData}>Download All Users To CSV</CSVLink>
 
      <div className="Availablity">
        <h2>Available Volunteers</h2>
        <BarChart width={800} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="day" fill="#8884d8" />
        </BarChart>
      </div>


        <div className="Calendar">
          <div className="AddEvent">
            <h2>Add Event</h2>
            <Form onSubmit={this.addEventHandler}>
              <FormGroup row>
                <Label for="eventName" sm={1}>Name</Label>
                <Col sm={11}>
                  <Input type="text" name="name" id="eventName" placeholder="Name" value={this.state.event_name} onChange={this.handleNameChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="eventDate" sm={1}>Date</Label>
                <Col sm={3}>
                  <Input type="date" name="date" id="eventDate" placeholder="Date" onChange={this.handleDateChange} />
                </Col>
                
                <Label for="eventStartTime" sm={1}>Start</Label>
                <Col sm={3}>
                  <Input type="time" name="startTime" id="eventStartTime" placeholder="Start Time" value={this.state.event_start_time} onChange={this.handleStartTimeChange} />
                </Col>
                
                <Label for="eventEndTime" sm={1}>End</Label>
                <Col sm={3}>
                  <Input type="time" name="endTime" id="eventEndTime" placeholder="End Time" value={this.state.event_end_time} onChange={this.handleEndTimeChange} />
                </Col>
              </FormGroup>
              <input type="submit" value="Create Event" />
                          </Form>
          </div>
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
            defaultView="month"
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    );
  }
}

export default OrganizationPage;