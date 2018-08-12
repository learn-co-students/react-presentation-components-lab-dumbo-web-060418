// Code SimpleComponent Here
import React, {Component} from 'react';
export default class SimpleComponent extends Component {
  state = {mood: 'happy'}

  changeMood = () => {
    this.state.mood === 'sad' ? this.setState({mood: 'happy'}) : this.setState({mood: 'sad'})
  }

  render(){
    return(<div onClick={this.changeMood}>{this.state.mood}</div>)
  }

}
