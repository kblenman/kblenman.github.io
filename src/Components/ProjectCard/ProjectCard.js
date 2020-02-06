import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
	return (
		<div className="card-height card-grid card-background w-100 w-40-l ma3 
		font-main f4 tc animated fadeInUp delay-1s shadow-2">
			<h4 className="flex justify-center items-center ma0 pa3 w-100 ttu tracked font-subtitle fc-lighttan">{props.projectName}</h4>
			<p className="flex justify-center items-center ma0 pa3 w-100 lh-copy">{props.projectDescription}</p>
			<div className="w-80 pa2 flex flex-wrap justify-around center fc-darktan">
				{
					props.technologyUsed.map((technology, i) => {
						return(
							<p key={i} className="ma2">{technology}</p>
						);
					})
				}
			</div>
			<div className="w-100 flex flex-column flex-row-ns justify-around bg-light-bluegray pa1">
				<div className="link-container flex items-center justify-center">
					<i className="fas fa-code fa-1x pa2"></i>
					<a href={props.codeLink} target="_blank" 
					className="link underline-hover" rel="noopener noreferrer">View Code/ReadMe</a>
				</div>

				<div className="link-container flex items-center justify-center">
					<i className="fas fa-desktop fa-1x pa2"></i>
					<a href={props.viewLink} 
					target="_blank" className="link underline-hover" rel="noopener noreferrer">View Project</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;