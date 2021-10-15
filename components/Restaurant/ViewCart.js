import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';

export default function ViewCart({ navigation }) {
	const [modelVisible, setModelVisible] = useState(false);
	const [showLoading, setshowLoading] = useState(false);
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

	const addOrderToFirebase = () => {
		setshowLoading(true);
		const db = firebase.firestore();
		db.collection('orders').add({
			items: items,
			restaurantName: restaurantName,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setTimeout(() => {
			setshowLoading(false);
			navigation.navigate('OrderCompleted');
		}, 2500);
		setModelVisible(false);
	};

	const styles = StyleSheet.create({
		modelContainer: {
			flex: 1,
			justifyContent: 'flex-end',
			backgroundColor: 'rgba(0,0,0,0.7)',
		},
		modelCheckoutContainer: {
			backgroundColor: 'white',
			padding: 16,
			height: 500,
			borderWidth: 1,
		},
		restaurantName: {
			textAlign: 'center',
			fontWeight: '600',
			fontSize: 18,
			marginBottom: 10,
		},
		subTotalContainer: {
			flexDirection: 'row',
			marginTop: 15,
			justifyContent: 'space-between',
		},
		subTotalText: {
			fontWeight: '600',
			marginBottom: 10,
			fontSize: 15,
			textAlign: 'left',
		},
	});

	const modelContent = () => {
		return (
			<>
				<View style={styles.modelContainer}>
					<View style={styles.modelCheckoutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem item={item} key={index}></OrderItem>
						))}

						<View style={styles.subTotalContainer}>
							<Text style={styles.subTotalText}>Subtotal</Text>
							<Text>{totalCurrency}</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<TouchableOpacity
								style={{
									marginTop: 10,

									padding: 13,
									borderRadius: 30,
									backgroundColor: 'black',
									width: 300,
									position: 'relative',
									alignItems: 'center',
								}}
								onPress={() => {
									addOrderToFirebase();
								}}
							>
								<Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
								<Text
									style={{
										fontSize: 16,
										right: 20,
										top: 17,
										color: 'white',
										position: 'absolute',
									}}
								>
									{total ? totalCurrency : ''}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</>
		);
	};

	return (
		<>
			<Modal
				animationType="slide"
				visible={modelVisible}
				transparent={true}
				onRequestClose={() => setModelVisible(false)}
			>
				{modelContent()}
			</Modal>
			{total ? (
				<View
					style={{
						width: '100%',
						height: '100%',
						alignItems: 'center',
						flexDirection: 'row',
						position: 'absolute',
						zIndex: '999',
						bottom: 120,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: 'black',
								alignItems: 'center',
								padding: 13,
								width: 300,
								height: 50,
								borderRadius: 30,
								position: 'absolute',
								flexDirection: 'row',
								justifyContent: 'flex-end',
								padding: 15,
							}}
							onPress={() => setModelVisible(true)}
						>
							<Text style={{ fontSize: 20, color: 'white', marginRight: 30 }}>
								View Cart
							</Text>
							<Text style={{ color: 'white', fontSize: 20 }}>
								{totalCurrency}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
			{showLoading ? (
				<View
					style={{
						backgroundColor: 'black',
						opacity: 0.6,
						position: 'absolute',
						width: '100%',
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: 1000,
					}}
				>
					<LottieView
						style={{
							height: 200,
						}}
						source={require('../../assets/animations/scanner.json')}
						autoPlay={true}
						speed={3}
					/>
				</View>
			) : (
				<></>
			)}
		</>
	);
}
