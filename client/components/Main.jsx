import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Column from "./Column.jsx";
import Sticky from './Sticky.jsx';
import CreateSticky from './CreateSticky.jsx';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      data: [
        {column:'To Do', text: 'yerr'},
        {column:'In The Works', text: 'fdsf'},
        {column:'Revising', text: 'fdf'},
        {column:'Complete', text: 'yew4g5err'},
        {column:'Complete', text: 'yew4g5err'},
        {column:'Complete', text: 'yew4g5err'},
        {column:'Complete', text: 'yew4g5err'},
      ]
    }
    this.setColumn = this.setColumn.bind(this)
    this.reset = this.reset.bind(this)
  }
  // componentDidMount() {
  //   fetch('/api/get')
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(data => {
  //         // { column: 'todo', text: 'yerrrr'}
  //         console.log(`data ${data}`);
  //         return this.setState({ 
  //           data: [{column: data.column, text: data.text}]
  //         })
  //       })
  //       .catch(err => console.log(`fetch error ${err}`));
  // }

  setColumn(text, column) {
    const copyOfData = this.state.data;
    copyOfData.map((el) => {
      if (el.text === text){
        el.column = column;
      }
    })
    this.setState(() => {
      return{
        data: copyOfData
      }
    })
  }

  reset() {
    const newCopy = this.state.data;
    newCopy.map((copy) => {
      copy.column = 'null'
    })
    this.setState(() => {
      return {
        data: newCopy
      }
    })
  }

  render() {
    console.log(this.props.data);
    
    return (
      //where the board will render with all the sticky notes
      <div className='columns-container'>
        <div className='header'>
          <h1>SCheetah</h1>
        </div>
        {/* <h1>This SHOULD SAY: {this.props.info.data.text}</h1> */}
        <div className='BoardBody'> 
          <Column column='To Do' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'To Do').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='In The Works' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'In The Works').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='Revising' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'Revising').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
          <Column column='Complete' setColumn={this.setColumn}>
            {this.state.data.filter((el) => el.column === 'Complete').map((el) => (
              <Sticky text={el.text} />
              ))}
          </Column>
        </div>
          
        <div className='Footer'>
          <CreateSticky />
          <button>Logout</button>
        </div>
      </div>
    );
  }
}

export default Main;
