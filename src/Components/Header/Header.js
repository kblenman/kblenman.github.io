import React from 'react';
import './Header.css';

const Header = ({ route, onRouteChange }) => {
	return (
		<header className="flex flex-column items-center header-background">

			<div className="mt4 tc">
				<h1 className="ttu tracked f1 font-title animated fadeInDown">Kira-Norese</h1>
				<h2 className="ttu tracked f4 font-subtitle animated fadeIn delay-1s">Full-Stack Developer</h2>
			</div>

			{/* Apply underlining/highlighting to the current active route */}
			<div className="mt4 pa3 flex justify-center f3 font-main w-100 bg-light-bluegray">
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