var messages = require('./messages');

import Button from './button';
import Image from './image';

// var newMessage = () => `<p>${messages.hi} ${messages.event}</p>`;
// var newMessage = () => (Button.button);
var newMessage = () => `
	<p>${messages.hi} ${messages.event}<br>
		${Image}
	</p>
	`;

var app = document.getElementById("app");
app.innerHTML = newMessage();

// Button.attachEventListener();

if (module.hot) {
	module.hot.accept();
};