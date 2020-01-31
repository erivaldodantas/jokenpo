import { OPTIONS_GAME } from "../statics/options";

const randon = (a, b) => a + (b - a + 1) * crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 | 0

export const robotSelectHand = () => {
	const handNumber = randon(0, 2);

	return (
		{
			handNumber,
			handLabel: Object.keys(OPTIONS_GAME)[handNumber]
		}
	);
};