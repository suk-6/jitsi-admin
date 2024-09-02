import { NextRequest, NextResponse } from "next/server";

export interface FileResponse {
	type: string;
	arrayBuffer: number[];
}

export const GET = async (req: NextRequest) => {
	const { searchParams } = req.nextUrl;

	const roomId = searchParams.get("id");

	const rawData = await fetch(
		`${process.env.API_URL}/admin/video?room_id=${roomId}`
	);

	if (!rawData.ok) {
		return new Response(null, {
			status: rawData.status,
		});
	}

	const blob = await rawData.blob();

	const arrayBuffer = await new Response(blob).arrayBuffer();

	return new Response(arrayBuffer, {
		headers: {
			"Content-Type": "video/mp4",
		},
	});
};
