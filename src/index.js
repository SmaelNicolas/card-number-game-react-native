import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Header } from "./components";
import { colors } from "./constants/themes/colors";
import { useFontCustom } from "./hooks/useFont";
import { GameScreen, StartGame, WelcomeScreen } from "./screens";
import { styles } from "./styles";

export const App = () => {
	const { loaded } = useFontCustom();

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
