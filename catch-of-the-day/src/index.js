import React from 'react'; // no need for a file path because webpack looks in nodemodules dir for you if it's just a string.
import { render } from 'react-dom';
import StorePicker from './components/StorePicker'; // need to give relative file path for components the YOU make.


render(<StorePicker/>, document.querySelector('#main'));
