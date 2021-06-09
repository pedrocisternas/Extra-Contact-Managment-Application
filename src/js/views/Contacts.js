import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(GlobalState);
	const [state, setState] = useState({
		showModal: false,
		id: "0"
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts
							? store.contacts.map((elem, i) => (
									<ContactCard
										key={i}
										name={elem.full_name}
										email={elem.email}
										phone={elem.phone}
										address={elem.address}
										id={elem.id}
										onDelete={() => setState({ showModal: true, id: elem.id })}
									/>
							  ))
							: "Loading..."}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
