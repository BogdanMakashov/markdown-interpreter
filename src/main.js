import './style.css';

const possibleElements = [
	{
		name: 'Heading',
		regexp: /#{1,5}\s(.+)/gm,
		replacer: (text) => `<h1>${text}</h1><hr>`,
	},
	{
		name: 'Bold',
		regexp: /\*\*(.+?)\*\*(?!\*)/gm,
		replacer: (text) => `<strong>${text}</strong>`,
	},
	{
		name: 'Italic',
		regexp: /\*(.+?)\*(?!\*)/gm,
		replacer: (text) => `<i>${text}</i>`,
	},
	{
		name: 'Blockquote',
		regexp: /&gt; (.+)/gm,
		replacer: (text) => `<blockquote>${text}</blockquote>`,
	},
	{
		name: 'Code',
		regexp: /\`(.+?)\`(?!\`)/gm,
		replacer: (text) => `<code>${text}</code>`,
	},
];

document.addEventListener('DOMContentLoaded', () => {
	const meEditor = document.querySelector('.markdown-container');
	const meEditorOutput = document.querySelector('.markdown-output');

	meEditor.addEventListener('input', (event) => {
		const initialContent = event.target.innerHTML;
		let outputContent = initialContent;

		for (const markdownElement of possibleElements) {
			const matches = initialContent.match(markdownElement.regexp) || [];

			if (matches.length) {
				outputContent = outputContent.replace(markdownElement.regexp, (_, p1) => {
					return markdownElement.replacer(p1);
				});
			}
		}

		if (event.inputType === 'insertLineBreak') {
			outputContent += '<br>';
		}

		meEditorOutput.innerHTML = outputContent;
	});
});
