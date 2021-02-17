import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

ReactDOM.render(
	<h1>
		react-typescript-webpack5-starterpack
		<Header />
		<Body />
		<Footer />
	</h1>,
	document.querySelector('#root')
);
