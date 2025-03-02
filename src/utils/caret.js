export const saveCaretPosition = () => {
	const selection = window.getSelection();

	if (selection.rangeCount > 0) {
		const { startContainer, startOffset, endContainer, endOffset } = selection.getRangeAt(0);

		return {
			startContainer,
			startOffset,
			endContainer,
			endOffset,
		};
	}

	return null;
};

export const restoreCaretPosition = (savedPosition, editor) => {
	const selection = window.getSelection();
	console.log('🚀 ~ restoreCaretPosition ~ selection:', selection);
	const range = document.createRange();

	range.collapse(true);

	range.setStart(editor.childNodes[0], selection.anchorOffset + 1);

	selection.removeAllRanges();
	selection.addRange(range);
};
