import React, { FunctionComponent } from "react";

import { ButtonComponent } from "../components/ButtonComponent";
import { ComponentWrapper } from "../components/ComponentWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { SectionWrapper } from "../components/SectionWrapper";
import { ArrowDownIcon } from "../components/ArrowDownIcon";
import Image from "next/image";
import { Box } from "@mui/material";
import { DistanceComponent } from "@/components/DistanceComponent";
import { useState } from "react";
import { DialogComponent } from "@/components/DialogComponent";
import { DialogCloseIcon } from "@/components/DialogCloseIcon";

interface place {
	id: number;
	name: string;
	address: string;
	laborTime: string;
	position: {
		desktop: {
			top: string;
			right: string;
		};
		mobile: { top: string; right: string };
	};
}

const localMarketPoints: place[] = [
	{
		id: 1,
		name: "Name",
		address: "Rīgas iela 17, Valka, Valkas pilsēta, LV-4701, Latvia",
		laborTime: "Mon - Sun    8 am - 10pm",
		position: {
			desktop: {
				top: "70px",
				right: "380px",
			},
			mobile: {
				top: "40px",
				right: "230px",
			},
		},
	},
	{
		id: 2,
		name: "point Number 2",
		address: "Rīgas iela 18, Balka, Valkas pilsēta, LV-4701, Latvia",
		laborTime: "Mon - Sun    8 am - 10pm",
		position: {
			desktop: {
				top: "128px",
				right: "560px",
			},
			mobile: {
				top: "80px",
				right: "340px",
			},
		},
	},
	{
		id: 3,
		name: "the shop",
		address: "Rīgas iela 19, Palka, Valkas pilsēta, LV-4701, Latvia",
		laborTime: "Mon - Sun    8 am - 10pm",
		position: {
			desktop: {
				top: "315px",
				right: "565px",
			},
			mobile: {
				top: "190px",
				right: "335px",
			},
		},
	},
	{
		id: 4,
		name: "shop 4 four",
		address: "Rīgas iela 20, Lalka, Valkas pilsēta, LV-4701, Latvia",
		laborTime: "Mon - Sun    8 am - 10pm",
		position: {
			desktop: {
				top: "160px",
				right: "160px",
			},
			mobile: {
				top: "90px",
				right: "100px",
			},
		},
	},
];

const ColumnComponent = ({
	imgSrc,
	title,
	text,
	onClick,
}: {
	imgSrc: string;
	title: string;
	text: string;
	onClick(): void;
}) => {
	return (
		<Box width={"100%"}>
			<Box sx={{ display: { xs: "none", lg: "block" } }}>
				<Image src={imgSrc} width={402} height={450} alt={""}></Image>
			</Box>

			<Box
				sx={{ display: { xs: "flex", lg: "none" } }}
				justifyContent={"center"}
			>
				<Image src={imgSrc} width={320} height={350} alt={""}></Image>
			</Box>

			<div className='mt-3'></div>
			<Box className='text-black' sx={{ width: { xs: "100%", lg: "410px" } }}>
				<h3 className='font-futura-bold text-4xl lg:text-left text-center'>
					{title}
				</h3>
				<div className='mt-3'></div>

				<p className='w-full font-futura-regular text-sm lg:text-left text-center'>
					{text}
				</p>
				<div className='mt-3'></div>
				<ComponentWrapper
					sx={{
						width: { xs: 120, lg: 150 },
						height: { xs: 35, lg: 40 },
						margin: { xs: "auto", lg: "initial" },
					}}
				>
					<ButtonComponent variant='outlined' onClick={() => onClick()}>
						Open map
					</ButtonComponent>
				</ComponentWrapper>
			</Box>
		</Box>
	);
};

const MapMarker = ({
	color,
	position,
	onClick,
}: {
	color: "green" | "red";
	position: { top: string; right: string };
	onClick(): void;
}) => {
	return (
		<div
			className={`absolute bg-green rounded-xl border-white border-2
			cursor-pointer active:scale-110 lg:hover:scale-105
			${color === "red" ? "bg-red" : "bg-green"}`}
			style={{
				width: "14px",
				height: "14px",
				top: position.top,
				right: position.right,
			}}
			onClick={onClick}
		></div>
	);
};

const AddressInfoCell = ({
	place,
	selectedPlaceId,
}: {
	place: place;
	selectedPlaceId: number;
}) => {
	return (
		<Box
			key={place.id}
			width={256}
			height={129}
			display={place.id === selectedPlaceId ? "block" : "none"}
			sx={{
				top: `calc(${place.position.desktop.top} - 5px)`,
				right: `calc(${place.position.desktop.right} + 20px)`,
			}}
			className={"lg:absolute border-brown-400 border-2 rounded bg-white"}
		>
			<div className='grid grid-cols-5  h-full items-center'>
				<div className='col-span-1'></div>
				<div className='col-span-4 font-futura-bold text-xl'>{place.name}</div>

				<div className='col-span-1 justify-self-center'>
					<Image
						src={"/place-icon.svg"}
						width={14}
						height={18}
						alt={"place"}
					></Image>
				</div>
				<div className='col-span-4 font-futura-regular text-md'>
					{place.address}
				</div>

				<div className='col-span-1 justify-self-center'>
					<Image
						src={"/calendar-icon.svg"}
						width={14}
						height={16}
						alt={"place"}
					></Image>
				</div>
				<div className='col-span-4 font-futura-regular text-md'>
					{place.laborTime}
				</div>
			</div>
		</Box>
	);
};

export const WhereToFind: FunctionComponent = () => {
	const [showLocalMap, setShowLocalMap] = useState(false);

	const [placeIdToShow, setPlaceIdToShow] = useState(0);

	const setPlaceIdToShowHandler = (placeId: number) => {
		if (placeId === placeIdToShow) return setPlaceIdToShow(0);
		setPlaceIdToShow(placeId);
	};

	return (
		<SectionWrapper id={"where-to-find"}>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title={"Where to Find Us"}
					subtitle='Open the map to see a list of stores with our products'
				></SectionHeading>

				<div className='w-full flex justify-center pt-3'>
					<ArrowDownIcon color={"black"}></ArrowDownIcon>
				</div>
				<DistanceComponent></DistanceComponent>

				<div className='grid lg:grid-cols-2 grid-cols-1 justify-items-center'>
					<div className='col-span-1'>
						<ColumnComponent
							imgSrc={"/local-market.jpg"}
							title={"Local market"}
							text={
								"For our local market in Latvia, we take great pride in our connection to the land and the vibrant culture that surrounds us. Each spirit we craft embodies the rich traditions and flavors of our beautiful country."
							}
							onClick={() => setShowLocalMap(true)}
						></ColumnComponent>
					</div>
					<div className='lg:block hidden col-span-1'>
						<ColumnComponent
							imgSrc={"/international-market.jpg"}
							title={"International market"}
							text={
								"We are honored to present our spirits to the international market, sharing the artistry and craftsmanship of our creations with discerning drinkers worldwide"
							}
							onClick={() => {}}
						></ColumnComponent>
					</div>
				</div>

				<DistanceComponent type={"bottom"}></DistanceComponent>

				<DialogComponent
					open={showLocalMap}
					setOpen={(open) => setShowLocalMap(open)}
				>
					<div className='container m-auto h-full overflow-y-auto'>
						<DialogCloseIcon
							onClick={() => setShowLocalMap(false)}
						></DialogCloseIcon>
						<Box mt={2}></Box>
						<Box sx={{ display: { xs: "none", lg: "block" } }}>
							<SectionHeading
								title={"Local market"}
								subtitle='Hover over the dot to see the address of the store'
							></SectionHeading>
						</Box>

						<Box sx={{ display: { xs: "block", lg: "none" } }}>
							<SectionHeading
								title={"Local market"}
								subtitle=''
							></SectionHeading>
						</Box>

						<DistanceComponent></DistanceComponent>

						<div className='hidden lg:block overflow-x-auto'>
							<div
								className='flex justify-center items-center relative m-auto'
								style={{ minWidth: 1142, maxWidth: 1142 }}
							>
								{localMarketPoints.map((point) => (
									<MapMarker
										key={point.id}
										color={point.id === placeIdToShow ? "red" : "green"}
										position={{
											top: point.position.desktop.top,
											right: point.position.desktop.right,
										}}
										onClick={() => setPlaceIdToShowHandler(point.id)}
									></MapMarker>
								))}
								{localMarketPoints.map((point) => (
									<AddressInfoCell
										key={point.id}
										place={point}
										selectedPlaceId={placeIdToShow}
									></AddressInfoCell>
								))}
								<Image
									src={"/map.png"}
									width={1142}
									height={692}
									alt={"map"}
								></Image>
							</div>
						</div>

						<div className='lg:hidden overflow-x-auto custom-scrollbar pb-8 m-auto w-11/12'>
							<div
								className='flex justify-center items-center relative m-auto'
								style={{ minWidth: 694, maxWidth: 694 }}
							>
								{localMarketPoints.map((point) => (
									<MapMarker
										key={point.id}
										color={point.id === placeIdToShow ? "red" : "green"}
										position={{
											top: point.position.mobile.top,
											right: point.position.mobile.right,
										}}
										onClick={() => setPlaceIdToShowHandler(point.id)}
									></MapMarker>
								))}
								<Image
									src={"/map.png"}
									width={694}
									height={436}
									alt={"map"}
								></Image>
							</div>
						</div>

						<DistanceComponent></DistanceComponent>

						<div className='flex justify-center'>
							{localMarketPoints
								.filter((point) => point.id === placeIdToShow)
								.map((point) => (
									<AddressInfoCell
										key={point.id}
										place={point}
										selectedPlaceId={placeIdToShow}
									></AddressInfoCell>
								))}
						</div>

						<DistanceComponent></DistanceComponent>
					</div>
				</DialogComponent>
			</>
		</SectionWrapper>
	);
};
