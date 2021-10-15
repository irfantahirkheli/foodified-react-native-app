import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/Restaurant/About'
import MenuItems from '../components/Restaurant/MenuItems'
import ViewCart from '../components/Restaurant/ViewCart'

const foods = [
	{
		title: 'Chicken Tandoori',
		description: 'Amazing indian dish with tenderlion chicken of the sizzle',
		price: '$23',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg',
	},
	{
		title: 'Chicken Jal',
		description: 'Amazing indian dish with tenderlion chicken of the sizzle',
		price: '$23',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg',
	},
	{
		title: 'Chicken 2',
		description: 'Amazing indian dish with tenderlion chicken of the sizzle',
		price: '$23',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg',
	},
	{
		title: 'Chicken ',
		description: 'Amazing indian dish with tenderlion chicken of the sizzle',
		price: '$23',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg',
	},
];

export default function Restaurant({route,navigation}) {
  return (
		<View>
			<About route={route} />
			<Divider width={1.5} style={{ marginVertical: 20 }} />
			<MenuItems foods={foods} route={route} restaurantName={route.params.name} />
			<ViewCart navigation={navigation} />
		</View>
	);
}
