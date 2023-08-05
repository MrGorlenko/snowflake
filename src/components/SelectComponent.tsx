import React, { FunctionComponent } from "react";
import { ArrowDownIcon } from "./ArrowDownIcon";

interface selectComponent {
	value: number | string | undefined;
	placeholder: string;
	options: { id: string | number; text: string }[];
	onChange(value: number | string): void;
}

export const SelectComponent: FunctionComponent<selectComponent> = ({
	value,
	placeholder,
	options,
	onChange,
}) => {
	const onSelectHandler = (event: any) => {
		onChange(event.target.value);
	};

	const setOptionColor = (value: number | string | undefined) => {
		if (!value) return "text-dark-gray";
		return "text-black";
	};

	const optionColor = setOptionColor(value);

	return (
		<div
			className={`w-full h-full bg-white border-brown-400 border-2 rounded relative ${optionColor}`}
		>
			<select
				value={value}
				defaultValue={"0"}
				className='bg-transparent custom-select py-2.5 px-3 w-full h-full'
				onChange={onSelectHandler}
			>
				<option value='0' disabled>
					{placeholder}
				</option>
				{options.map((option) => (
					<option key={option.id} value={option.id} className='bg-transparent'>
						{option.text}
					</option>
				))}
			</select>

			<div className='absolute top-5 right-3 lg:block hidden'>
				<ArrowDownIcon color={"black"}></ArrowDownIcon>
			</div>
		</div>
	);
};
