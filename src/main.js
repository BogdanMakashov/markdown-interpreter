import './style.css';

import { saveCaretPosition, restoreCaretPosition } from './utils/caret';

const boldRegexp = /\*\*(.+?)\*\*(?!\*)/gm;

const createStrong = (text) => {
	const strong = document.createElement('strong');

	strong.textContent = text;

	return strong;
};

document.addEventListener('DOMContentLoaded', () => {
	const meEditor = document.querySelector('.markdown-container');
	const meEditorOutput = document.querySelector('.markdown-output');

	const transformedNodesIndexes = [];

	meEditor.addEventListener('input', (event) => {
		// const meEditorNodes = meEditor.childNodes;
		const initialContent = event.target.textContent;
		let outputContent = initialContent;
		const boldMatches = initialContent.match(boldRegexp) || [];

		if (boldMatches.length) {
			outputContent = initialContent.replace(boldRegexp, (match, p1, p2, offset, string) => {
				return `<strong>${p1}</strong>`;
			});
		}

		meEditorOutput.innerHTML = outputContent;

		// meEditorNodes.forEach((childNode, index) => {
		// 	const content = childNode.textContent;

		// 	if (transformedNodesIndexes.includes(index)) {
		// 		meEditorOutput.insertAdjacentElement('afterbegin', childNode);
		// 		return;
		// 	}

		// 	if (boldRegexp.test(content)) {
		// 		// const savedPosition = saveCaretPosition();
		// 		const textWithoutSpecialChars = content.slice(2, -2);
		// 		const strongElement = createStrong(textWithoutSpecialChars);

		// 		// meEditorOutput.replaceChildren(strongElement);

		// 		meEditorOutput.insertAdjacentElement('afterbegin', strongElement);

		// 		transformedNodesIndexes.push(index);

		// 		// restoreCaretPosition(savedPosition, meEditor);
		// 	}

		// 	meEditorOutput.insertAdjacentElement('afterbegin', childNode);
		// });
	});
});
