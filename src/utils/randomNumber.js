export const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min) + min);

	if (randomNumber === exclude) {
		generateRandomNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};
