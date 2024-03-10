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
				<h1 className='gradient'>{project.name}</h1>
				<div>
					{project.images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`${project.name} ${index + 1}`}
							style={{
								width: "100%",
								maxWidth: "600px",
								marginBottom: "20px",
							}}
						/>
					))}
				</div>
				<p>{project.description}</p>
				<h3>Technologies Used</h3>
				<ul>
					{project.tech_used.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
			</div>
		</main>
	);
}
