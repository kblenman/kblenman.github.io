import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<header className="flex flex-column items-center header-background">

			<div className="mt2 tc">
				<h1 className="ttu tracked f1 font-title animate__animated animate__fadeInDown">Kira-Norese</h1>
				<h2 className="ttu tracked f4 font-subtitle animate__animated animate__fadeIn animate__delay-1s">Software Developer</h2>
			</div>

			<div className="mt2 pa3 flex justify-center f3 font-main w-100 bg-light-bluegray tc">
				<div className="w-50-m w-25-l flex flex-column flex-row-ns justify-around">
					<NavLink to="/" exact activeClassName="activeRoute">
						<button className="headerButton ttu tracked pointer mb2 mb0-ns">
							Home
						</button>
					</NavLink>
					<NavLink to="/projects" activeClassName="activeRoute">
						<button className="headerButton ttu tracked pointer">
							Projects
						</button>
					</NavLink>
				</div>
			</div>
		</header>
	);
}

export default Header;