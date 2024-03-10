import { useParams } from "react-router-dom";
import projects from "../data/Projects.json";

export default function ProjectDetail() {
	const { projectId } = useParams();
	const project = projects.find((p) => p.id === projectId);

	if (!project) {
		return (
			<main>
				<div className='intro'>Project not found</div>
			</main>
		);
	}

	return (
		<main>
			<div className='intro'>
				<img src={project.featuredImage} className='featured-image' />
				<h1>{project.name}</h1>
				<div className='project-meta'>
					<p>
						<strong>Role: </strong>
						{project.role}
					</p>
					<p>
						<strong>Year: </strong>
						{project.year}
					</p>
				</div>
				<p>{project.description}</p>
				<h3>Technologies Used</h3>
				<div className='project-tech-used'>
					{project.tech_used.map((tech, index) => (
						<div key={index} className='project-tech-item'>
							{tech}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
