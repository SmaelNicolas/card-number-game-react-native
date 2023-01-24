import React, { useState } from "react";
import {
	Alert,
	Button,
	Keyboard,
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
				"Numero invalido",
				"El numero no debe ser entre 1 y 99",
				[
					{
						text: "Entendido",
						style: "destructive",
						onPress: onHandleReset,
					},
				]
			);
			onHandleReset(false);
		} else {
			setSelectedNumber(chosenNumber);
			onHandleReset(true);
		}
	};

	const onHandleStartGame = () => {
		onStartGame(selectedNumber);
	};

	const Confirmed = () =>
		confirmed && (
			<Card style={styles.confirmedContainer}>
				<Text style={styles.confirmedTitle}>Numero Seleccionado</Text>
				<NumberContainer number={selectedNumber} />
				<Button
					title="Iniciar Juego"
					onPress={onHandleStartGame}
					color={colors.primary}
				/>
			</Card>
		);
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<Text style={styles.title}>Comenzar Juego</Text>
				<Card style={styles.inputContainer}>
					<Text style={styles.label}>Escribe un numero</Text>
					<TextInput
						value={enteredValue}
						onChangeText={onHandlerChange}
						placeholder="0"
						style={styles.input}
						keyboardType="numeric"
					/>
					<View style={styles.buttonContainer}>
						<Button
							color={colors.primary}
							title="Reiniciar"
							onPress={() => onHandleReset(false)}
						/>
						<Button
							color={colors.primary}
							title="Confirmar"
							onPress={onHandleConfirm}
						/>
					</View>
				</Card>
				<Confirmed />
			</View>
		</TouchableWithoutFeedback>
	);
};
