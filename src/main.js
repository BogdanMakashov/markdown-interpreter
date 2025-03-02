import './style.css';

const boldRegexp = /\*\*(.+?)\*\*(?!\*)/gm;

document.addEventListener('DOMContentLoaded', () => {
	const meEditor = document.querySelector('.markdown-container');
	const meEditorOutput = document.querySelector('.markdown-output');

	meEditor.addEventListener('input', (event) => {
		const initialContent = event.target.textContent;
		let outputContent = initialContent;
		const boldMatches = initialContent.match(boldRegexp) || [];

		if (boldMatches.length) {
			outputContent = initialContent.replace(boldRegexp, (_, p1) => {
				return `<strong>${p1}</strong>`;
			});
		}

		meEditorOutput.innerHTML = outputContent;
	});
});
