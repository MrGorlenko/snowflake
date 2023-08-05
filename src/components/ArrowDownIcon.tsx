import React, { FunctionComponent } from "react";
import Image from "next/image";

interface arrowDownIcon {
	color?: "white" | "black";
	size?: { width: number; height: number };
}

export const ArrowDownIcon: FunctionComponent<arrowDownIcon> = ({
	color = "white",
	size = { width: 30, height: 11 },
}) => {
	const setPath = (color: "white" | "black") => {
		if (color === "white") return "/arrow-down.svg";
		if (color === "black") return "/arrow-down-black.svg";
		return "";
	};

	const path = setPath(color);
	return (
		<Image
			width={size.width}
			height={size.height}
			alt={"arrow-down"}
			src={path}
		></Image>
	);
};
