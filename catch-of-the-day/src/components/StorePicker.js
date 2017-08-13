import React from 'react';

class StorePicker extends React.Component {
  render() {
    // return React.createElement('h1', {className: 'big-stuff'}, 'This is a big font'); **this would be WITHOUT JSX
    return (
      // You must always return only ONE element/parent-tag, so nest things if you need to have more than one tag returned
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
