import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
	return (
		<div className="project-card ma3 w-100 w-80-m w-30-l shadow-2 font-main f4">
			<div className="pt3 flex justify-center items-center">
				<h4 className="ma0 ttu tracked font-subtitle fc-lighttan">{props.projectName}</h4>
			</div>
			<div className="flex justify-center items-center ph3 tc lh-copy">
				<p className="ma0">{props.projectDescription}</p>
			</div>
			<div className="flex flex-wrap justify-evenly items-center ph3 fc-darktan">
				{
					props.technologyUsed.map((technology, i) => {
						return(
							<p key={i} className="ma2">{technology}</p>
						);
					})
				}
			</div>
			<div className="flex justify-evenly bg-light-bluegray">
				{ props.designLink !== "" ?
					<div className="flex items-center justify-center pa2">
						<i className="fas fa-paint-brush fa-xs pa2"></i>
						<a href={props.designLink} target="_blank" 
						className="link underline-hover tc f5 f4-ns" rel="noopener noreferrer">Design</a>
					</div>
					:
					<p className="dn"></p>				
				}
				<div className="flex items-center justify-center pa2">
					<i className="fas fa-desktop fa-xs pa2"></i>
					<a href={props.viewLink} target="_blank" 
					className="link underline-hover tc f5 f4-ns" rel="noopener noreferrer">View Project</a>
				</div>
				<div className="flex items-center justify-center pa2">
					<i className="fas fa-code fa-xs pa2"></i>
					<a href={props.codeLink} target="_blank" 
					className="link underline-hover tc f5 f4-ns" rel="noopener noreferrer">Code</a>
				</div>
			</div>
		</div>
		
		// <div className="card-height card-grid card-background w-100 w-70-m w-30-l ma3 font-main f4 tc shadow-2">
		// 	<h4 className="flex justify-center items-center ma0 pa3 w-100 ttu tracked font-subtitle fc-lighttan">{props.projectName}</h4>
		// 	<p className="flex justify-center items-center ma0 pa3 w-100 lh-copy">{props.projectDescription}</p>
		// 	<div className="w-80 pa2 flex flex-wrap justify-around center fc-darktan">
		// 		{
		// 			props.technologyUsed.map((technology, i) => {
		// 				return(
		// 					<p key={i} className="ma2">{technology}</p>
		// 				);
		// 			})
		// 		}
		// 	</div>
		// 	<div className="w-100 flex flex-column flex-row-ns justify-around bg-light-bluegray pa1">
		// 		<div className="link-container flex items-center justify-center">
		// 			<i className="fas fa-code fa-1x pa2"></i>
		// 			<a href={props.codeLink} target="_blank" 
		// 			className="link underline-hover" rel="noopener noreferrer">View Code/ReadMe</a>
		// 		</div>

		// 		<div className="link-container flex items-center justify-center">
		// 			<i className="fas fa-desktop fa-1x pa2"></i>
		// 			<a href={props.viewLink} 
		// 			target="_blank" className="link underline-hover" rel="noopener noreferrer">View Project</a>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default ProjectCard;