import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInRight">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><strong>Hi I'm Yoga Swami Devanada</strong>, an amateur content creator, amateur podcaster, amateur blogger, amateur React Native developer, and amateur mobile developer, especially Android. Sometimes, I spend my leisure time making a video on my personal YouTube channel JusKangkung, a channel about gaming and technology, mostly gameplay video. I'm familiar with React Native, JavaScript, Java/Kotlin, AWS, and very interested in computer engineering, have a knowledge about computer parts, assembling and maintenance.</p>
                    <p>I have a Diploma in Telecommunication Engineering from State Polytechnic of Malang, in which I have developed my skills in telecommunication engineering, computer networking, and telecommunication networking. Also, I'm a participant on Digital Talent Scholarship 2019 that organized by Indonesia's Ministry of Communication and Information in Cloud Computing degree and got AWS Cloud Practitioner.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-1">
                    <span className="icon2"><i className="icon-phone3" /></span>
                    <h3>Mobile Development</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-2">
                    <span className="icon2"><i className="icon-video" /></span>
                    <h3>Content Creator</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-3">
                    <span className="icon2"><i className="icon-data" /></span>
                    <h3>Cloud Computing</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
