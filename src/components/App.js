import React, {Component} from 'react';
import '../styles/App.css';
import Typist from 'react-typist';

class App extends Component {
  state = {
    closed: false,
    closing: false,
    opening: false,
    full: false,
    hidden: false,
  };

  close = () => {
    if (this.state.closed) {
      this.setState({closed: false});
    } else {
      this.setState({closing: true});
      setTimeout(
        () => {
          this.setState({closed: true, closing: false});
        },
        140,
      );
    }
  };

  full = () => {
    this.state.full
      ? this.setState({full: false})
      : this.setState({full: true});
  };

  hide = () => {
    if (this.state.hidden) {
      this.setState({opening: true});
      setTimeout(
        () => {
          this.setState({hidden: false, opening: false, full: false});
        },
        140,
      );
    } else {
      this.setState({closing: true});
      setTimeout(
        () => {
          this.setState({hidden: true, closing: false});
        },
        140,
      );
    }
  };

  render() {
    return (
      <div>
        {this.state.closed || this.state.hidden
          ? null
          : <div className="App">
              <div
                className={
                  this.state.full
                    ? 'term-container-full'
                    : this.state.closing
                        ? 'term-container-small'
                        : 'term-container'
                }
              >
                <div className="status-bar">
                  <span className="x-out bar-button" onClick={this.close}>x</span>
                  <span className="expand bar-button" onClick={this.full}>+</span>
                  <span className="minus-down bar-button" onClick={this.hide}>-</span>
                </div>
                <Typist stdTypingDelay={1}>
                  <div name="term" id="term-textarea" className="term-textarea">
                    <span className='run'>./Alex_Cushing</span>
                    <br/>
                    Welcome to my fun terminal!
                  </div>
                </Typist>
              </div>
            </div>}
        {this.state.hidden
          ? <span
              onClick={this.hide}
              className={this.state.opening ? 'bubbleBig' : 'bubble'}
            >
              {this.state.opening ? '' : '>_'}
            </span>
          : null}
      </div>
    );
  }
}

export default App;
