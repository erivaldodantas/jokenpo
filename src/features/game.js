import React from 'react';

import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const Game = () => {

	return (
		<View>
			<Text>
				Jokenpô
			</Text>
			<View>
				<Text>
					Robotnic:
				</Text>
				<Text>
					{}
				</Text>
			</View>
			<View>
				<Text>
					Você:
				</Text>
				<Text>
					{}
				</Text>
			</View>
			<View>
				<Text>
					Vencedor:
				</Text>
				<Text>
					{}
				</Text>
			</View>
			<TouchableOpacity>
				{
					isLoading ?
						<ActivityIndicator size="small" />
					:
						<Text>
							Jogar
						</Text>
				}
			</TouchableOpacity>
		</View>
	);
};