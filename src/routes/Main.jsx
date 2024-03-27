import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
export default function Root() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const client = createClient({
			space: import.meta.env.VITE_SPACE_ID,
			accessToken: import.meta.env.VITE_CONTENT_DELIVERY_ACCESS_TOKEN,
		});

		client
			.getEntries({
				content_type: Object,
			})
			.then((response) => {
				setProjects(response.items);
			})
			.catch(console.error);
	});
	return (
		<>
			<main>
				<div className='intro'>
					<h1>
						A web developer passionate about web frameworks and
						learning better ways to create{" "}
						<span className='gradient'>useful applications.</span>
					</h1>
					<p>
						My name is Aron and I&apos;m a FullStack Developer based
						out of Schaumberg, Illinois. I&apos;m one of the
						maintainers of the Open Source Social Network and have
						worked with a myriad of notable companies. I&apos;ve
						been writing code for over fifteen years, focusing on
						Javascript frameworks like React and Vue.
					</p>
					<p>
						<Link to='/profile'>My profile &rarr;</Link>
					</p>
				</div>
			</main>
			<section>
				<h2>Selected Projects</h2>
				{projects.map((project, index) => (
					<div key={index}>
						<div className='project-card'>
							<img
								src={
									project.fields.featuredImage.fields.file.url
								}
								className='project-image'
							/>
							<div className='project-desc'>
								<h3>{project.fields.name}</h3>
								<p>{project.fields.intro}</p>
								<p className='project-readmore'>
									<Link
										to={`/projects/${project.fields.slug}`}
										state={{ project }}
									>
										Read More &rarr;
									</Link>
								</p>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}
