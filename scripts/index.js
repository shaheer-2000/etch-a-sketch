import sketchBox from "./sketch-box.js";

const root = document.querySelector(":root");

const changeGridDimensions = (dimensions) => {
	root.style.setProperty("--no-of-columns", dimensions);
	root.style.setProperty("--no-of-rows", dimensions);
};

const getGridDimensions = () => {
	const rootComputedStyle = getComputedStyle(root);

	return rootComputedStyle.getPropertyValue("--no-of-columns");
};

let gridDimension = getGridDimensions();

const gridSliderHandler = (e) => {
	if (e.target.value !== gridDimension) {
		gridDimension = e.target.value;

		changeGridDimensions(gridDimension);
		sketchBox.createGrid(gridDimension);
	}
};

const clearGridHandler = (e) => {
	sketchBox.clearGrid();
};

const gridSlider = document.querySelector("#grid-slider");
const clearGridBtn = document.querySelector("#clear-grid");

gridSlider.addEventListener("change", gridSliderHandler);
clearGridBtn.addEventListener("click", clearGridHandler);

sketchBox.createGrid(getGridDimensions());
