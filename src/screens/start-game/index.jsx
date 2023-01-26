import React, { useState } from "react";
import {
	Alert,
	Button,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

export const StartGame = ({ onStartGame }) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(null);

	const onHandlerChange = (text) => {
		setEnteredValue(text.replace(/[^0-9]/g, ""));
	};

	const onHandleReset = (value) => {
		setEnteredValue("");
		setConfirmed(value);
		Keyboard.dismiss();
	};

	const onHandleConfirm = () => {
		const chosenNumber = parseInt(enteredValue, 10);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
			Alert.alert(
				"Invalid number",
				"Please write a number between 1 and 99",
				[
					{
						text: "Ok, Sorry",
						style: "destructive",
						onPress: onHandleReset,
					},
				]
			);
			onHandleReset(false);
		} else {
			setConfirmed(true);
			setSelectedNumber(chosenNumber);
			setEnteredValue("");
			onStartGame(chosenNumber);
		}
	};

	const onHandleStartGame = () => {
		onStartGame(selectedNumber);
	};

	const Confirmed = () =>
		confirmed && (
			<Card style={styles.confirmedContainer}>
				<Text style={styles.confirmedTitle}>Number selected</Text>
				<NumberContainer number={selectedNumber} />
				<Button
					title="Start Game"
					onPress={onHandleStartGame}
					color={colors.background}
				/>
			</Card>
		);

	return (
		<KeyboardAvoidingView
			style={styles.containerScroll}
			behavior={Platform.OS === "ios" ? "height" : "padding"}>
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}>
				<ScrollView style={styles.containerScroll}>
					<View style={styles.container}>
						<Card style={styles.inputContainer}>
							<Text style={styles.label}>Enter your number</Text>
							<Text style={styles.label}>between 1 and 99</Text>
							<TextInput
								value={enteredValue}
								onChangeText={onHandlerChange}
								placeholder="0"
								style={styles.input}
								keyboardType="numeric"
								placeholderTextColor={colors.background}
							/>
							<View style={styles.buttonContainer}>
								<Button
									color={colors.background}
									title="Reset"
									onPress={() => onHandleReset(false)}
								/>
								<Button
									color={colors.background}
									title="Confirm"
									onPress={onHandleConfirm}
								/>
							</View>
						</Card>
						<Confirmed />
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
