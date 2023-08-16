import { IconButton } from "@mui/material";
import React, { FunctionComponent } from "react";
import Image from "next/image";

interface counterComponent {
	value: number;
	setValue(value: number): void;
}

export const CounterComponent: FunctionComponent<counterComponent> = ({
	value,
	setValue,
}) => {
	const setValueHandler = (mode: "add" | "sub") => {
		if (mode === "add") setValue(value + 1);
		if (mode === "sub" && value > 0) setValue(value - 1);
	};

	return (
		<div className='w-full h-full border-brown-400 rounded-lg border-2 grid grid-cols-3 items-center justify-items-center'>
			<div className='cols-span-1 text-center'>
				<IconButton onClick={() => setValueHandler("sub")}>
					<Image
						src={"/minus-icon.svg"}
						width={10}
						height={2}
						alt={"minus"}
					></Image>
				</IconButton>
			</div>
			<div className='cols-span-1  text-center'>
				<p>{value}</p>
			</div>
			<div className='cols-span-1  text-center'>
				<IconButton onClick={() => setValueHandler("add")}>
					<Image
						src={"/plus-icon.svg"}
						width={10}
						height={10}
						alt={"plus"}
					></Image>
				</IconButton>
			</div>
		</div>
	);
};
