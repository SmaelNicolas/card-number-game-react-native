import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
	container: {
		width: "75%",
		padding: 20,
		backgroundColor: colors.white,
		alignItems: "center",
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
});
