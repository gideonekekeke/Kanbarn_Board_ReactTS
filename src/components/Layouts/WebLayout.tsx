import React from "react";
import NavBar from "../Blocks/NavBar";
import SideBar from "../Blocks/SideBar";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
	margin-top: 90px;
	margin-left: 220px;
`;

const WebLayout = () => {
	return (
		<LayoutContainer>
			<SideBar />
			<NavBar />
			<Outlet />
		</LayoutContainer>
	);
};

export default WebLayout;
