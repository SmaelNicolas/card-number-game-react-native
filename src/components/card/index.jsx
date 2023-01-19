import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Card = ({ children, style }) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
};
