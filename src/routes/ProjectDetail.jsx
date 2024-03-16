import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectDetail() {
	const location = useLocation();
	const project = location.state.project;
	const fullDesc = project.fields.description;

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
				<img
					src={project.fields.featuredImage.fields.file.url}
					className='featured-image'
				/>
				<h1>{project.fields.name}</h1>
				<div className='project-meta'>
					<p>
						<strong>Role: </strong>
						{project.fields.role}
					</p>
					<p>
						<strong>Year: </strong>
						{project.fields.year}
					</p>
					{project.fields.githubUrl ? (
						<p>
							<strong>Code: </strong>
							<a href={project.fields.githubUrl} target='_blank'>
								{project.fields.githubUrl}
							</a>
						</p>
					) : null}
					<p>
						<strong>Demo: </strong>
						<a href={project.fields.demoUrl} target='_blank'>
							{project.fields.demoUrl}
						</a>
					</p>
				</div>
				<p>
					<em>{project.fields.intro}</em>
				</p>
				<h3>The Project</h3>
				<div className='intro'>
					{documentToReactComponents(fullDesc)}
				</div>
				<h3>Technologies Used</h3>
				<div className='project-tech-used'>
					{project.fields.techUsed.map((tech, index) => (
						<div key={index} className='project-tech-item'>
							{tech}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
