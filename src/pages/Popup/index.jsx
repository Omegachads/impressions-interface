import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

import Popup from './Popup';
import './index.css';

render(
    <Router><Popup/></Router>,
    window.document.querySelector('#app-container'),
);

if (module.hot) module.hot.accept();
