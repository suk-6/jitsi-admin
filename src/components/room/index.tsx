import Image from "next/image";
import { RoomModel } from "@/models/room";
import { DownloadButton } from "./download";
import { RoomStatus } from "@/models/room/status";
import { ParticipantsButton } from "./participants";

export const Room = ({ room }: { room: RoomModel }) => {
	return (
		<div className=" w-full h-fit px-10 py-8 border flex justify-between items-center">
			<div className=" flex flex-col gap-3">
				<div>
					<div className="flex flex-row gap-2 text-lg">
						<h1>{room.name}</h1>
						<div
							className={`rounded-lg px-[0.4rem] my-[0.2rem] flex justify-center items-center text-white text-xs
											${room.status === RoomStatus.ACTIVE ? "bg-green-600" : "bg-red-600"}`}
						>
							{room.status === RoomStatus.ACTIVE ? (
								<h1>회의 중</h1>
							) : (
								<h1>종료</h1>
							)}
						</div>
					</div>
					<h2 className="text-sm font-light">{room.id}</h2>
				</div>
				<div className=" flex flex-row items-center gap-1">
					<Image
						src={room.owner.avatar}
						alt={room.owner.name}
						width={22}
						height={22}
					/>
					<h3 className="text-sm">{room.owner.name}</h3>
				</div>
			</div>
			<div className="flex justify-end items-end gap-2 w-16 h-10">
				{room.status === RoomStatus.TERMINATED && (
					<DownloadButton roomId={room.id} />
				)}
				<ParticipantsButton room={room} />
			</div>
		</div>
	);
};
