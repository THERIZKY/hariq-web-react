import axios from "axios";
import { useEffect, useState } from "react";

const CallApi = () => {
	useEffect(() => {
		axios({
			method: "get",
			url: "https://console.hariq.eu.org/api/client/servers/b3b2bc58/command",
			headers: {
				Accept: "application/json", // Mengatur header Accept
				// "Content-Type": "application/json",
				Authorization:
					"Bearer ptla_L0IqCZugqKPrQycIuRqm71dbTAO6ZSRp9cm8XShnzql", // Mengatur header Authorization
			},
			body: {
				command: "say hello",
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div>
				<div className="callApi">
					<h1>Call Api</h1>
				</div>
			</div>
		</>
	);
};

export default CallApi;
