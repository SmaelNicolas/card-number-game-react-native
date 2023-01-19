import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Header } from "./components";
import { StartGame } from "./screens";
import { styles } from "./styles";

export const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title={"Adivine el numero"} />
			<StartGame />
		</View>
	);
};
