import React from 'react';

const Navigation = () => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						{' '}
						<span className='sr-only'>Toggle navigation</span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
					</button>
					<a className='navbar-brand page-scroll' href='#page-top'>
						<div className="nav-pic">
							<img alt="Company Logo" className="img" src="img/Logo1.jpg" />
						</div>
					</a>{' '}
				</div>

				<div
					className='collapse navbar-collapse'
					id='bs-example-navbar-collapse-1'
				>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<a href='#about' className='page-scroll'>
								About
							</a>
						</li>
						<li>
							<a href='#services' className='page-scroll'>
								Services
							</a>
						</li>
						<li>
							<a href='#specialities' className='page-scroll'>
								Specialities
							</a>
						</li>
						<li>
							<a href='#testimonials' className='page-scroll'>
								Testimonials
							</a>
						</li>
						<li>
							<a href='#contact' className='page-scroll'>
								Contact
							</a>
						</li>
						<li>
							<a href="/hire-us" className='page-scroll'>
								Hire Us
							</a>

						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;