import React, { FunctionComponent } from "react";

interface inputComponent {
	value: string;
	placeholder: string;
	setValue(value: string): void;
}

export const InputComponent: FunctionComponent<inputComponent> = ({
	value,
	placeholder,
	setValue,
}) => {
	const onChangeHandler = (event: any) => {
		setValue(event.target.value);
	};
	return (
		<input
			value={value}
			className='w-full h-full bg-white border-brown-400 border-2 rounded
      text-black pl-5 placeholder:text-dark-gray'
			placeholder={placeholder}
			onChange={onChangeHandler}
		></input>
	);
};
