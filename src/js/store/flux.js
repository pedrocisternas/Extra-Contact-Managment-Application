const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getFetch: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/PedroCisternas")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log("There was the following error: \n", error));
			},
			postFetch: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						agenda_slug: "PedroCisternas",
						address: contact.address,
						phone: contact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						getActions().getFetch();
					})
					.catch(error => console.log("There was the following error: \n", error));
			},
			deleteFetch: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => getActions().getFetch())
					.catch(error => console.log("There was the following error: \n", error));
			},
			editFetch: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
					method: "PUT",
					body: JSON.stringify({
						full_name: contact.full_name,
						email: contact.email,
						agenda_slug: "PedroCisternas",
						address: contact.address,
						phone: contact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						getActions().getFetch();
					})
					.catch(error => console.log("There was the following error: \n", error));
			}
		}
	};
};

export default getState;
