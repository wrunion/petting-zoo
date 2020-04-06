/* eslint-disable no-console */
// import './styles.css';
// import $ from 'jquery';

/* Curried function to change property values */
const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		});
	};
};

/* Functions to interact with animal */
const petAnimal = changeState('happiness')(5);
const playWithAnimal = changeState('happiness')(10);
const feedSnack = changeState('hunger')(-3);
const feedDinner = changeState('hunger')(-5);

const keepTrackOfState = () => {
  let state = {};
  return(callbackFunction) => {
    let newState = callbackFunction(state);
    state = { ...newState };
    return newState;
  }
}

const changeState = keepTrackOfState();

$(document).ready(function() {

  let animalName = $("input#animalName").val();
  let userName = $("input#userName").val();
  
	$('#feedBlue').click(() => {
		const plant = stateChanger(blueFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
	$('#feedGreen').click(function() {
		const plant = stateChanger(greenFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
	$('#feedYucky').click(function() {
		const plant = stateChanger(yuckyFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
});






// const storeState = () => {
// 	let currentState = {};
// 	return (stateChangeFunction) => {
// 		const newState = stateChangeFunction(currentState);
// 		currentState = { ...newState };
// 		return newState;
// 	};
// };
