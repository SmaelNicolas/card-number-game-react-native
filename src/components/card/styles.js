import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		width: "80%",
		borderRadius: 3,
		padding: 40,
		backgroundColor: colors.text,
		alignItems: "center",
		shadowColor: colors.text,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		marginVertical: 40,
	},
});
