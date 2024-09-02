import { RoomStatus } from "./status";
import { RoomUser } from "./user";

export type RoomModel = {
	id: string;
	name: string;
	owner: RoomUser;
	participants: RoomUser[];
	status: RoomStatus;
};
