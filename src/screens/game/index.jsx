import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { generateRandomNumber } from "../../utils/randomNumber";
import { styles } from "./styles";

export const GameScreen = ({ userNumber }) => {
	const [currentGuest, setCurrentGuest] = useState(
		generateRandomNumber(1, 100, userNumber)
	);

	return (
		<View style={styles.container}>
			<Card>
				<Text style={styles.title}>Lets find your number</Text>
				<NumberContainer number={currentGuest} />
				<View style={styles.containerButtons}>
					<Button
						title="Lesser"
						onPress={() => {}}
						color={colors.background}
					/>
					<Button
						title="Greater"
						onPress={() => {}}
						color={colors.background}
					/>
				</View>
			</Card>
		</View>
	);
};
