import React from 'react'
import './index.css'
import {
  StyledClockTitle,
  StyledHourContainer,
  StyledClockContainer,
  StyledHour,
} from '../../utils/style/Atoms'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
      seconds: new Date().getSeconds(),
    })

    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()

    if (hour !== this.state.hour) {
      this.setState({
        hour: hour,
      })
    }
    if (minutes !== this.state.minutes) {
      this.setState({
        minutes: minutes,
      })
    }
  }

  render() {
    return (
      <div>
        <StyledClockTitle isdarkmode={this.props.mode.theme}>
          Bonjour,
        </StyledClockTitle>
        <StyledClockContainer>
          <StyledHourContainer>
            <StyledHour className="clockHour" id="hour">
              {this.state.hour}
            </StyledHour>
          </StyledHourContainer>
          <StyledHourContainer>
            <StyledHour className="clockMinute" id="minute">
              {this.state.minutes}
            </StyledHour>
          </StyledHourContainer>
          <StyledHourContainer>
            <StyledHour className="clockSecond">
              {this.state.seconds}
            </StyledHour>
          </StyledHourContainer>
        </StyledClockContainer>
      </div>
    )
  }
}

export default Clock
