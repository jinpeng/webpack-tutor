const Button = {
	button: '<button id="myButton">Press me</button>',
	attachEventListener: () => {
		document.getElementById('myButton').addEventListener('click', () => {
			// debugger;
			console.log('button clicked')
		});
	}
};

export default Button;