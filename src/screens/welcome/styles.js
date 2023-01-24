import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.background,
	},
	containerTitle: {
		width: "95%",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		textTransform: "uppercase",
		color: colors.text,
		fontSize: 35,
		fontFamily: "Raleway-SemiBold",
	},
	subtitle: {
		fontSize: 25,
		color: colors.primary,
		marginBottom: 25,
		fontFamily: "Raleway-Regular",
	},
	containerInput: {
		width: "95%",
		justifyContent: "flex-start",
		alignItems: "center",
		marginVertical: 20,
	},
	text: {
		color: colors.primary,
		fontFamily: "Raleway-Medium",
		marginVertical: 20,
	},
	input: {
		width: "90%",
		borderColor: colors.primary,
		borderWidth: 1,
		minWidth: 70,
		fontSize: 22,
		paddingVertical: 10,
		textAlign: "center",
		color: colors.text,
	},
});
