import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

export const WelcomeScreen = ({ handleLogged }) => {
	const [name, setName] = useState("");

	const handleName = (value) => {
		setName(value.replace(/[^a-zA-Z]/g, ""));
	};

	const RenderButton = () =>
		name.length > 3 && (
			<Button
				title="Continue"
				color={colors.text}
				onPress={() => handleLogged(name)}
			/>
		);

	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.subtitle}>Welcome to </Text>
				<Text style={styles.title}>Guess the number</Text>
			</View>
			<View style={styles.containerInput}>
				<Text style={styles.text}> Please enter your name</Text>
				<TextInput
					value={name}
					onChangeText={handleName}
					placeholder="Name"
					style={styles.input}
					keyboardType="default"
					placeholderTextColor={colors.secondary}
				/>
			</View>
			<RenderButton />
		</View>
	);
};
