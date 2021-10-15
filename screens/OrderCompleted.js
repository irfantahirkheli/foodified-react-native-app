import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/Restaurant/MenuItems';
import firebase from '../firebase';

export default function OrderCompleted() {
	const [lastOrder, setLastOrder] = useState({
		items: [],
	});

	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItem
	);
	const total = items
		.map((item) => Number(item.price?.replace('$', '')))
		.reduce((prev, next) => prev + next, 0);

	const totalCurrency = total.toLocaleString('en', {
		style: 'currency',
		currency: 'USD',
	});

	useEffect(() => {
		var db = firebase.firestore();

		var unsub = db
			.collection('orders')
			.orderBy('createdAt', 'desc')
			.limit(1)
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doc) => {
					console.log(doc);
					setLastOrder(doc.data());
				});
			});

		// console.log(lastOrder);

		return () => unsub();
	}, []);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			<View style={{
				padding: 20,
				alignItems: 'center',
				height: '100%'
			}}>
				<LottieView
					style={{
						height: 100,
						alignSelf: 'center',
						marginBottom: 30,
					}}
					source={require('../assets/animations/check-mark.json')}
					autoPlay={true}
					speed={0.5}
					loop={false}
				/>
				<Text>
					Your order at {restaurantName} has been place for {totalCurrency}
				</Text>
				<MenuItems hideCheckbox={true} foods={lastOrder.items} />
				<LottieView
					style={{
						height: 200,
						alignSelf: 'center',
						marginBottom: 30,
						alignSelf: 'baseline',
					}}
					source={require('../assets/animations/cooking.json')}
					autoPlay={true}
					speed={0.5}
				/>
			</View>
		</SafeAreaView>
	);
}
