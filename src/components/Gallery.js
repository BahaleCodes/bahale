import React from "react"

const Gallery = () => {
	return (
		<div id='specialities' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skills and Specialty</h2>
				</div>
				<div className='row'>
					<div className='portfolio-items'>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href={'/mern'}
										title='M-E-R-N Stack Development'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>M-E-R-N and Full-Stack Development</h4>
										</div>
										<img
											src='img/portfolio/01-small.jpg'
											className='img-responsive'
											alt='M-E-R-N Stack Development'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href='/app-dev'
										title='App Development'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>App Development</h4>
										</div>
										<img
											src='img/portfolio/02-small.jpg'
											className='img-responsive'
											alt='App Development'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href='api'
										title='RESTful API development'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>RESTful API development</h4>
										</div>
										<img
											src='img/portfolio/03-small.jpg'
											className='img-responsive'
											alt='RESTful API development'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href='/dbms-dev'
										title='Database Management System Development'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>Database Management System Development</h4>
										</div>
										<img
											src='img/portfolio/04-small.jpg'
											className='img-responsive'
											alt='Database Management System Development'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href='/pen-test'
										title='Offensive Security'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>Offensive Security and Information Security Audit</h4>
										</div>
										<img
											src='img/portfolio/05-small.jpg'
											className='img-responsive'
											alt='Offensive Security'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{' '}
									<a
										href='blockchain'
										title='Blockchain Integration'
										data-lightbox-gallery='gallery1'
									>
										<div className='hover-text'>
											<h4>Blockchain Integration and Cryptography</h4>
										</div>
										<img
											src='img/portfolio/06-small.jpg'
											className='img-responsive'
											alt='Blockchain Integration'
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery;