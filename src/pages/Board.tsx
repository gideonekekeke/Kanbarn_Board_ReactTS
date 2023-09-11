import React, { useState } from "react";
import styled from "@emotion/styled";

const Column = styled.div`
	border: 1px solid gray;
	height: 500px;
	width: 300px;
	padding: 10px;
	margin-right: 30px;
`;

const Card = styled.div`
	flex: 1;
	padding: 10px;
	background-color: white;
	color: black;
	border-radius: 2px;
	min-height: 100px;
	margin-bottom: 10px;
`;

const Hold = styled.div`
	display: flex;
`;

type Status = "TODO" | "IN-PROGRESS" | "COMPLETED";

const Board = () => {
	const myColumn: Status[] = ["TODO", "IN-PROGRESS", "COMPLETED"];

	const [data, setData] = useState([
		{
			id: 1,
			title: "signup page ",
			status: "TODO",
		},

		{
			id: 2,
			title: "Login Page",
			status: "TODO",
		},

		{
			id: 3,
			title: "Logout functionality",
			status: "TODO",
		},
	]);

	const HandleOnDrop = (e) => {
		e.preventDefault();
	};

	const HandleUpdateOnDrop = (id: number, status: Status) => {
		const card = data.find((el) => el.id === id);

		if (card && card.status !== status) {
			card.status = status;

			if (Array.isArray(data)) {
				setData((prev) => [card, ...prev.filter((el) => el.id !== id)]);
			}
		}

		console.log(card);
	};

	return (
		<div>
			<h2>Board</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas
				molestias corporis reprehenderit dicta ut alias ullam qui rem quia.
			</p>
			<br />
			<Hold>
				{myColumn?.map((props) => (
					<div>
						<div>{props}</div>
						<Column
							onDrop={(e) => {
								HandleUpdateOnDrop(+e.dataTransfer.getData("draggable"), props);
							}}
							onDragOver={HandleOnDrop}>
							{data?.map((item) => (
								<div>
									{item.status === props ? (
										<Card
											onDragStart={(e) => {
												e.dataTransfer.setData("draggable", `${item.id}`);

												console.log(item.id);
											}}
											draggable>
											htheh
										</Card>
									) : null}
								</div>
							))}
						</Column>
					</div>
				))}
			</Hold>
		</div>
	);
};

export default Board;
