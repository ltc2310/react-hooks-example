import React from 'react';
import './App.css';
import { Input, Row} from 'antd';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      width: window.innerWidth
    };
  }

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  componentDidMount(){
    document.title = this.state.firstName + ' ' + this.state.lastName;
    window.addEventListener('resize', this.handleReSize);
  }

  componentDidUpdate() {
    document.title = this.state.firstName + ' ' + this.state.lastName
  }

  handleReSize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleReSize);
  }

  render() {
    const {firstName, lastName, width} = this.state;
    const fullName = firstName + ' ' + lastName;
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <Row>width: {width}</Row>
          <Row>
            <h1>Hello {fullName}</h1>
          </Row>
          <Row>
              <label>first name:</label>
              <Input type="text" value={firstName} onChange={this.onFirstNameChange} placeholder="input your first name"/>
          </Row>
          <Row>
            <label>last name:</label>
            <Input type="text" value={lastName} onChange={this.onLastNameChange} placeholder="input your last name"/>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
