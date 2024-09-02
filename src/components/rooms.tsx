"use client";

import { RoomModel } from "@/models/room";
import { useEffect, useState } from "react";
import { Room } from "./room";

export const Rooms = () => {
	const [rooms, setRooms] = useState<RoomModel[]>([]);

	useEffect(() => {
		fetch("/api/rooms").then((res) =>
			res.json().then((data) => {
				setRooms(data);
			})
		);
	}, []);

	return (
		<div className="w-full h-full">
			{rooms.map((room, i) => (
				<Room room={room} key={i} />
			))}
		</div>
	);
};
