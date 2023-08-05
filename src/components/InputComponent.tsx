import React, { FunctionComponent } from "react";

interface inputComponent {
	placeholder: string;
}

export const InputComponent: FunctionComponent<inputComponent> = ({
	placeholder,
}) => {
	return (
		<input
			className='w-full h-full bg-white border-brown-400 border-2 rounded
      text-black pl-5 placeholder:text-dark-gray'
			placeholder={placeholder}
		></input>
	);
};
