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
							I was hired by DFN Freight to build a digital
							logistics application that could handle all of the
							legwork between a carrier and a shipper. I started
							as the only dev, laying the groundwork that
							propelled the app to MVP.
						</p>
						<p className='project-readmore'>
							<a href=''>Read more &rarr;</a>
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/tornado-trax-mockup2.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>Tornado Trax</h3>
						<p>
							As a hobby meterologist, Tornadoes are of a
							particular interest of mine. I wanted to build an
							interactive app that visualizes tornado paths using
							NOAA weather data. This is an ongoing project.
						</p>
						<p className='project-readmore'>
							<a href='/projects/tornadotrax'>Read more &rarr;</a>
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/recipe-finder-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>What&apos;s In The Fridge?</h3>
						<p>
							As a husband and father, I know all too well the
							struggles of coming up with ideas for dinner. Since
							recipe apps are a dime-a-dozen, I wanted an app that
							takes the ingredients I already have on hand and
							gives me recipe ideas.
						</p>
						<p className='project-readmore'>
							<a href=''>Read more &rarr;</a>
						</p>
					</div>
				</div>
				<div className='project-card'>
					<img
						src='/project-images/weather-app-mockup.webp'
						className='project-image'
					/>
					<div className='project-desc'>
						<h3>Forecast and Alerts</h3>
						<p>
							Hear me out. I know I just talked about dime-a-dozen
							apps, but this one was made to pick up where other
							apps I&apos;ve seen fall short. When I check the
							weather, I also want to be able to see active
							weather alerts. I also don&apos;t want a lot of
							distractions. Just give me the data. This is it.
						</p>
						<p className='project-readmore'>
							<a href=''>Read more &rarr;</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
