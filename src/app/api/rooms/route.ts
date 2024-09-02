import { RoomModel } from "@/models/room";

export const GET = async () => {
	const roomData = await fetch(`${process.env.API_URL}/admin/rooms`).then(
		(res) => res.json().then((data: RoomModel[]) => data)
	);

	return Response.json(roomData);
};
