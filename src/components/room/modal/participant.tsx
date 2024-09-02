import { RoomUser } from "@/models/room/user";
import Image from "next/image";

export const Participant = ({ user }: { user: RoomUser }) => (
	<div className=" w-fit h-fit border p-4">
		<div className=" flex flex-row items-center gap-2">
			<Image src={user.avatar} alt={user.name} width={40} height={50} />
			<div className=" flex flex-col">
				<p className=" text-base">{user.name}</p>
				<p className=" text-base">{user.email}</p>
			</div>
		</div>
	</div>
);
