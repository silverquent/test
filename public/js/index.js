import Head from 'next/head';
import Link from 'next/link'
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState, useEffect } from 'react';


import Test from './Toto';


export default function Home() {

	const [buttonBurger, setButtonBurger] = useState(false);

	const clickBurger = () => {
		buttonBurger == true ? setButtonBurger(false) : setButtonBurger(true)
		console.log(buttonBurger)
	}
	const clickCloseBurger = () => {
		setButtonBurger(false)
	}

	function useWindowSize() {
		const isClient = typeof window === "object";

		function getSize() {
			return {
				width: isClient ? window.innerWidth : undefined,
				height: isClient ? window.innerHeight : undefined
			};
		}

		const [windowSize, setWindowSize] = useState(getSize);

		useEffect(() => {
			if (!isClient) {
				return false;
			}

			function handleResize() {
				setWindowSize(getSize());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []); // Empty array ensures that effect is only run on mount and unmount

		return windowSize;
	}

	const screenWidth = useWindowSize().width;


	return (
		<div className="">
			<Head>
				<script type='text/javascript' src=""  ></script>

				<link rel="icon" href="/favicon.ico" />

				<title>Mon site Portfolio</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

			</Head>
			

			{/*Menu Burger*/}
			<div id="menu-burger" onClick={clickBurger} className={buttonBurger === true ? "clicked" : ""}>
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>
			<nav id="menu" className={buttonBurger === true ? 'visible ' : 'invisible'}>
				<ul>
					<li><a href="#">Item 1</a></li>
					<li><a href="#">Item 2</a></li>
					<li><a href="#">Item 3</a></li>
					<li><a href="#">Item 4</a></li>
					<li><a href="#">Item 5</a></li>
				</ul>
			</nav>

			<div className='container'>

				<h1 className='pt-5'>Mon site </h1>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/Toto">
							<a>Toto</a>
						</Link>
					</li>
					<li>
						<Link href="/Ip">
							<a>Ip</a>
						</Link>
					</li>
				</ul>


			</div>






		</div>
	)
}
