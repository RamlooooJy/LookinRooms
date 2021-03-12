//
class API {
	constructor() {
		console.log('created api');
	}

	async mount() {
		const ok = await new Promise((resolve, reject) => {
			setTimeout(()=>{ resolve(true) }, 1500);
		});
		return ok
	}
}

export const api = new API();

