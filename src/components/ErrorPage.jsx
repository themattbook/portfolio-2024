import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className='error-page'>
			<main>
				<div className='intro'>
					<h3>
						{error.status}: {error.statusText}
					</h3>
					<h1>
						No, you didn&apos;t break anything, but it would appear
						that{" "}
						<span className='gradient'>
							{error.error.message.toLowerCase()}
						</span>
					</h1>
					<p>
						It happens. Something as simple as making a typo in the
						address bar will bring you here. Check the URL for any
						typos and if none are found, rest assured it&apos;s a
						glitch in the Matrix and I&apos;m doing everything I can
						to fix it promptly. Sorry about that!
					</p>
					<a href='/'>Return home</a>
					<h3>Nerd Stuff</h3>
					<div className='nerd-stuff'>
						<code>{error.error.stack}</code>
					</div>
				</div>
			</main>
			{/* <h1>Oops!</h1>
			<p>An error has occurred</p>
			<p>
				{error.status}: {error.error.message}
			</p> */}
		</div>
	);
}
