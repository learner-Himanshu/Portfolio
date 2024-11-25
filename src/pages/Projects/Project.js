import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <div className='container project' id='project'  data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className="row text-center mt-5 mb-2 ">
                <div className="col-12 mt-5">
                    <h2 className='mt-2 mb-4 text-uppercase fw-bold'>Top Recent Projects</h2>
                    <hr />
                </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    <p className='fw-medium'> @ Here's my top 3 project with live links and source code.</p>
                </div>
            </div>
            <div className="card-container d-flex mt-5 mb-5">
                <div className="col-md-4 mt-4 mb-4 mx-4">
                    <div className="card rounded project-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVar3RSI6-GqBHnLNkYF9hI7v9if1VEF4aw&s" class="card-img-top" alt="Portfolioo-UI" />
                        <div className="card-body">
                            <h3 className="card-title fw-bold text-center">My Portfolio  Website</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <h5> <li className="list-group-item">React Js</li></h5>
                            <h5><li className="list-group-item">Node Js</li></h5>
                            <h5> <li className="list-group-item">Express Js</li></h5>
                            <h5> <li className="list-group-item">MongoDB</li></h5>
                        </ul>
                        <div className="card-body text-center card-body-content">
                            <button type="button" className="btn btn-outline-success rounded-pill px-5 fs-3 view-button "><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" className="card-link text-decoration-none text-white">View</a></button>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4 mb-4 mx-4">
                    <div className="card rounded project-card">
                        <img src="https://embedsocial.com/wp-content/uploads/2022/02/best-instagram-apps-for-creators.jpg" className="card-img-top text-decoration-none text-white" alt="Instagram-UI" />
                        <div className="card-body">
                            <h3 className="card-title fw-bold text-center">Instagram Web App</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <h5> <li className="list-group-item">React Js</li></h5>
                            <h5><li className="list-group-item">Node Js</li></h5>
                            <h5> <li className="list-group-item">Express Js</li></h5>
                            <h5> <li className="list-group-item">MongoDB</li></h5>
                        </ul>
                        <div className="card-body text-center card-body-content">
                            <button type="button" className="btn btn-outline-success rounded-pill px-5 fs-3 view-button "><a href="#" className="card-link text-decoration-none text-white">View</a></button>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4 mb-4 mx-4 ">
                    <div className="card rounded project-card">
                        <img src="https://www.lifewire.com/thmb/7NtGYAZ4_gSA-at_mXmUQz2uQ48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5Choosegender-e0a79723207a4e3283d2a159d7ad949b.jpg" class="card-img-top" alt="Pinterest-UI" />
                        <div className="card-body">
                            <h3 className="card-title fw-bold text-center">Pinterest Web App</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <h5> <li className="list-group-item">React Js</li></h5>
                            <h5><li className="list-group-item">Node Js</li></h5>
                            <h5> <li className="list-group-item">Express Js</li></h5>
                            <h5> <li className="list-group-item">MongoDB</li></h5>
                        </ul>
                        <div className="card-body text-center card-body-content">
                            <button type="button" className="btn btn-outline-success rounded-pill px-5 fs-3 view-button "><a href="#" className="card-link text-decoration-none text-white">View</a></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project