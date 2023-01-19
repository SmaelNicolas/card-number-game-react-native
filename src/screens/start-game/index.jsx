import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export const StartGame = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Comenzar Juego</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Escribe un numero</Text>
				<TextInput
					placeholder="0"
					style={styles.input}
					keyboardType="numeric"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					color="#c4e4e9"
					title="Reiniciar"
					onPress={() => console.log()}
				/>
				<Button
					color="#97a1e8"
					title="Confirmar"
					onPress={() => console.log()}
				/>
			</View>
		</View>
	);
};
