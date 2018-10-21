import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import './OrganizationPage.scss';

const localizer = BigCalendar.momentLocalizer(moment) 

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
  //   let response = await axios.get('http://localhost:3000/users');
  //   console.log(response);
  //   let a = response.data;
  //   this.setState({user: response.data, user_name: a[a.length-1].user_name, user_email: a[a.length-1].user_email, user_phone: a[a.length-1].user_phone});
  // }

  render() {

    return (
      <div className="OrganizationPage">
        {this.state.user_name.length > 0 && (<div className="RecentUser">
          <h1>Recently Signed Up</h1>
          <p>{this.state.user_name}, {this.state.user_phone}, {this.state.user_email}</p>
        </div>)}

        <div className="Calendar">
          <div className="AddEvent">
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