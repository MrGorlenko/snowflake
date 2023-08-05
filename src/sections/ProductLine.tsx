import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { ButtonComponent } from "../components/ButtonComponent";
import { SectionHeading } from "../components/SectionHeading";
import { ComponentWrapper } from "../components/ComponentWrapper";
import { DialogComponent } from "@/components/DialogComponent";
import { CounterComponent } from "@/components/CounterComponent";
import { DistanceComponent } from "@/components/DistanceComponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ArrowDownIcon } from "@/components/ArrowDownIcon";
import { DialogCloseIcon } from "@/components/DialogCloseIcon";
import { receipts, product } from "@/utils";

const BottomButtonComponentWrapper = ({
	children,
}: {
	children: JSX.Element;
}) => {
	return (
		<ComponentWrapper
			sx={{
				width: { xs: "100%", md: 100, xl: 120 },
				height: { xs: 31, md: 41, xl: 68 },
			}}
		>
			{children}
		</ComponentWrapper>
	);
};

const NextPrevButtons = ({
	setCurrentReceiptToShowHandler,
}: {
	setCurrentReceiptToShowHandler(dir: "next" | "prev"): void;
}) => {
	return (
		<Box
			className='md:m-auto grid grid-cols-2 items-center md:justify-items-center gap-3'
			sx={{ width: { xs: "135px", md: "300px" } }}
		>
			<div>
				<p className='md:hidden text-black opacity-70 font-futura-regular text-center text-xs'>
					Previous
				</p>
				<BottomButtonComponentWrapper>
					<ButtonComponent
						variant='outlined'
						onClick={() => setCurrentReceiptToShowHandler("prev")}
					>
						<Box>
							<Box sx={{ display: { md: "block", xs: "none" } }}>
								<Image
									width={53}
									height={12}
									style={{ margin: "auto", transform: "rotate(180deg)" }}
									src={"/arrow-icon.svg"}
									alt={"prev"}
								></Image>
							</Box>
							<Box sx={{ display: { md: "none", xs: "block" } }}>
								<Image
									width={23}
									height={5}
									style={{ margin: "auto", transform: "rotate(180deg)" }}
									src={"/arrow-icon.svg"}
									alt={"prev"}
								></Image>
							</Box>
						</Box>
					</ButtonComponent>
				</BottomButtonComponentWrapper>
				<p className='hidden md:block text-black opacity-70 font-futura-regular text-center text-lg'>
					Previous product
				</p>
			</div>

			<div>
				<p className='md:hidden text-black opacity-70 font-futura-regular text-center text-xs'>
					Next
				</p>
				<BottomButtonComponentWrapper>
					<ButtonComponent
						variant='outlined'
						onClick={() => setCurrentReceiptToShowHandler("next")}
					>
						<Box>
							<Box sx={{ display: { md: "block", xs: "none" } }}>
								<Image
									width={53}
									height={12}
									style={{ margin: "auto" }}
									src={"/arrow-icon.svg"}
									alt={"next"}
								></Image>
							</Box>
							<Box sx={{ display: { md: "none", xs: "block" } }}>
								<Image
									width={23}
									height={5}
									style={{ margin: "auto" }}
									src={"/arrow-icon.svg"}
									alt={"prev"}
								></Image>
							</Box>
						</Box>
					</ButtonComponent>
				</BottomButtonComponentWrapper>
				<p className='hidden md:block text-black opacity-70 font-futura-regular text-center text-lg'>
					Next product
				</p>
			</div>
		</Box>
	);
};

const CharacteristicCell = ({
	top,
	bottom,
}: {
	top: string;
	bottom: string;
}) => {
	return (
		<div className='col-span-1 text-center'>
			<p className='font-futura-regular text-md '>{top}</p>
			<p className='font-recoleta-bold text-lg'>{bottom}</p>
		</div>
	);
};

export const ProductLine: FunctionComponent = () => {
	const [showDetails, setShowDetails] = useState(false);
	const [receiptToShow, setReceiptToShow] = useState<product | null>(null);
	const [fadeIn, setFadeIn] = useState(false);

	const getReceiptToShowById = (receiptId: number, receipts: product[]) => {
		const newReceiptToShow =
			receipts.find((receipt) => receipt.id === receiptId) || false;
		if (!newReceiptToShow) throw new Error("no such product");

		return newReceiptToShow;
	};

	const selectBooksSpineHandler = (receiptId: number) => {
		const newReceiptToShow = getReceiptToShowById(receiptId, receipts);
		setReceiptToShow(newReceiptToShow);
		setShowDetails(true);
	};

	const setFadeInHandler = () => {
		setFadeIn(true);
		setTimeout(() => {
			setFadeIn(false);
		}, 450);
	};

	const setCurrentReceiptToShowHandler = (direction: "next" | "prev") => {
		if (!receiptToShow) return;
		let newReceiptToShow: product | null = null;
		setFadeInHandler();
		if (direction === "next") {
			const newId =
				receiptToShow.id === receipts.length ? 1 : receiptToShow.id + 1;
			newReceiptToShow = getReceiptToShowById(newId, receipts);
		}
		if (direction === "prev") {
			const newId =
				receiptToShow.id === 1 ? receipts.length : receiptToShow.id - 1;
			newReceiptToShow = getReceiptToShowById(newId, receipts);
		}
		if (!newReceiptToShow) return;
		setReceiptToShow(newReceiptToShow);
	};

	return (
		<section id={"product-line"} className='bg-beige w-100'>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title={"Product Line"}
					subtitle='Click on the books to learn more '
				></SectionHeading>
				<DistanceComponent></DistanceComponent>
				<div className='relative'>
					<div className='container m-auto ps-5 pe-5'>
						<div className='grid grid-cols-7 justify-items-center'>
							{receipts.map((receipt) => (
								<div
									key={receipt.id}
									className='col-span-1 cursor-pointer transition duration-300 hover:scale-105'
									onClick={() => selectBooksSpineHandler(receipt.id)}
								>
									<Image
										src={receipt.spine}
										width={113}
										height={775}
										alt={receipt.id.toString()}
									></Image>
								</div>
							))}
						</div>
					</div>
					<div
						className='w-full bg-cover '
						style={{
							backgroundImage: `url("/table.png")`,
							height: 257,
							marginTop: -50,
						}}
					></div>
				</div>

				<Box pt={10}></Box>
			</>

			<DialogComponent
				open={showDetails}
				setOpen={(open) => setShowDetails(open)}
			>
				<>
					<div className='hidden md:block container m-auto h-full overflow-y-auto'>
						<DialogCloseIcon
							onClick={() => setShowDetails(false)}
						></DialogCloseIcon>
						<Box mt={2}></Box>
						<Box
							className={`m-auto bg-contain bg-transparent bg-no-repeat bg-center relative
              ${fadeIn ? "animate-fade-in" : ""} `}
							style={{
								backgroundImage: `url(${receiptToShow?.book})`,
							}}
							sx={{
								width: { xl: 1160, lg: 910, md: 800 },
								height: { xl: 770, lg: 650, md: 610 },
							}}
						>
							<Box
								className='absolute font-futura-regular'
								style={{ bottom: 80, right: 150 }}
								sx={{
									width: { xl: 370, lg: 259, md: 210 },
									height: { xl: 125, lg: 100, md: 90 },
								}}
							>
								<p>Price: {receiptToShow?.priceLabel}€</p>
								<div className='pt-5'></div>
								<div className='flex'>
									<BottomButtonComponentWrapper>
										<CounterComponent></CounterComponent>
									</BottomButtonComponentWrapper>
									<div className='pr-5'></div>
									<BottomButtonComponentWrapper>
										<ButtonComponent variant='primary' onClick={() => {}}>
											Add to cart
										</ButtonComponent>
									</BottomButtonComponentWrapper>
								</div>
							</Box>
						</Box>
						<DistanceComponent></DistanceComponent>

						<NextPrevButtons
							setCurrentReceiptToShowHandler={setCurrentReceiptToShowHandler}
						></NextPrevButtons>
					</div>

					<div className='md:hidden container m-auto h-full overflow-y-auto'>
						<DialogCloseIcon
							onClick={() => setShowDetails(false)}
						></DialogCloseIcon>
						<div className='grid grid-cols-2 items-end relative'>
							<div
								className='absolute'
								style={{
									width: "160px",
									height: "320px",
									right: 0,
									top: -50,
									backgroundImage: `url(${receiptToShow?.brunch})`,
									backgroundSize: "cover",
								}}
							></div>
							<div
								className='col-span-1 justify-self-center'
								style={{ height: 410 }}
							>
								<div
									className='h-full'
									style={{
										width: "138px",
										backgroundImage: `url(${receiptToShow?.bottle})`,
										backgroundSize: "cover",
									}}
								></div>
							</div>
							<div className='col-span-1 justify-self-center pb-3'>
								<h3 className='text-2xl font-recoleta-bold'>
									{receiptToShow?.name.split(" ")[0]} <br></br>
									{receiptToShow?.name.split(" ")[1]}
								</h3>
								<NextPrevButtons
									setCurrentReceiptToShowHandler={
										setCurrentReceiptToShowHandler
									}
								></NextPrevButtons>
							</div>
						</div>

						{receiptToShow ? (
							<div className='grid grid-cols-3 justify-items-center gap-2'>
								<CharacteristicCell
									top={"Country"}
									bottom={receiptToShow.country}
								></CharacteristicCell>

								<CharacteristicCell
									top={"Category"}
									bottom={receiptToShow.category}
								></CharacteristicCell>

								<CharacteristicCell
									top={"Volume"}
									bottom={receiptToShow.volume}
								></CharacteristicCell>

								<CharacteristicCell
									top={"Alcohol level"}
									bottom={receiptToShow.alcoholLevel}
								></CharacteristicCell>

								<CharacteristicCell
									top={"Flavor"}
									bottom={receiptToShow.flavor}
								></CharacteristicCell>

								<CharacteristicCell
									top={"Price"}
									bottom={receiptToShow.priceLabel}
								></CharacteristicCell>
							</div>
						) : (
							<></>
						)}

						<Box mt={2}></Box>

						<div className='w-11/12 m-auto grid grid-cols-2 gap-3'>
							<Box sx={{ height: 45 }}>
								<CounterComponent></CounterComponent>
							</Box>
							<Box sx={{ height: 45 }}>
								<ButtonComponent variant='primary' onClick={() => {}}>
									Add to cart
								</ButtonComponent>
							</Box>
							<Box className='col-span-2'>
								<Accordion
									sx={{ boxShadow: "none", backgroundColor: "#F0EADC" }}
								>
									<AccordionSummary
										aria-controls='panel1a-content'
										id='panel1a-header'
										expandIcon={
											<ArrowDownIcon
												color={"black"}
												size={{ width: 13, height: 6 }}
											></ArrowDownIcon>
										}
										style={{
											minHeight: "45px",
											maxHeight: "45px",
											height: "45px",
										}}
										sx={{ border: "2px solid #B17F4A", borderRadius: "0.5rem" }}
									>
										<Typography>Description</Typography>
									</AccordionSummary>
									<AccordionDetails className='border-0'>
										<Typography>{receiptToShow?.description}</Typography>
									</AccordionDetails>
								</Accordion>
							</Box>
						</div>

						<DistanceComponent></DistanceComponent>

						<Box className={"w-11/12 m-auto"}>
							<Box className={"overflow-x-scroll flex pb-8 custom-scrollbar"}>
								{receipts
									.filter((receipt) => receipt.id !== receiptToShow?.id)
									.map((item) => (
										<Box
											key={item.id}
											className={
												"border-brown-400 border-2 rounded-xl flex items-center flex-col cursor-pointer"
											}
											sx={{
												minWidth: "48%",
												mr: "4%",
												padding: "9px",
											}}
											onClick={() => setReceiptToShow(item)}
										>
											<Box
												width={57}
												height={160}
												sx={{
													backgroundImage: `url(${item.bottle})`,
													backgroundSize: "cover",
												}}
											></Box>

											<p className='font-futura-bold text-black text-md text-center w-full'>
												{item.name}
											</p>
											<p className='font-futura-regular text-black text-md text-end w-full'>
												{item.priceLabel}
											</p>
										</Box>
									))}
							</Box>
						</Box>
						<DistanceComponent></DistanceComponent>
					</div>
				</>
			</DialogComponent>
		</section>
	);
};
