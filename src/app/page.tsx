import { Header } from "@/components/header";
import { Rooms } from "@/components/rooms";

export default function Home() {
	return (
		<main className="flex flex-col w-full min-h-screen">
			<Header />
			<Rooms />
		</main>
	);
}
