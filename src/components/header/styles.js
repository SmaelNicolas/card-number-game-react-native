import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		height: height * 0.2,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
	},
	title: {
		fontSize: 23,
		color: colors.text,
		fontFamily: "Raleway-SemiBold",
		textTransform: "uppercase",
	},
});
