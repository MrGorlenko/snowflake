import { DialogComponent } from "@/components/DialogComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Box } from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAgeAgreed } from "@/reducers/ageAgreed";

export const WelcomeDialog: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(true);

	const ageAgreed = useSelector((state: any) => state.ageAgreed.over18);
	const [isUnder18, setIsUnder18] = useState(false);

	useEffect(() => {
		if (ageAgreed) return setOpen(false);
	}, [ageAgreed]);

	const setOver18Handler = () => {
		dispatch(setAgeAgreed(true));
		setOpen(false);
	};

	return (
		<DialogComponent open={open} setOpen={setOpen}>
			<>
				<div className='h-screen flex flex-col items-center justify-center'>
					<div style={{ width: 151 }}>
						<Image
							src={"/welcome.png"}
							width={151}
							height={170}
							alt={"Welcome"}
						></Image>
					</div>
					<Box mt={3}></Box>
					<h2 className='font-recoleta-bold text-6xl lg:text-7xl text-black text-center'>
						Welcome
					</h2>
					<Box mt={3}></Box>
					<p className='font-futura-regular text-2xl text-center text-black'>
						You must be 18 years old to view <br></br> and use thi website
					</p>
					<Box mt={3}></Box>

					{!isUnder18 ? (
						<>
							<ComponentWrapper
								sx={{ width: { lg: 443, xs: 301 }, height: { lg: 77, xs: 53 } }}
							>
								<ButtonComponent
									variant='outlined'
									onClick={() => setIsUnder18(true)}
								>
									I am under 18
								</ButtonComponent>
							</ComponentWrapper>
							<Box mt={3}></Box>
							<ComponentWrapper
								sx={{ width: { lg: 443, xs: 301 }, height: { lg: 77, xs: 53 } }}
							>
								<ButtonComponent variant='primary' onClick={setOver18Handler}>
									I am over 18
								</ButtonComponent>
							</ComponentWrapper>
						</>
					) : (
						<>
							<p className='font-futura-regular text-2xl text-center text-black'>
								We are sorry. We cannot let you visit the website :(
							</p>
						</>
					)}
				</div>
			</>
		</DialogComponent>
	);
};
