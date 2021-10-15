import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useDispatch, useSelector } from 'react-redux';


const styles = StyleSheet.create({
	MenuItemStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20,
	},
	TitleStle: {
		fontSize: 20,
		fontWeight: '600',
	},
});

export default function MenuItems({
	restaurantName,
	hideCheckbox,
	foods,
	marginLeft,
}) {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: checkboxValue ? 'ADD_TO_CART' : 'REMOVE_FROM_CART',
			payload: { ...item, restaurantName, checkboxValue },
		});

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItem.items
	);

	const isSelected = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods &&
				foods.map((f, index) => (
					<View key={index}>
						<View style={styles.MenuItemStyle}>
							{hideCheckbox ? (
								<></>
							) : (
								<BouncyCheckbox
									fillColor="green"
									isChecked={isSelected(f, cartItems)}
									onPress={(checkboxValue) => selectItem(f, checkboxValue)}
								/>
							)}
							<FoodInfo food={f}></FoodInfo>
							<FoodImage image={f.image}></FoodImage>
						</View>
						<Divider
							width={0.5}
							orientation="vertical"
							style={{ marginHorizontal: 20 }}
						/>
					</View>
				))}
		</ScrollView>
	);
}

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.image }}
			style={{
				width: 80,
				height: 100,
				borderRadius: 10,
			}}
		/>
		<Text>{props.title}</Text>
	</View>
);

const FoodInfo = (props) => {
	return (
		<View style={{ width: 240, justifyContent: 'space-evenly' }}>
			<Text style={styles.TitleStle}>{props.food.title}</Text>
			<Text>{props.food.description}</Text>
			<Text>{props.food.price}</Text>
		</View>
	);
};
