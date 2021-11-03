import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from './projects';

const ProjectsPage = () => {
	return (
		<section className="font-main f3 flex flex-column items-center animate__animated animate__fadeInRight">
			<h3 className="ttu tracked font-subtitle mb0">Projects</h3>
			<div className="pa2 tc lh-copy w-80 bb bt mt3">
				<p className="mt1 mb1">Welcome to my playground!</p>
				<p className="mt0 mb1">Be sure to visit the links in each project to view or learn more about them.</p>
			</div>
			<div className="mt3 pa2 w-100 flex flex-wrap justify-center">
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
								designLink={projects[i].designLink}
							/>
						);
					})
				}
			</div>
		</section>
	);
}

export default ProjectsPage;