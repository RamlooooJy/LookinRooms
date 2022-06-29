import React from 'react';
import {render} from 'react-dom';
import './assets/index.scss';
import App from "./Application/App";

export const KEY = process.env["REACT_APP_PRIVATE_KEY"]
export const REQUEST_URL = 'https://app-table-reservation.herokuapp.com/' // navigator.userAgent.match('iPhone') ? 'http://172.20.10.2:3001/' : 'http://localhost:3001/'
const div = document.createElement('div')
div.id = 'modals'
document.body.append(div)
render(<App/>, document.getElementById('root'));
