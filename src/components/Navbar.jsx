import { FaLinkedin, FaGithubSquare, FaCodepen } from "react-icons/fa";

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-left'>
				<a href='/'>&#47;&#47;</a>
			</div>
			<div className='navbar-right'>
				<ul>
					<li>
						<a
							href='https://github.com/themattbook'
							target='_blank'
						>
							<FaLinkedin size={"20px"} />
						</a>
					</li>
					<li>
						<a
							href='https://github.com/themattbook'
							target='_blank'
						>
							<FaGithubSquare size={"20px"} />
						</a>
					</li>
					<li>
						<a
							href='https://github.com/themattbook'
							target='_blank'
						>
							<FaCodepen size={"20px"} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
