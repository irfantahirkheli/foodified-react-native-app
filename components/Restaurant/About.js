import React from 'react';
import { View, Text, Image } from 'react-native';

const image =
	'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/saltlake/VisitSaltLake_GranaryDistrict_AustenDiamondPhotography_32_658faa91-a1d6-4111-bc8e-692f9b9e6d8b.jpg';
const title = 'Farm house kitchen Thai Cuisine';
const description = 'Thai - Comfort Food $$ 4 star (345)';

export default function About(props) {
	const { name, image, price, rating, reviews, categories } =
		props.route.params;

	const formattedCategories = categories.map((c) => c.title).join('-');
	const description = `${formattedCategories} ${price} . ${rating} . (${reviews})`;

	return (
		<View>
			<RestaurantImage src={image} />
			<RestaurantText title={name} />
			<RestaurantDescription description={description}></RestaurantDescription>
		</View>
	);
}

const RestaurantImage = (props) => (
	<Image source={{ uri: props.src }} style={{ width: '100%', height: 180 }} />
);

const RestaurantText = (props) => (
	<Text
		style={{
			fontWeight: 'bold',
			fontSize: 29,
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.title}
	</Text>
);

const RestaurantDescription = (props) => (
	<Text
		style={{
			fontWeight: '400',
			fontSize: 15,
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.description}
	</Text>
);
