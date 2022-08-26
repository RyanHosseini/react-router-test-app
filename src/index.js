import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { About, Books, Book, Contact } from "./components";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Depending on URL/ Address changes */}
		<BrowserRouter>
			<Routes>
				{/* You can think about a <Route> kind of like an if statement; if its path matches the current URL, it renders its element */}
				<Route path="/" element={<App />}>
					<Route path="about" element={<About />} />
					<Route path="books" element={<Books />} />
					<Route path="books/:bookId" element={<Book />} />
				</Route>
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
