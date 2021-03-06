import './about.scss';
import me from '../../images/me3.png';

function About() {
	return (
		<div className='about' id='about'>
			<div className='myself'>
				<div className='left'>
					<h4>INTRODUCE MYSELF</h4>
					<p>
						I have professional experience with programming languages and tools
						such as React, Redux, HTML, CSS, Sass, Bootstrap, javascript, ES6,
						Express Js, Material UI, and Firebase Auth to contribute features by
						writing and maintaining code. I also have experience in Photoshop,
						Node.js, JSON, WordPress, After Effects. I am highly motivated and
						enthusiastic, always with excellent attention to detail. I will give
						my best effort to achieve the best result. All tasks I try to carry
						out on time and in full. So if you have any questions or inputs,
						please don't hesitate to contact me.
					</p>
					<a href='https://docs.google.com/document/d/10t5yWxzV1vWXKNVcbyB7qBe0ZxqJAakGitGOk-9K8Fo/edit?usp=sharing'>
						<button>GET RESUME</button>
					</a>
				</div>
				<div className='right'>
					<img src={me} alt='' />
				</div>
			</div>
		</div>
	);
}

export default About;
