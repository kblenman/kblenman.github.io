import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
	return (
		<div className="card-background w-100 w-40-l ma3 font-main f4 shadow-2 flex flex-column tc items-center">
			<h4 className="w-100 pa3 ttu tracked font-subtitle fc-lighttan ma0">Project's Name</h4>
			<p className="w-80 pa0 ma0 center lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			Sed euismod venenatis magna in vestibulum. Curabitur quis massa nibh. Sed diam sem, 
			ultrices quis risus vel, vulputate rhoncus felis. Etiam ut velit hendrerit nunc dictum 
			hendrerit non in diam. Praesent tristique urna ac lacinia bibendum. Proin aliquam augue eu 
			nibh laoreet suscipit.</p>
			<div className="w-80 flex flex-wrap justify-around mt3 fc-darktan">
				<p className="ma2">Javascript</p>
				<p className="ma2">CSS</p>
				<p className="ma2">React</p>
				<p className="ma2">Tachyons</p>
				<p className="ma2">Animate.css</p>
			</div>
			<div className="flex flex-column flex-row-ns justify-around bg-light-bluegray w-100 mt3">
				<div className="link-container flex items-center justify-center mt1 mb1 ml3 mr3">
					<i className="fas fa-code fa-1x ma2"></i>
					<a href="https://github.com/kblenman" target="_blank" 
					className="link underline-hover" rel="noopener noreferrer">View Code</a>
				</div>

				<div className="link-container flex items-center justify-center ma2">
					<i className="fas fa-desktop fa-1x ma2"></i>
					<a href="https://www.linkedin.com/in/kira-norese-blenman-71815415b/" 
					target="_blank" className="link underline-hover" rel="noopener noreferrer">View Project</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;