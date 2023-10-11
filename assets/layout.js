const FoodData = {
	init: function() {
		this.copyClipboard();
	},

	copyClipboard: function() {
		document.querySelector('#showDataButton').addEventListener('click', () => {
			setTimeout(() => {
				const idValue = document.querySelector('.CopyData').getAttribute('data-title');
				this.copyToClipboard(idValue);
				console.log(idValue);
			}, 100);
		});
	},

	copyToClipboard: function(text) {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	},
	};

	document.addEventListener('DOMContentLoaded', () => {
	FoodData.init();
});
