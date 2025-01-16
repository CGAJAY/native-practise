import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import icedCoffeeImg from "@/assets/images/iced-coffee.png";
import Explore from "./explore";

const App = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={icedCoffeeImg}
				resizeMode="cover"
				style={styles.image}
			>
				<Text style={styles.text}>Coffee Shop</Text>
				<Link href="/explore" style={styles.link} asChild>
					Explore
				</Link>
			</ImageBackground>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	text: {
		color: "white",
		fontSize: 42,
		fontWeight: "900",
		textAlign: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	link: {
		color: "white",
		fontSize: 42,
		fontWeight: "900",
		textAlign: "center",
		textDecorationLine: "underline",
		marginTop: 20,
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	image: {
		width: "100%",
		height: "100%",
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
});
