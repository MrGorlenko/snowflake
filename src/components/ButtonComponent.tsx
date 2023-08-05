import React, { FunctionComponent } from "react";

interface buttonComponent {
	children: JSX.Element | string;
	variant: "primary" | "outlined";
	onClick(): void;
}

export const ButtonComponent: FunctionComponent<buttonComponent> = ({
	children,
	variant,
	onClick,
}) => {
	const setButtonClassName = (variant: "primary" | "outlined") => {
		if (variant === "primary")
			return `bg-brown-400 text-white
							active:bg-brown-700 
							lg:hover:bg-brown-500`;
		if (variant === "outlined")
			return `bg-transparent text-black border-brown-400 border-2
			lg:active:bg-brown-300 active:opacity-70
			lg:hover:bg-brown-400`;
	};

	const onClickHandler = () => {
		onClick();
	};

	const computedClassName = setButtonClassName(variant);

	return (
		<button
			className={`w-full h-full text-futura-regular rounded-lg
			transition  lg:hover:scale-105 duration-300
			${computedClassName}`}
			onClick={() => onClickHandler()}
		>
			{children}
		</button>
	);
};
