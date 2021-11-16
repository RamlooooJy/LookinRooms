import React from 'react';
import {render} from 'react-dom';
import './assets/index.scss';
import App from "./Application/App";

const div = document.createElement('div')
div.id = 'modals'
document.body.append(div)
render(<App/>, document.getElementById('root'));
