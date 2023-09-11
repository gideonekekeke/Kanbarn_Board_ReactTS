import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import audi from "../assets/aud.wav";

const Container = styled.div`
	width: 100%;
`;

const Input = styled.input`
	width: 90%;
	height: 30px;
`;

const RadioInp = styled.input``;
const Box = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

	width: 90%;
`;

const MyDay = () => {
	const myRef = useRef(null);
	const [title, setTitle] = useState("");
	const [taskData, setTaskData] = useState([
		{
			title: "fetch water",
			id: 1,
			status: false,
		},

		{
			title: "Go to the market",
			id: 2,
			status: false,
		},

		{
			title: "laundary",
			id: 3,
			status: false,
		},
	]);

	const HandleChecked = (id: number) => {
		const iterate = taskData?.map((el) => {
			return el.id === id
				? {
						...el,
						status: !el.status,
				  }
				: el;
		});

		taskData?.some((el) => {
			if (el.status === true) {
				myRef?.current?.play();
			}
		});

		// taskData?.map((el) => {
		// if (el.status === true) {
		// myRef?.current?.play();
		// }
		// });

		setTaskData(iterate);
	};

	const AddTodo = () => {
		const newData = [
			...taskData,
			{
				id: taskData.length + 1,
				title: title,
				status: false,
			},
		];

		localStorage.setItem("myDay", JSON.stringify(newData));
		setTaskData(newData);
	};

	useEffect(() => {
		const retrieveMyDay = JSON.parse(localStorage.getItem("myDay") || "");

		setTaskData(retrieveMyDay);
	}, []);

	return (
		<Container>
			<h3>My Day</h3>
			<Input
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<button onClick={AddTodo}>Add</button>
			<br />
			<br />
			<div>All Task</div>
			{taskData?.map((props) => (
				<div key={props.id}>
					{props.status === false ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								type='radio'
							/>
							<span>{props.title}</span>
						</Box>
					) : null}
				</div>
			))}

			<br />
			<br />
			<br />

			<div>Completed</div>
			{taskData?.map((props) => (
				<div key={props.id}>
					{props.status === true ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								checked={true}
								type='radio'
							/>
							<span
								style={{
									textDecoration: "line-through",
								}}>
								{props.title}
							</span>
						</Box>
					) : null}
				</div>
			))}

			<audio ref={myRef} src={audi} />
		</Container>
	);
};

export default MyDay;
