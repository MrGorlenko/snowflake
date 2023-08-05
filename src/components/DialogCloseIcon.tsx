import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

interface dialogCloseIcon {
	onClick(): void;
}

export const DialogCloseIcon: FunctionComponent<dialogCloseIcon> = ({
	onClick,
}) => {
	return (
		<Box
			sx={{
				position: "relative",
				top: { xs: "25px", lg: 55 },
				display: "flex",
				paddingLeft: { xs: 2, lg: 0 },
				justifyContent: { xs: "flex-start", lg: "flex-end" },
				zIndex: 2,
			}}
		>
			<IconButton onClick={() => onClick()}>
				<Box>
					<div className='hidden lg:block'>
						<Image
							src={"/close-icon.svg"}
							width={27}
							height={27}
							alt={"close"}
						></Image>
					</div>
					<div className='lg:hidden'>
						<Image
							src={"/close-icon.svg"}
							width={15}
							height={15}
							alt={"close"}
						></Image>
					</div>
				</Box>
			</IconButton>
		</Box>
	);
};
