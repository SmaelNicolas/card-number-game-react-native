import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.background,
	},
	containerScroll: {
		flex: 1,
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 15,
	},
	label: {
		fontSize: 18,
		color: colors.background,
		fontFamily: "Raleway-Medium",
		textAlign: "center",
		paddingVertical: 5,
	},
	input: {
		width: "100%",
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		minWidth: 70,
		fontSize: 22,
		marginVertical: 40,
		padding: 4,
		textAlign: "center",
		fontFamily: "Raleway-Regular",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		marginTop: 20,
	},
	confirmedContainer: {
		backgroundColor: colors.primary,
	},
	confirmedTitle: {
		color: colors.background,
		fontFamily: "Raleway-Bold",
		fontSize: 20,
	},
});
