import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // If reusing *this* with multiple methods inside of a component, it's helpful to bind *this* with all
  // of those methods using the following.
  // constructor() {
  //  super();
  //    this.goToStore = this.goToStore.bind(this);
  //    this.mySecondMethod = this.goToStore.bind(this);
  //    and so on
  //  }


  goToStore(event) {
    event.preventDefault(); // stops page refresh, which is default behavior when form is submitted
    // 1 - Grab the text from the box on the page
    const storeId = this.storeInput.value;

    // 2 - Transition fro / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    // return React.createElement('h1', {className: 'big-stuff'}, 'This is a big font'); **this would be WITHOUT JSX
    return (
      // You must always return only ONE element/parent-tag, so nest things if you need to have more than one tag returned
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}> { /* use .bind(this) to pass the component to a function
       outside the render method. Another way to write this.goToStore.bind(this), is (e) => this.goToStore(e)*/ }
        { /* Inside of JSX element, you need to use this method. Regular comment convention doesn't work */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
          getFunName() } ref={ (input) => { this.storeInput = input } } />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

// use context(a way of declaring data/objects at the top level, to be used by all lower levels)  to surface the router.

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
