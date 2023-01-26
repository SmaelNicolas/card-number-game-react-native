import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { generateRandomNumber } from "../../utils/randomNumber";
import { styles } from "./styles";

export const GameScreen = ({ userNumber, handleGameOver }) => {
	const [currentGuest, setCurrentGuest] = useState(
		generateRandomNumber(1, 100, userNumber)
	);
	const [rounds, setRounds] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		currentGuest === userNumber && handleGameOver(rounds);
	}, [currentGuest, userNumber, handleGameOver]);

	const onHandleNextGuest = (direction) => {
		if (
			(direction === "lower" && currentGuest < userNumber) ||
			(direction === "greater" && currentGuest > userNumber)
		) {
			return Alert.alert("Nop", "Incorrect", [
				{
					text: "Ups",
					style: "Cancel",
				},
			]);
		}

		if (direction === "lower") {
			currentHigh.current = currentGuest;
		} else {
			currentLow.current = currentGuest;
		}

		const nextNumber = generateRandomNumber(
			currentLow.current,
			currentHigh.current,
			currentGuest
		);

		setCurrentGuest(nextNumber);
		setRounds((rounds) => rounds + 1);
	};

	return (
		<View style={styles.container}>
			<Card>
				<Text style={styles.title}>Lets find your number</Text>
				<NumberContainer number={currentGuest} />
				<View style={styles.containerButtons}>
					<Button
						title="Lesser"
						onPress={() => onHandleNextGuest("lower")}
						color={colors.background}
					/>
					<Button
						title="Greater"
						onPress={() => onHandleNextGuest("greater")}
						color={colors.background}
					/>
				</View>
			</Card>
		</View>
	);
};
