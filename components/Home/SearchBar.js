import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GOOGLE_PLACES_API_KEY } from '@env';
export default function SearchBar(props) {
	return (
		<View
			style={{
				marginTop: 10,
				flexDirection: 'row',
			}}
		>
			<GooglePlacesAutocomplete
				placeholder="Search"
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					//console.log(data, details);
					props.cityHandler(data.description.split(',')[0]);
				}}
				query={{
					key: GOOGLE_PLACES_API_KEY,
					language: 'en',
				}}
				onFail={(error) => console.error(error)}
				styles={{
					textInput: {
						backgroundColor: '#eee',
						borderRadius: 20,
						fontWeight: '600',
						marginTop: 7,
					},
					textInputContainer: {
						flexDirection: 'row',
						backgroundColor: '#eee',
						borderRadius: 50,
						alignItems: 'center',
					},
				}}
				renderLeftButton={() => {
					return (
						<View style={{ marginLeft: 10 }}>
							<Ionicons name="location-sharp" size={24}></Ionicons>
						</View>
					);
				}}
				renderRightButton={() => (
					<View
						style={{
							backgroundColor: 'white',
							padding: 10,
							flexDirection: 'row',
							marginRight: 8,
							borderRadius: 30,
							alignItems: 'center',
						}}
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}
