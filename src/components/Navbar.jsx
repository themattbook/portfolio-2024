export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-left'>
				<a href='/'>MS</a>
			</div>
			<div className='navbar-right'>
				<ul>
					<li>Resume</li>
					<li>
						<a
							href='https://github.com/themattbook'
							target='_blank'
						>
							Github
						</a>
					</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
}
