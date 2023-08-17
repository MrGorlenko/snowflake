import { ButtonComponent } from "@/components/ButtonComponent";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { product } from "@/interface";
import { DialogComponent } from "@/components/DialogComponent";
import { DialogCloseIcon } from "@/components/DialogCloseIcon";
import { ArrowDownIcon } from "@/components/ArrowDownIcon";
import { CounterComponent } from "@/components/CounterComponent";
import { DistanceComponent } from "@/components/DistanceComponent";
import { setPriceString } from "@/utils";

export const BottomButtonComponentWrapper = ({
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

export const NextPrevButtons = ({
	setCurrentProductToShowHandler,
}: {
	setCurrentProductToShowHandler(dir: "next" | "prev"): void;
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
						onClick={() => setCurrentProductToShowHandler("prev")}
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
						onClick={() => setCurrentProductToShowHandler("next")}
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

export const CharacteristicCell = ({
	top,
	bottom,
}: {
	top: string;
	bottom: string;
}) => {
	return (
		<div className='col-span-1 text-center'>
			<p className='font-futura-regular xs:text-md sm:text-sm xl:text-md'>
				{top}
			</p>
			<p className='font-recoleta-bold xs:text-lg sm:text-md xl:text-lg'>
				{bottom}
			</p>
		</div>
	);
};

export const CellsInfo = ({ receipt }: { receipt: product }): JSX.Element => (
	<div className='grid grid-cols-3 justify-items-center gap-2'>
		<CharacteristicCell
			top={"Country"}
			bottom={receipt.country}
		></CharacteristicCell>

		<CharacteristicCell
			top={"Category"}
			bottom={receipt.category}
		></CharacteristicCell>

		<CharacteristicCell
			top={"Volume"}
			bottom={receipt.volume}
		></CharacteristicCell>

		<CharacteristicCell
			top={"Alcohol level"}
			bottom={receipt.alcoholLevel}
		></CharacteristicCell>

		<CharacteristicCell
			top={"Flavor"}
			bottom={receipt.flavor}
		></CharacteristicCell>

		<CharacteristicCell
			top={"Price"}
			bottom={setPriceString(receipt.price)}
		></CharacteristicCell>
	</div>
);

export const DialogWithProduct = ({
	show,
	fadeIn,
	productToShow,
	products,
	amount,
	productInCart,
	setShow,
	setCurrentProductToShowHandler,
	setProductToShow,
	setAmount,
	addToCart,
}: {
	show: boolean;
	fadeIn: boolean;
	productToShow: product | null;
	products: product[];
	amount: number;
	productInCart: boolean;
	setShow(show: boolean): void;
	setCurrentProductToShowHandler(dir: "next" | "prev"): void;
	setProductToShow(product: product | null): void;
	setAmount(amount: number): void;
	addToCart(): void;
}) => {
	return (
		<DialogComponent open={show} setOpen={(open) => setShow(open)}>
			<>
				<div className='hidden md:block container m-auto h-full overflow-y-auto'>
					<DialogCloseIcon onClick={() => setShow(false)}></DialogCloseIcon>
					<Box mt={2}></Box>
					<Box
						className={`m-auto bg-contain bg-transparent bg-no-repeat bg-center relative
              ${fadeIn ? "animate-fade-in" : ""} `}
						style={{
							backgroundImage: `url(${productToShow?.book})`,
						}}
						sx={{
							width: { xl: 1160, lg: 910, md: 800 },
							height: { xl: 770, lg: 650, md: 610 },
						}}
					>
						<Box
							className='absolute'
							sx={{
								top: { md: 140, lg: 135, xl: 140 },
								right: { md: 130, lg: 150, xl: 200 },
								width: { md: 250, lg: 260, xl: 320 },
							}}
						>
							<Typography
								className='font-futura-regular'
								sx={{ fontSize: { md: 13, lg: 13, xl: 15 } }}
							>
								{productToShow?.description}
							</Typography>
							<Box mt={2}></Box>
							{productToShow ? (
								<CellsInfo receipt={productToShow}></CellsInfo>
							) : (
								<></>
							)}
						</Box>
						<Box
							className='absolute font-futura-regular'
							style={{ bottom: 80, right: 150 }}
							sx={{
								width: { xl: 370, lg: 259, md: 210 },
								height: { xl: 125, lg: 100, md: 90 },
							}}
						>
							<p>Price: {setPriceString(productToShow?.price || 0)}</p>
							<div className='pt-5'></div>
							<div className='flex'>
								<BottomButtonComponentWrapper>
									<CounterComponent
										value={amount}
										setValue={setAmount}
									></CounterComponent>
								</BottomButtonComponentWrapper>
								<div className='pr-5'></div>
								<BottomButtonComponentWrapper>
									{!productInCart ? (
										<>
											<ButtonComponent variant='primary' onClick={addToCart}>
												Add to cart
											</ButtonComponent>
										</>
									) : (
										<>
											<ButtonComponent variant='primary' onClick={() => {}}>
												Added
											</ButtonComponent>
										</>
									)}
								</BottomButtonComponentWrapper>
							</div>
						</Box>
					</Box>
					<DistanceComponent></DistanceComponent>

					<NextPrevButtons
						setCurrentProductToShowHandler={setCurrentProductToShowHandler}
					></NextPrevButtons>
				</div>

				<div className='md:hidden container m-auto h-full overflow-y-auto'>
					<DialogCloseIcon onClick={() => setShow(false)}></DialogCloseIcon>
					<div className='grid grid-cols-2 items-end relative'>
						<div
							className='absolute'
							style={{
								width: "160px",
								height: "320px",
								right: 0,
								top: -50,
								backgroundImage: `url(${productToShow?.brunch})`,
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
									backgroundImage: `url(${productToShow?.bottle})`,
									backgroundSize: "cover",
								}}
							></div>
						</div>
						<div className='col-span-1 justify-self-center pb-3'>
							<h3 className='text-2xl font-recoleta-bold'>
								{productToShow?.name.split(" ")[0]} <br></br>
								{productToShow?.name.split(" ")[1]}
							</h3>
							<NextPrevButtons
								setCurrentProductToShowHandler={setCurrentProductToShowHandler}
							></NextPrevButtons>
						</div>
					</div>

					{productToShow ? (
						<CellsInfo receipt={productToShow}></CellsInfo>
					) : (
						<></>
					)}

					<Box mt={2}></Box>

					<div className='w-11/12 m-auto grid grid-cols-2 gap-3'>
						<Box sx={{ height: 45 }}>
							<CounterComponent
								value={amount}
								setValue={setAmount}
							></CounterComponent>
						</Box>
						<Box sx={{ height: 45 }}>
							<BottomButtonComponentWrapper>
								{!productInCart ? (
									<>
										<ButtonComponent variant='primary' onClick={addToCart}>
											Add to cart
										</ButtonComponent>
									</>
								) : (
									<>
										<ButtonComponent variant='primary' onClick={() => {}}>
											Added
										</ButtonComponent>
									</>
								)}
							</BottomButtonComponentWrapper>
						</Box>
						<Box className='col-span-2'>
							<Accordion sx={{ boxShadow: "none", backgroundColor: "#F0EADC" }}>
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
									<Typography>{productToShow?.description}</Typography>
								</AccordionDetails>
							</Accordion>
						</Box>
					</div>

					<DistanceComponent></DistanceComponent>

					<Box className={"w-11/12 m-auto"}>
						<Box className={"overflow-x-scroll flex pb-8 custom-scrollbar"}>
							{products
								.filter((receipt: product) => receipt.id !== productToShow?.id)
								.map((item: product) => (
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
										onClick={() => setProductToShow(item)}
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
											{setPriceString(item.price)}
										</p>
									</Box>
								))}
						</Box>
					</Box>
					<DistanceComponent></DistanceComponent>
				</div>
			</>
		</DialogComponent>
	);
};
