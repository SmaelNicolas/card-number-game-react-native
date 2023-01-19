import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Card } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

export const StartGame = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Comenzar Juego</Text>
			<Card style={styles.inputContainer}>
				<Text style={styles.label}>Escribe un numero</Text>
				<TextInput
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
	);
};
