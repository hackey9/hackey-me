import {createElement} from 'react';
import {render as renderReactDOM} from 'react-dom';
import Root from "Components/Root";
import {register as registerSW} from './serviceWorker';


renderReactDOM(createElement(Root), document.getElementById('root'));

registerSW();
