import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
	const [activeTab, setActiveTab] = useState('Delivery');
	return (
		<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
			<HeaderButton
				text="Delivery"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			></HeaderButton>

			<HeaderButton
				text="Pickup"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			></HeaderButton>
		</View>
	);
}

const HeaderButton = (props) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: props.activeTab === props.text ? 'black' : 'white',
				borderRadius: 20,
				paddingVertical: 6,
				paddingHorizontal: 15 
			}}
			onPress={()=>props.setActiveTab(props.text)}
		>
			<Text
				style={{
					color: props.activeTab=== props.text? "white":"black",
					fontSize: 15,
					fontWeight: 'bold',
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};
