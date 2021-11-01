import React from 'react';
import './Header.css';

const Header = ({ route, onRouteChange }) => {
	return (
		<header className="flex flex-column items-center header-background">

			<div className="mt2 tc">
				<h1 className="ttu tracked f1 font-title animate__animated animate__fadeInDown">Kira-Norese</h1>
				<h2 className="ttu tracked f4 font-subtitle animate__animated animate__fadeIn animate__delay-1s">Software Engineer</h2>
			</div>

			{/* Apply underlining/highlighting to the current active route */}
			<div className="mt2 pa3 flex justify-center f3 font-main w-100 bg-light-bluegray">
			{ route === 'home' ?
				<div className="w-50-m w-25-l flex flex-column flex-row-ns justify-around">
					<button
						onClick = {() => onRouteChange('home')}
						className="headerButton bb ttu tracked fc-darktan pointer mb2 mb0-ns"> 
						Home
					</button>
					<button
						onClick = {() => onRouteChange('projects')}
						className="headerButton ttu tracked pointer"> 
						Projects
					</button>
				</div>
				:
				<div className="w-50-m w-25-l flex flex-column flex-row-ns justify-around">
					<button
						onClick = {() => onRouteChange('home')}
						className="headerButton ttu tracked pointer mb2 mb0-ns"> 
						Home
					</button>
					<button
						onClick = {() => onRouteChange('projects')}
						className="headerButton bb ttu tracked fc-darktan pointer"> 
						Projects
					</button>
				</div>
			}
			</div>
		</header>
	);
}

export default Header;