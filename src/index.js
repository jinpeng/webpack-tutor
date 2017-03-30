var messages = require('./messages');

import Button from './button';
import Kitten from './image';
import Upsala from './upsala';

// var newMessage = () => `<p>${messages.hi} ${messages.event}</p>`;
// var newMessage = () => (Button.button);
var newMessage = () => `
	<p>${messages.hi} ${messages.event}<br/>
		${Kitten}<br/>
		${Upsala}
	</p>
	`;

var app = document.getElementById("app");
app.innerHTML = newMessage();

// Button.attachEventListener();

if (module.hot) {
	module.hot.accept();
};