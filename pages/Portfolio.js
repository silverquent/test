
import { data } from '../public/PortfolioData'
import Link from 'next/link'


export default function Portfolio() {
	return (

		<div className='row portfolio'>

			{data.map((speaker) => {
				const { id, color, title, last, favorite, twitterHandle, company, session, } = speaker;
				return (
					<div className='col-lg-4 col-xm-12 col-sm-12 ' key={id}>

						<article className={"  style" + color} >
							<span className="image">
								<img src="images/pic02.jpg" alt="" />
							</span>
							<Link href={"/" + title}>
								<a >
									<h2>{title}</h2>
									<div className="content">
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
								</a>
							</Link>
						</article>
					</div>
				)
			})
			}

		</div>









	)
}


/*		<div id="main">
			<div className="inner">
				<header>
					<h1>This is Phantom, a free, fully responsive site<br />
						template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
					<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
				</header>
				<section className="tiles">
					{data.map((speaker) => {
						const { id, color, title, last, favorite, twitterHandle, company, session, } = speaker;
						return (
							<article className={"style" + color} key={id}>
								<span className="image">
									<img src="images/pic02.jpg" alt="" />
								</span>
								<a href="#">
									<h2>{title}</h2>
									<div className="content">
										<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
									</div>
								</a>
							</article>
						)
					})
					}
				</section>
			</div>
		</div>

				*/