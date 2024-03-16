import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectDetail() {
	const location = useLocation();
	const project = location.state.project;

	// Assuming `richText` is the rich text data from Contentful
	const richText = project.fields.description; // Your rich text field

	const options = {
		renderNode: {
			// Handling embedded asset blocks (e.g., images)
			"embedded-asset-block": (node) => {
				// Accessing the image URL and other details
				const { url } = node.data.target.fields.file;
				const { title, description } = node.data.target.fields;
				return <img src={url} alt={description || title} />;
			},
		},
	};

	const RichTextContent = ({ richText }) => {
		return documentToReactComponents(richText, options);
	};

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
				<div className='project-text'>
					{RichTextContent({ richText })}
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
