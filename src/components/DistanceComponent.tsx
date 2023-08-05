import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

type headingType = "heading" | "bottom" | "top";

interface distanceComponent {
	type?: headingType;
}

export const DistanceComponent: FunctionComponent<distanceComponent> = ({
	type = "heading",
}) => {
	const setDistanceStyle = (type: headingType) => {
		if (type === "top") return { pt: 3 };
		if (type === "heading") return { mt: 5 };
		if (type === "bottom") return { mt: 10 };
	};

	const sx = setDistanceStyle(type);

	return <Box sx={sx}></Box>;
};
