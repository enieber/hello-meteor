import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from './App.jsx'; 

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
