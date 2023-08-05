import React, { FunctionComponent } from "react";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

interface componentWrapper {
	children: JSX.Element | string;
	sx?: SxProps<Theme>;
}

export const ComponentWrapper: FunctionComponent<componentWrapper> = ({
	children,
	sx = {
		width: { xs: "121px", lg: "260px" },
		height: { xs: "35px", lg: "75px" },
	},
}) => {
	return <Box sx={{ ...sx }}>{children}</Box>;
};
