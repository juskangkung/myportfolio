import React, { Component } from 'react'
// import axios from 'axios'

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  items: []
		};
	}

	async componentDidMount() {
		// const results = await axios.get('https://api.github.com/users/juskangkung/starred')
		// this.setState({ items: results })
		fetch("https://api.github.com/users/juskangkung/starred")
		.then(response => response.json())
		.then(data =>
			// console.log(data)
			this.setState({ items: data })
		)
		.catch(error => console.log('parsing failed', error))
		// console.log(this.state.items)
	}

  render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects (In Progress)</h2>
							</div>
						</div>
						<div className="row">
							{console.log("TEST")}
							{console.log(this.state.items.length)}
							{this.state.items.length > 0 ? this.state.items.map(item => {
								const {id, name, description, html_url} = item;
								return (
									<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft" key={id}>
										<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href={html_url}>{name}</a></h3>
													<span>{description}</span>
													<p className="icon">
														{/* <span><a href={html_url}><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
													</p>
												</div>
											</div>
										</div>
									</div>
								);
							}): null }
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="www.devanada.com"><i className="icon-share3" /></a></span>
												<span><a href="www.devanada.com"><i className="icon-eye" /> 100</a></span>
												<span><a href="www.devanada.com"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
									{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
										<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Work 02</a></h3>
													<span>Animation</span>
													<p className="icon">
														<span><a href="#"><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
										<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Work 03</a></h3>
													<span>Content</span>
													<p className="icon">
														<span><a href="#"><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
										<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Work 04</a></h3>
													<span>Application</span>
													<p className="icon">
														<span><a href="#"><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
										<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Work 05</a></h3>
													<span>Graphic, Logo</span>
													<p className="icon">
														<span><a href="#"><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
										<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
											<div className="desc">
												<div className="con">
													<h3><a href="work.html">Work 06</a></h3>
													<span>Web Design</span>
													<p className="icon">
														<span><a href="#"><i className="icon-share3" /></a></span>
														<span><a href="#"><i className="icon-eye" /> 100</a></span>
														<span><a href="#"><i className="icon-heart" /> 49</a></span>
													</p>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								{/* <div className="row">
									<div className="col-md-12 animate-box">
										<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
									</div>
								</div> */}
							</div>
						</section>
			</div>
		)
  }
}
