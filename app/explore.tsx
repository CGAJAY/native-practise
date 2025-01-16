import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Explore = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>explore</Text>
		</View>
	);
};

export default Explore;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,10,255,0.5)",
	},
	text: {
		color: "black",
		fontSize: 42,
		fontWeight: "900",
		textAlign: "center",
		padding: 20,
		backgroundColor: "rgba(255,255,255,0.5)",
	},
});
