import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Container = styled.div`
	width: 200px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	position: fixed;
	background-color: white;
	top: 70px;
	bottom: 0;
	left: 0;
	right: 0;
	color: black;

	padding-top: 50px;
`;

const NavHold = styled(NavLink)`
	display: flex;
	padding: 20px;
`;
const Icon = styled.div`
	margin-right: 10px;
`;
const Span = styled.div`
	font-weight: bold;
`;

const SideBar = () => {
	return (
		<Container>
			<NavHold
				to='/'
				style={({ isActive }) => {
					return {
						color: isActive ? "gray" : "black",
						background: isActive ? "rgba(248, 223, 223, 0.5)" : "transparent",
						textDecoration: "none",
					};
				}}>
				<Icon>icon</Icon>
				<Span>My Day</Span>
			</NavHold>

			<NavHold
				style={({ isActive }) => {
					return {
						color: isActive ? "gray" : "black",
						background: isActive ? "rgba(248, 223, 223, 0.5)" : "transparent",
						textDecoration: "none",
					};
				}}
				to='/important'>
				<Icon>icon</Icon>
				<Span>Important</Span>
			</NavHold>
			<NavHold
				style={({ isActive }) => {
					return {
						color: isActive ? "gray" : "black",
						background: isActive ? "rgba(248, 223, 223, 0.5)" : "transparent",
						textDecoration: "none",
					};
				}}
				to='/board'>
				<Icon>icon</Icon>
				<Span>Board</Span>
			</NavHold>
		</Container>
	);
};

export default SideBar;
