import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Header } from "./components";
import { colors } from "./constants/themes/colors";
import { GameScreen, StartGame } from "./screens";
import { styles } from "./styles";

export const App = () => {
	const [loaded, error] = useFonts({
		"Karma-Regular": require("../assets/fonts/Karma-Regular.ttf"),
		"Karma-Light": require("../assets/fonts/Karma-Light.ttf"),
		"Karma-Medium": require("../assets/fonts/Karma-Medium.ttf"),
		"Karma-SemiBold": require("../assets/fonts/Karma-SemiBold.ttf"),
		"Karma-Bold": require("../assets/fonts/Karma-Bold.ttf"),
	});
	const [userNumber, setUserNumber] = useState(null);

	const onStartGame = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const Content = () =>
		userNumber ? (
			<GameScreen userNumber={userNumber} />
		) : (
			<StartGame onStartGame={onStartGame} />
		);

	if (!loaded) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title={"Adivine el numero"} />
			<Content />
		</View>
	);
};
