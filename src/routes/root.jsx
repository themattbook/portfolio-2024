export default function Root() {
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
						My name is Matt and I&apos;m a full-stack developer
						based out of Davenport, Iowa. I&apos;m currently working
						at OpenTeknik, the company responsible for Open Source
						Social Network. I&apos;ve been writing code for over ten
						years, focusing on Javascript frameworks like React and
						Vue. I&apos;ve got a lot to learn yet and have enjoyed
						the journey thus far; looking forward to where
						opportunity takes me.
					</p>
					<p>
						<a href=''>My profile &rarr;</a>
					</p>
					<p>
						<a href=''>Download Resume (.pdf)</a>
					</p>
					<p>
						<a href=''>Download Resume (.docx)</a>
					</p>
				</div>
			</main>
			<section>
				<h2>Selected Projects</h2>
				<div className='project-card'>
					<img
						src='/project-images/dfnx-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>Digital Freight Network</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eum assumenda tempora tempore perferendis
							repudiandae eos minima, quae quaerat voluptatem
							nostrum temporibus in et laborum optio fugiat nulla,
							modi qui ducimus.
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/tornado-trax-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>Tornado Trax</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eum assumenda tempora tempore perferendis
							repudiandae eos minima, quae quaerat voluptatem
							nostrum temporibus in et laborum optio fugiat nulla,
							modi qui ducimus.
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/recipe-finder-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>What Can I Make?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eum assumenda tempora tempore perferendis
							repudiandae eos minima, quae quaerat voluptatem
							nostrum temporibus in et laborum optio fugiat nulla,
							modi qui ducimus.
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/weather-app-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>5 Day Forecast</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eum assumenda tempora tempore perferendis
							repudiandae eos minima, quae quaerat voluptatem
							nostrum temporibus in et laborum optio fugiat nulla,
							modi qui ducimus.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
