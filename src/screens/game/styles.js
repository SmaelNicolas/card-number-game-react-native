import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		fontFamily: "Raleway-SemiBold",
		color: colors.secondary,
		fontSize: 20,
		textTransform: "capitalize",
	},
	containerButtons: {
		width: "70%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
