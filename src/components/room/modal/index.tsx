import { RoomModel } from "@/models/room";
import { RoomStatus } from "@/models/room/status";
import { IoCloseOutline } from "react-icons/io5";
import { DownloadButton } from "../download";
import { Participant } from "./participant";
import { useEffect } from "react";

export const ParticipantsModal = ({
	room,
	setModalOpen,
}: {
	room: RoomModel;
	setModalOpen: (open: boolean) => void;
}) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div className=" fixed w-screen h-screen top-0 left-0 bg-gray-300 bg-opacity-60 flex items-center justify-center">
			<div className=" w-4/5 h-4/5 bg-white flex flex-col">
				<div className=" w-full h-fit py-4 flex justify-between items-center px-4">
					<button onClick={() => setModalOpen(false)}>
						<IoCloseOutline className="text-3xl" />
					</button>
				</div>
				<div className=" w-full flex flex-col px-10 overflow-hidden">
					<div className=" w-full h-fit pb-3 flex justify-between items-center">
						<div className=" flex flex-col gap-1">
							<div className="flex flex-row gap-2 text-xl">
								<h1>{room.name}</h1>
								<div
									className={`rounded-lg px-2 my-[0.1rem] flex justify-center items-center text-white text-sm
											${room.status === RoomStatus.ACTIVE ? "bg-green-600" : "bg-red-600"}`}
								>
									{room.status === RoomStatus.ACTIVE ? (
										<h1>회의 중</h1>
									) : (
										<h1>종료</h1>
									)}
								</div>
							</div>
							<h2 className="text-md font-light">{room.id}</h2>
						</div>
						<div className="flex justify-center items-center w-16 h-10">
							{room.status === RoomStatus.TERMINATED && (
								<DownloadButton roomId={room.id} />
							)}
						</div>
					</div>
					<div className=" w-full h-fit flex flex-row flex-wrap justify-self-start gap-6 overflow-y-scroll scrollbar-hide">
						{room.participants.map((participant, i) => (
							<Participant key={i} user={participant} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
