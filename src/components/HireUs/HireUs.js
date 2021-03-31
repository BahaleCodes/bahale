import React, { Component } from 'react';

import './HireUs.css';

class HireUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quote: {
                name: props.name,
                email: props.email,
                message: props.message,
                systemType: props.systemType,
                loading: false
            }
        }
    }

    handleName = (e) => {
        var quote = this.state.quote;
        quote.name = e.target.value;
    }
    handleEmail = (e) => {
        var quote = this.state.quote;
        quote.email = e.target.value;
    }
    handleMessage = (e) => {
        var quote = this.state.quote;
        quote.message = e.target.value;
    }
    handleDivine = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Full-Stack System Application";
    }
    handleDynamic = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Dynamic Hybrid Application";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        var nm = this.state.quote.name;
        var eml = this.state.quote.email;
        var mess = "Desired System: "+this.state.quote.systemType+", specs: "+this.state.quote.message;

        console.log(nm+"..."+eml+"..."+mess);
    }
    

    render() {
        return (
            <div id="hire-us" className='text-center'>
                <div className='container'>
                    <div className="section-title">
                        <h2>Give Bahale the job</h2>
                    </div>
                    <div className="section-title">
                        <h1>Web Development</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Basic</h1>
                                </div>
                                <ul>
                                    <h4>Static Website</h4>
                                    <li>Basic responsive website</li>
                                    <li>Hosted as a Heroku application</li>
                                    <li>Limited Functionality</li>
                                    <li>Functioning with Static data</li>
                                    <li>Developed with ReactJS</li>
                                    <li>Once off development no maintenance and support contract</li>
                                    <h4>BEST FOR: CV/Resume/Personal Websites</h4>
                                </ul>
                                <h1>From: R2000</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Professional</h1>
                                </div>
                                <ul>
                                    <h4>Dynamic Website</h4>
                                    <li>responsive website design</li>
                                    <li>Hosted on Heroku / Digital Ocean</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Limited to essential business Functionalities</li>
                                    <li>Functioning with Static JSON data</li>
                                    <li>Developed with ReactJS</li>
                                    <li>1 year maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <h4>BEST FOR: Company Websites</h4>
                                </ul>
                                <h1>From: R4000</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Royalty</h1>
                                </div>
                                <ul>
                                    <h4>Full-Stack Web Application</h4>
                                    <li>Fully responsive website design</li>
                                    <li>Hosted on Heroku or Digital Ocean</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Static JSON data</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li>Free SSL certificate</li>
                                    <li>Free SEO</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <h4>BEST FOR: Web Applications, basic E-commerce site, Photography sites, and system E-learning sites</h4>
                                </ul>
                                <h1>From: R8000</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Divine</h1>
                                </div>
                                <ul>
                                    <h4>Full-Stack System Application</h4>
                                    <li>Fully responsive website design</li>
                                    <li>Animated design</li>
                                    <li>Hosted on a dedicated could server</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Comes with business emails</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Dynamic JSON data</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>Mobile Application for iOS and Android to for mobile use</li>
                                    <li>Progressive Web Application</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li></li>
                                    <li>Free SSL certificate</li>
                                    <li>Free SEO</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <h4>BEST FOR: Service systems, advance E-commerce, Social media platforms</h4>
                                </ul>
                                {/* <button className='btn btn-custom btn-lg'>Get A Quote</button> */}

                                <a href='#quote' value="Full-Stack System Application" className='page-scroll' onClick={this.handleDivine}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="section-title">
                        <h1>Mobile Application Development</h1>
                    </div>

                    <div className="col-md-6 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Basic</h1>
                                </div>
                                <ul>
                                    <h4>Basic static Application</h4>
                                    <li>Either for Android or iOS</li>
                                    <li>Fully responsive design</li>
                                    <li>Hosted on Firebase</li>
                                    <li>Limited business Functionalities</li>
                                    <li>Functioning with Static data</li>
                                    <li>Utilizing custom standard Authentication if needed</li>
                                    <li>6 month maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <h4>BEST FOR: Basic E-commerce</h4>
                                </ul>
                                <h1>From: R6000</h1>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Dynamic</h1>
                                </div>
                                <ul>
                                    <h4>Dynamic Hybrid Application</h4>
                                    <li>Functional on iOs and Android</li>
                                    <li>Deployed on Play Store, App Gallery and App store</li>
                                    <li>Fully responsive and animated design</li>
                                    <li>Hosted on Firebase</li>
                                    <li>Comes with Professional website</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Dynamic JSON data</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <h4>BEST FOR: Service systems, advance E-commerce, Social media platforms</h4>
                                </ul>
                                <a href='#quote' className='page-scroll' value={"Dynamic Hybrid Application"} onClick={this.handleDynamic}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div id="quote" className='container'>
                        <div className="section-title">
                            <h2>Lets Get you a Quote</h2>
                        </div>
                        <form name='sentMessage' onSubmit={this.handleSubmit} validate >
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        className='form-control'
                                        placeholder='Name'
                                        required
                                        onChange={this.handleName.bind(this)}
                                    />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        className='form-control'
                                        placeholder='Email'
                                        required
                                        onChange={this.handleEmail.bind(this)}
                                    />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                        </div>
                        <h4>Please tell us specifically what you want us to develop for you.</h4>
                        <h4>Please start by stating what type of system you want. Use the names that are used above in the price list and if it is not there use the one you know</h4>
                        <h4>Be as detail as possible</h4>
                        <div className='form-group'>
                            <textarea
                                name='message'
                                id='message'
                                className='form-control'
                                rows='4'
                                placeholder='Message'
                                required
                                onChange={this.handleMessage.bind(this)}
                            ></textarea>
                            <p className='help-block text-danger'></p>
                        </div>
                        <div id='success'></div>
                            <button type='submit' className='btn btn-custom btn-lg'>
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default HireUs;