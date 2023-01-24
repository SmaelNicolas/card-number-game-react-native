import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		height: 120,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
	},
	title: {
		fontSize: 25,
		color: colors.text,
		fontFamily: "Raleway-SemiBold",
		textTransform: "uppercase",
	},
});
