import { useFonts } from "expo-font";

export const useFontCustom = () => {
	const [loaded, error] = useFonts({
		"Raleway-Thin": require("../../assets/fonts/Raleway-Thin.ttf"),
		"Raleway-ExtraLight": require("../../assets/fonts/Raleway-ExtraLight.ttf"),
		"Raleway-Light": require("../../assets/fonts/Raleway-Light.ttf"),
		"Raleway-Medium": require("../../assets/fonts/Raleway-Medium.ttf"),
		"Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
		"Raleway-SemiBold": require("../../assets/fonts/Raleway-SemiBold.ttf"),
		"Raleway-Bold": require("../../assets/fonts/Raleway-Bold.ttf"),
		"Raleway-ExtraBold": require("../../assets/fonts/Raleway-ExtraBold.ttf"),
	});

	return { loaded };
};
