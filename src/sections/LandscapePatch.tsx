import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";

interface landscapePatch {
	direction: "top" | "bottom";
}

export const LandscapePatch: FunctionComponent<landscapePatch> = ({
	direction,
}) => {
	const setPath = (direction: "top" | "bottom") => {
		if (direction === "top") return "/landscape-patch.png";
		if (direction === "bottom") return "/landscape-bottom-patch.png";
		return "";
	};

	const setMarginStyle = (direction: "top" | "bottom") => {
		if (direction === "top")
			return { marginTop: { xs: "-65px", lg: "-130px" } };
		if (direction === "bottom") return {};
		return "";
	};

	const path = setPath(direction);

	const marginStyle = setMarginStyle(direction);

	return (
		<Box
			className='w-full bg-cover relative'
			sx={{
				backgroundColor: "transparent",
				height: {
					xs: "85px",
					lg: "245px",
				},
				zIndex: 2,
				...marginStyle,
			}}
			style={{ backgroundImage: `url("${path}")` }}
		></Box>
	);
};
