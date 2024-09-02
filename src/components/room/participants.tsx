"use client";

import { useState } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RoomModel } from "@/models/room";
import { ParticipantsModal } from "./modal";

export const ParticipantsButton = ({ room }: { room: RoomModel }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="w-fit h-full flex items-center justify-center">
			{modalOpen && (
				<ParticipantsModal room={room} setModalOpen={setModalOpen} />
			)}
			<button onClick={() => setModalOpen(true)}>
				<MdOutlinePeopleAlt className="text-2xl" />
			</button>
		</div>
	);
};
