import unfetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import { apiGetLatestTelemetryRequest, apiGetLatestTelemetryResponse } from "./api/apiGetLatestTelemetry";

export default function LiveStream() {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const requestBody: apiGetLatestTelemetryRequest = {

			}

			const serverResponse = await unfetch("/api/apiGetLatestTelemetry", {
				method: "POST",
				body: JSON.stringify(requestBody),
			});

			const response: apiGetLatestTelemetryResponse = await serverResponse.json();

			setImageUrl(response.imageUrl);
		}

		const timer = setInterval(() => {
			fetchData();
			console.log("refreshed");
		}, 1000 / 12);

		return () => {
			clearInterval(timer);
		}
	}, []);

	return (
		<>
			<img src={imageUrl}/>
		</>
	);
}