import React, { useState } from "react";
import {
	Button,
	Keyboard,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Card } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

export const StartGame = () => {
	const [enteredValue, setEnteredValue] = useState("");

	const onHandlerChange = (text) => {
		setEnteredValue(text.replace(/[^0-9]/g, ""));
	};

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
							onPress={() => console.log()}
						/>
						<Button
							color={colors.primary}
							title="Confirmar"
							onPress={() => console.log()}
						/>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};
