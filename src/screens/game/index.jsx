import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min) + min);

	if (randomNumber === exclude) {
		generateRandomNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};

export const GameScreen = ({ userNumber }) => {
	const [currentGuest, setCurrentGuest] = useState(
		generateRandomNumber(1, 100, userNumber)
	);

	return (
		<View>
			<Card>
				<Text>Numero del oponente</Text>
				<NumberContainer number={currentGuest} />
				<View>
					<Button
						title="Menor"
						onPress={() => {}}
						color={colors.primary}
					/>
					<Button
						title="Mayor"
						onPress={() => {}}
						color={colors.primary}
					/>
				</View>
			</Card>
		</View>
	);
};
