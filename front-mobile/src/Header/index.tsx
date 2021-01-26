import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {

	const navigation = useNavigation();

	const handleOnPress = () => {
		navigation.navigate('Home');
	}

	return (
		<TouchableWithoutFeedback onPress={handleOnPress}>
			<View style={styles.container}>
				<Image source={require('../assets/logo.png')} />
				<Text style={styles.title}>DS Delivery</Text>
			</View>
		</TouchableWithoutFeedback>
	);

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#DA5C5C',
		height: 90,
		paddingTop: 50,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	title: {
		color: '#FFFFFF',
		marginLeft: 15,
		fontWeight: 'bold',
		fontSize: 18,
		lineHeight: 25,
		letterSpacing: -0.24,
		fontFamily: 'OpenSans_700Bold'
	}
});
