import React from "react";
class App113 extends React.Component {
  render() {
    return (
      <form action='#'>
        <label htmlFor='name'>First Name</label>
        <input type='text' id='name' />
        <br />
        <label htmlFor='last'>Last name</label>
        <input type='text' id='last' />
        <br />
        <label htmlFor='age'>Age:</label>
        <select name='' id='age'>
          <option value=''>Age:0-15</option>
          <option value=''>Age:16-21</option>
          <option value=''>Age:22-30</option>
          <option value=''>Age:31-40</option>
        </select>
        <br />
        <label htmlFor='textarea'></label>
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <br />
        <button type='submit'>send</button>
      </form>
    );
  }
}
export default App113;
