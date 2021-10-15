import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function Categories() {
	const items = [
		{
			img: require('../../assets/images/shopping_bag.png'),
			text: 'Pickup',
		},
		{
			img: require('../../assets/images/soft_drinks.png'),
			text: 'Soft Drinks',
		},
		{
			img: require('../../assets/images/bakery_items.png'),
			text: 'Bakery Items',
		},
		{
			img: require('../../assets/images/fast_food_icon.png'),
			text: 'Fast Food',
		},
	];

  return (
    <View style={{ marginTop:5,
      paddingVertical: 10,
    paddingLeft:5,backgroundColor:"#fff"}}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item, index) => (
					<View style={{ alignItems: 'center' }} key={index}>
						<Image
							source={item.img}
							style={{
								width: 100,
								height: 50,
								resizeMode: 'contain',
							}}
						/>
						<Text style={{fontSize:12,fontWeight:"bold"}}>{item.text}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
