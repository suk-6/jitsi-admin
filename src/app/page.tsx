import { Header } from "@/components/header";
import { Room } from "@/components/room";
import { RoomModel } from "@/models/room";
import { RoomStatus } from "@/models/room/status";
import { RoomUser } from "@/models/room/user";

export default function Home() {
	const room: RoomModel = {
		id: "439ab08b-0b28-4d97-8a02-4373e1e3982a",
		name: "DMAKRCCT",
		owner: {
			name: "Test User",
			email: "test@suk.kr",
			avatar: "https://file.suk.kr/avatar.png",
		},
		participants: Array.from<RoomUser>({ length: 15 })
			.map((_, i) => ({
				name: `Test User${i}`,
				email: `${"a".repeat(i + 1)}@suk.kr`,
				avatar: "https://file.suk.kr/avatar.png",
			}))
			.sort((a, b) => a.name.localeCompare(b.name)),
		status: RoomStatus.ACTIVE,
	};

	const room2: RoomModel = {
		id: "439ab08b-0b28-4d97-8a02-4373e1e3982a",
		name: "DMAKRCCT",
		owner: {
			name: "Test User",
			email: "test@suk.kr",
			avatar: "https://file.suk.kr/avatar.png",
		},
		participants: [
			{
				name: "Test User",
				email: "test@suk.kr",
				avatar: "https://file.suk.kr/avatar.png",
			},
		],
		status: RoomStatus.TERMINATED,
	};

	return (
		<main className="flex flex-col w-full min-h-screen">
			<Header />
			<div className=" w-full h-full">
				<Room room={room} />
				<Room room={room2} />
				<Room room={room} />
				<Room room={room} />
				<Room room={room} />
			</div>
		</main>
	);
}
