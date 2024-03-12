import { useParams } from "react-router-dom";
import projects from "../data/Projects.json";
import DOMPurify from "dompurify";

export default function ProjectDetail() {
	const { projectId } = useParams();
	const project = projects.find((p) => p.id === projectId);
	const santizedHTMLDescription = project.full_desc;

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
					<p>
						<strong>Code: </strong>
						<a href={project.github_url} target='_blank'>
							{project.github_url}
						</a>
					</p>
					<p>
						<strong>Demo: </strong>
						<a href={project.demo_url} target='_blank'>
							{project.demo_url}
						</a>
					</p>
				</div>
				<p>
					<em>{project.description}</em>
				</p>
				<h3>Introduction</h3>
				<div
					className='intro'
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(santizedHTMLDescription),
					}}
				></div>
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
