import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontSize: 18,
		color: "#212121",
		textAlign: "center",
		paddingVertical: 31,
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 15,
	},
	label: {
		fontSize: 18,
		color: "#212121",
		textAlign: "center",
		paddingVertical: 31,
	},
	input: {
		width: "100%",
		borderBottomColor: "#97a1d8",
		borderBottomWidth: 1,
		minWidth: 70,
		fontSize: 22,
		paddingVertical: 10,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		marginTop: 20,
	},
});
