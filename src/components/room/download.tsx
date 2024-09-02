"use client";

import { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { TailSpin } from "react-loader-spinner";

export const DownloadButton = ({ roomId }: { roomId: string }) => {
	const [loading, setLoading] = useState(false);

	return (
		<button
			className="w-fit h-full flex justify-center items-center"
			onClick={() => {
				setLoading(true);
				fetch(`/api/download?id=${roomId}`)
					.then((res) => {
						if (!res.ok) throw new Error();
						res
							.blob()
							.then((blob) => {
								const url = window.URL.createObjectURL(blob);
								const a = document.createElement("a");
								a.href = url;
								a.download = `${roomId}.mp4`;
								a.click();
							})
							.then(() => setLoading(false));
					})
					.catch(() => {
						alert(
							"파일이 아직 준비되지 않았거나, 내부적인 오류가 발생했습니다."
						);
						setLoading(false);
					});
			}}
		>
			{loading ? (
				<div>
					<TailSpin wrapperClass=" relative" width={24} color="#696969" />
				</div>
			) : (
				<BiDownload className="text-2xl" />
			)}
		</button>
	);
};
