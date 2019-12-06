import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("test to check that it renders without crashing", () => {
	const component = render(<App />);
	console.log(component);
});

test("test to check if strikes is rendered", () => {
	const { getByText } = render(<App />);
	getByText(/strikes/i);
});

test("test to check if balls is rendered", () => {
	const { getByText } = render(<App />);
	getByText(/balls/i);
});

test("test to check if display-component is rendered", () => {
	const { getByTestId } = render(<App />);
	getByTestId(/display-component/i);
});
