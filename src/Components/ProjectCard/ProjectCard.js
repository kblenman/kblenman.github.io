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
	);
}

export default ProjectCard;