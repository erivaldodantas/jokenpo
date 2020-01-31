import { OPTIONS_GAME } from "../statics/options";

export const runWinner = (player, robot) => {

	if (player === robot) {
		return 'Jogo Empatado';
	}

	switch (player) {
		case OPTIONS_GAME.PEDRA:
			if (robot === OPTIONS_GAME.PAPEL) {
				return 'Que pena, o Robotnic venceu!';
			}
			if (robot === OPTIONS_GAME.TESOURA) {
				return 'Parabéns, Você venceu!';
			}
		case OPTIONS_GAME.PAPEL:
			if (robot === OPTIONS_GAME.PEDRA) {
				return 'Parabéns, Você venceu!';
			}
			if (robot === OPTIONS_GAME.TESOURA) {
				return 'Que pena, o Robotnic venceu!';
			}
		case OPTIONS_GAME.TESOURA:
			if (robot === OPTIONS_GAME.PEDRA) {
				return 'Que pena, o Robotnic venceu!';
			}
			if (robot === OPTIONS_GAME.PAPEL) {
				return 'Parabéns, Você venceu!';
			}
	}
};	