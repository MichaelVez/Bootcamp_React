import React from "react";
import "./E3.2.css";

class App32 extends React.Component {
  render() {
    return (
      <div className='quiz'>
        <h1 className='QuizTitle'>Welcome to my Quiz</h1>
        <div className='Q1'>
          <div className='Q1Title'>Q1:Do you like programming</div>
          <input type='text' className='Q1Input'></input>
        </div>
        <div className='Q2'>
          <div className='Q2Title'>Q2:Are you in a bootcamp?</div>
          <input type='checkbox' className='Q2Input'></input>
        </div>
      </div>
    );
  }
}
export default App32;
