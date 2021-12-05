import React from 'react';
import {render} from 'react-dom';
import './assets/index.scss';
import App from "./Application/App";

// export const REQUEST_URL = navigator.userAgent.match('iPhone') && 'http://192.168.1.38:3001/' || 'http://localhost:3001/'
export const REQUEST_URL = navigator.userAgent.match('iPhone') ? 'http://192.168.0.42:3001/' : 'http://localhost:3001/'
export const KEY = process.env["REACT_APP_PRIVATE_KEY"]
const div = document.createElement('div')
div.id = 'modals'
document.body.append(div)
render(<App/>, document.getElementById('root'));
