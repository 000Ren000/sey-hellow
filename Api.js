class Api {
	constructor() {
		this.url = 'http://home.antonren.ru:3207/user'
	}

	 getUser = async () => {
		const users = await fetch(this.url)
		 return await users.json()
	}

}


module.exports = new Api()