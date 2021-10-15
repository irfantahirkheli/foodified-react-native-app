import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const localRestaurants = [
	{
		name: 'Restaurant name 1',
		image_url:
			'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/saltlake/VisitSaltLake_GranaryDistrict_AustenDiamondPhotography_32_658faa91-a1d6-4111-bc8e-692f9b9e6d8b.jpg',
		categories: [{ title: 'Fast Food' }, { title: 'Coffee' }],
		price: '$$',
		review_count: 144,
		rating: 4.5,
		waiting: '30-40 min',
	},
	{
		name: 'Restaurant name 2',
		image_url:
			'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/saltlake/VisitSaltLake_GranaryDistrict_AustenDiamondPhotography_32_658faa91-a1d6-4111-bc8e-692f9b9e6d8b.jpg',
		categories: [{ title: 'Cafe' }, { title: 'Bar' }],
		price: '$$',
		review_count: 34,
		rating: 3.5,
		waiting: '30-40 min',
	},
	{
		name: 'Restaurant name 3',
		image_url:
			'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/saltlake/VisitSaltLake_GranaryDistrict_AustenDiamondPhotography_32_658faa91-a1d6-4111-bc8e-692f9b9e6d8b.jpg',
		categories: [{ title: 'Indian' }, { title: 'Pakistani' }],
		price: '$$',
		review_count: 23,
		rating: 4.0,
		waiting: '30-40 min',
	},
];
export default function RestaurantItems({ navigation, ...props }) {
	return (
		<>
			{props.restaurants &&
				props.restaurants.map((restaurant, index) => (
					<TouchableOpacity key={index}
						activeOpacity={1}
						style={{ marginBottom: 20 }}
						onPress={() =>
							navigation.navigate('Restaurant', {
								name: restaurant.name,
								image: restaurant.image_url,
								price: restaurant.price,
								rating: restaurant.rating,
								reviews: restaurant.review_count,
								categories: restaurant.categories,
							})
						}
					>
						<View
							key={index}
							style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
						>
							<RestaurantImage src={restaurant.image_url} />
							<RestaurantInfo
								name={restaurant.name}
								rating={restaurant.rating}
								waiting={restaurant.waiting}
							/>
						</View>
					</TouchableOpacity>
				))}
		</>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			source={{
				uri: props.src,
			}}
			style={{
				width: '100%',
				height: 180,
			}}
		></Image>
		<TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
			<MaterialCommunityIcons
				name="heart-outline"
				size={25}
				color="white"
			></MaterialCommunityIcons>
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: 'row',
			alignItems: 'center',
			marginTop: 10,
			justifyContent: 'space-between',
		}}
	>
		<View>
			<Text style={{ fontWeight: 'bold', fontSize: 15 }}>{props.name}</Text>
			<Text style={{ fontSize: 13, color: 'gray' }}>30-40 min</Text>
		</View>
		<View
			style={{
				justifyContent: 'center',
				backgroundColor: '#eee',
				padding: 5,
				borderRadius: 15,
				width: 30,
				height: 30,
				alignItems: 'center',
			}}
		>
			<Text>{props.rating}</Text>
		</View>
	</View>
);
