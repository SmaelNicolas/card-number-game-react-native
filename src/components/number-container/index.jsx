import { Text, View } from "react-native";
import { styles } from "./styles";

export const NumberContainer = ({ number }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{number}</Text>
		</View>
	);
};
