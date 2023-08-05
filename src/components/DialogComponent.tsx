import Dialog from "@mui/material/Dialog";
import React, { FunctionComponent } from "react";

interface dialogComponent {
	open: boolean;
	children: JSX.Element;
	setOpen(open: boolean): void;
}

export const DialogComponent: FunctionComponent<dialogComponent> = ({
	open,
	children,
	setOpen,
}) => {
	return (
		<Dialog fullScreen open={open} onClose={() => setOpen(false)}>
			<div className='bg-beige w-full h-full overflow-hidden relative'>
				{children}
			</div>
		</Dialog>
	);
};
