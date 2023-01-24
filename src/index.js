import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Header } from "./components";
import { colors } from "./constants/themes/colors";
import { GameScreen, StartGame, WelcomeScreen } from "./screens";
import { styles } from "./styles";

export const App = () => {
	const [loaded, error] = useFonts({
		"Raleway-Thin": require("../assets/fonts/Raleway-Thin.ttf"),
		"Raleway-ExtraLight": require("../assets/fonts/Raleway-ExtraLight.ttf"),
		"Raleway-Light": require("../assets/fonts/Raleway-Light.ttf"),
		"Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
		"Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
		"Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
		"Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
		"Raleway-ExtraBold": require("../assets/fonts/Raleway-ExtraBold.ttf"),
	});
	const [userNumber, setUserNumber] = useState(null);
	const [name, setName] = useState("");
	const [showWelcome, setShowWelcome] = useState(true);

	const onStartGame = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const handleLogged = (value) => {
		setName(value);
		setShowWelcome(false);
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

	const RenderWelcome = () =>
		showWelcome && <WelcomeScreen handleLogged={handleLogged} />;

	const RenderGame = () =>
		!showWelcome && (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Header name={name} title="Guess the number" />
				<Content />
			</View>
		);

	const RenderApp = () => (
		<>
			<RenderWelcome />
			<RenderGame />
			<StatusBar style="light" />
		</>
	);

	return <RenderApp />;
};
