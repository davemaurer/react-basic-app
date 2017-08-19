import React from 'react'; // no need for a file path because webpack looks in nodemodules dir for you if it's just a string.
import { BrowserRouter, Match, Miss } from 'react-router';
import { render } from 'react-dom';

import './css/style.css'
import App from './components/App';
import NotFound from './components/NotFound';

import StorePicker from './components/StorePicker'; // need to give relative file path for components the YOU make.

// const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
};

render(<Root/>, document.querySelector('#main'));
