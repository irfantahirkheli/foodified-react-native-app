import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
	return (
		<View
			style={{
				flexDirection: 'row',
				margin: 10,
				marginHorizontal: 30,
				justifyContent: 'space-between',
			}}
		>
			<IconBtn icon="home" text="Home" />
			<IconBtn icon="search" text="Browse" />
			<IconBtn icon="shopping-bag" text="Grocery" />
			<IconBtn icon="receipt" text="Orders" />
			<IconBtn icon="user" text="Account" />
		</View>
	);
}

const IconBtn = (props) => (
  <TouchableOpacity>
  <View>
  <FontAwesome5 name={props.icon}
      size={30} style={{ marginBottom: 3, alignSelf: 'center' }}>
    </FontAwesome5>
    <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>);
