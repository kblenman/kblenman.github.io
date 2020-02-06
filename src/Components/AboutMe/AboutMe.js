import React from 'react';

const AboutMe = () => {
	return (
		<div className="w-70 center font-main flex flex-column items-center f3 tc animated fadeInLeft">
			<h3 className="ttu tracked font-subtitle mb0">About Me</h3>
			<div className="tc lh-copy">
				<p>Hello! My name is Kira-Norese and I am a full-stack developer located in the
				Tampa, Florida area. Although much of my work involves using the PERN stack
				(PostgreSQL, Express, React, Node), I have foundational knowledge in
				many other programming languages and stacks which allows me to easily switch gears
				when needed.</p>
				<p>In my free time I enjoy spending time with my family and my two crazy dogs. I'm
				also a lover of videogames 
				<i className="fc-darktan"> (Fun Fact: it's what initially got me into development!) </i> 
				and if I'm not playing one, there is a good chance I might be watching someone else play on 
				Twitch or Youtube.</p>
			</div>
			<div className="flex flex-column flex-row-ns f4 font-subtitle">
				<div className="link-container flex items-center justify-center ma3">
					<i className="fab fa-github fa-2x ma2"></i>
					<a href="https://github.com/kblenman" target="_blank" 
					className="link underline-hover" rel="noopener noreferrer">GitHub Profile</a>
				</div>

				<div className="link-container flex items-center justify-center ma3">
					<i className="fab fa-linkedin fa-2x ma2"></i>
					<a href="https://www.linkedin.com/in/kira-norese-blenman-71815415b/" 
					target="_blank" className="link underline-hover" rel="noopener noreferrer">LinkedIn</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;