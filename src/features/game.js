import React, { useState } from 'react';

import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { OPTIONS_GAME } from '../statics/options';
import { robotSelectHand } from '../lib/randon-hand-robot';
import { runWinner } from '../lib/engine';

const Game = () => {
	const [isLoading, setLoading] = useState(false);
	const [handRobot, setHandRobot] = useState('');
	const [handPlayer, setHandPlayer] = useState('');
	const [winner, setWinner] = useState('...');


	const onSelectHand = hand => {
		setLoading(true);

		setWinner('...');

		const robot = robotSelectHand();

		const winner = runWinner(hand, robot.handLabel);

		setHandPlayer(hand);

		setHandRobot(robot.handLabel);

		setTimeout(() => {
			setWinner(winner);

			setLoading(false);
		}, 1000);
	};

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Jokenpô</Text>
			</View>
			<View style={styles.player}>
				<Text style={styles.textPlayer}>Robotnic: {!isLoading && handRobot}</Text>
				{isLoading && <ActivityIndicator size="small" />}
			</View>
			<View style={styles.player}>
				<Text style={styles.textPlayer}>Você: {handPlayer}</Text>
			</View>
			<View style={styles.winner}>
				<Text>{winner}</Text>
			</View>
			<View>
				<TouchableOpacity
					disabled={isLoading}
					style={[styles.button, { backgroundColor: '#9999ff' }]}
					onPress={() => onSelectHand(OPTIONS_GAME.PEDRA)}
				>
					<Text
						style={styles.textButton}
					>
						{OPTIONS_GAME.PEDRA}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={isLoading}
					style={[styles.button, { backgroundColor: '#ff99ff' }]}
					onPress={() => onSelectHand(OPTIONS_GAME.PAPEL)}
				>
					<Text
						style={styles.textButton}
					>
						{OPTIONS_GAME.PAPEL}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={isLoading}
					style={[styles.button, { backgroundColor: '#ffff99' }]}
					onPress={() => onSelectHand(OPTIONS_GAME.TESOURA)}
				>
					<Text
						style={styles.textButton}
					>
						{OPTIONS_GAME.TESOURA}
					</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 80,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 10
	},
	titleHeader: {
		fontSize: 22,
		fontWeight: '800'
	},
	player: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		flexDirection: 'row'
	},
	textPlayer: {
		fontSize: 18,
		fontWeight: '600'
	},
	winner: {
		flex: 1,
		backgroundColor: '#66ff99',
		padding: 10,
		alignItems: 'center',
		marginVertical: 10
	},
	button: {
		flex: 1,
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 8,
		alignItems: 'center',
		borderRadius: 5
	},
	textButton: {
		fontWeight: '800'
	}
});

export default Game;