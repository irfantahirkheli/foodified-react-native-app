import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTabs from '../components/Home/HeaderTabs';
import RestaurantItems, {
	localRestaurants,
} from '../components/Home/RestaurantItems';
import SearchBar from '../components/Home/SearchBar';

const YELP_API_KEY =
	'mI1m2qmlJjSwjaX9DS4nnrejtV6-cnLvuxY0SSLcsxz_ZsKOXyxYTJYNX3A76ZwrR0qGhH_z8BrgiHjCMn-40lZVhvom4uWjZnzGavxyvjIMO1UyV3TgUdXKMjQ9W3Yx';

export default function Home({ navigation }) {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);

	const [city, setCity] = useState('SanDiego');

	const [activeTab, setActiveTab] = useState('Delivery');

	const yelp_url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

	const api_options = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${YELP_API_KEY}`,
		},
	};

	const getYelpData = () => {
		return fetch(yelp_url, api_options)
			.then((res) => res.json())
			.then((data) => {
				data.businesses.map((i, ind) => {
					
					console.log(i.transactions.length);

				});
				var restaurants = data.businesses.filter((d) =>
					d.transactions.includes(activeTab.toLowerCase())
				);
				console.log(restaurants.length);
				setRestaurantData(restaurants);
			})
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		console.log(city);
		getYelpData();
	}, [city]);
	return (
		<SafeAreaView
			style={{
				backgroundColor: '#eee',
				flex: 1,
			}}
		>
			<View
				style={{
					backgroundColor: 'white',
					padding: 15,
				}}
			>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity}></SearchBar>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems
					restaurants={restaurantData}
					navigation={navigation}
				></RestaurantItems>
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
}
