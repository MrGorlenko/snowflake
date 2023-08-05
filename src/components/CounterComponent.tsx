import { IconButton } from "@mui/material";
import React, { FunctionComponent } from "react";
import Image from "next/image";

interface counterComponent {
	value: number;
	setValue(value: number): void;
}

export const CounterComponent: FunctionComponent = () => {
	return (
		<div className='w-full h-full border-brown-400 rounded-lg border-2 grid grid-cols-3 items-center justify-items-center'>
			<div className='cols-span-1 text-center'>
				<IconButton>
					<Image
						src={"/minus-icon.svg"}
						width={10}
						height={2}
						alt={"minus"}
					></Image>
				</IconButton>
			</div>
			<div className='cols-span-1  text-center'>
				<p>1</p>
			</div>
			<div className='cols-span-1  text-center'>
				<IconButton>
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
