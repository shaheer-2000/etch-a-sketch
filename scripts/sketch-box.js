const sketchBox = document.querySelector("#sketch-box");
let mouseDown = false;
let pixelCount = 0;

const markPixel = (e) => {
	e.target.classList.add("marked");
};

const mouseDownHandler = (e) => {
	mouseDown = true;

	markPixel(e);
};

const mouseUpHandler = (e) => {
	mouseDown = false;
};

const mouseOverHandler = (e) => {
	if (mouseDown) {
		markPixel(e);
	}
};

// TODO: add touch movement support for mobile devices

// disable default drag-and-drop
const mouseMoveHandler = (e) => {
	e.preventDefault();
};

const createPixel = () => {
	const pixelBox = document.createElement("div");
	pixelBox.classList.add("pixel-box");

	pixelBox.addEventListener("mousemove", mouseMoveHandler);
	pixelBox.addEventListener("mousedown", mouseDownHandler);
	pixelBox.addEventListener("mouseover", mouseOverHandler);
	pixelBox.addEventListener("mouseup", mouseUpHandler);

	return pixelBox;
};

const appendPixel = () => {
	sketchBox.appendChild(createPixel());

	pixelCount++;
};

const removePixel = () => {
	document.querySelector(".pixel-box").remove();

	pixelCount--;
};

const clearGrid = () => {
	Array.from(sketchBox.children).forEach((pixel) => {
		if (pixel.classList.contains("marked")) {
			pixel.classList.remove("marked");
		}
	})
};

const createGrid = (dimensions) => {
	const pixelsNeeded = (dimensions * dimensions);

	clearGrid();

	if (pixelCount > pixelsNeeded) {
		for (let i = pixelCount; i > pixelsNeeded; i--) {
			removePixel();
		}
	} else if (pixelCount < pixelsNeeded) {
		for (let i = pixelCount; i < pixelsNeeded; i++) {
			appendPixel();
		}
	}
};

export default {
	createGrid,
	clearGrid
};
