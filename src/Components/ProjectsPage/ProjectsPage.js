import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from './projects';

const ProjectsPage = () => {
	return (
		<div className="font-main f3 flex flex-column items-center animate__animated animate__fadeInRight">
			<h3 className="ttu tracked font-subtitle mb0">Projects</h3>
			<div className="tc lh-copy w-90 bb">
				<p className="mb1">Welcome to the projects page!</p>
				<p className="mt0 mb1">Be sure to visit each project's code to learn more about
				them.</p>
			</div>
			<div className="pa2 w-100 flex flex-wrap justify-center">
				{
					projects.map((project, i) => {
						return (
							<ProjectCard 
								key={i}
								projectName={projects[i].projectName}
								projectDescription={projects[i].projectDescription}
								technologyUsed={projects[i].technologyUsed}
								codeLink={projects[i].codeLink}
								viewLink={projects[i].viewLink}
							/>

						);

					})
				}
			</div>
		</div>
	);
}

export default ProjectsPage;