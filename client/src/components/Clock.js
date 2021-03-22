import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state= {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <Card header='Current Time'>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </Card>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

export default Clock