import React from 'react';

const AboutMe = () => {
	return (
		<section className="w-70 center font-main flex flex-column items-center f3 tc animate__animated animate__fadeInLeft">
			<h3 className="ttu tracked font-subtitle mb0">About Me</h3>
			<div className="tc lh-copy">
				<p>My name is Kira-Norese and I am a software developer from Tampa, Florida. Although I have knowledge 
				in many programming languages and can create full-stack applications from front to back, 
				<span className="fc-darktan"> my focus is on front-end development</span>. Why the front-end? Well... I absolutely enjoy the process! 
				I love talking to users and gaining an understanding of what they are looking to achieve or how they tend to use 
				a product, then based on that understanding, designing and coding a user interface that not only gets that job done 
				but also provides a great user experience.</p>
				<p>In my free time <span className="fc-darktan">I enjoy gardening and spending time with my family</span>, 
				which includes my two crazy dogs. I'm also a <span className="fc-darktan">lover of videogames </span> 
				(Fun Fact: it's what initially got me into technology!) and if I'm not playing one, there is a good chance I might 
				be watching someone else play on Twitch or Youtube.</p>
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
		</section>
	);
}

export default AboutMe;