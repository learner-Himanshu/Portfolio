import React from 'react'
import "./TechStack.css"
import { Techstacklist } from '../utils/Techstacklist'

const TechStack = () => {

    return (
        <>
            <div className="container techstack" id='techstack' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div className="row text-center mt-5 mb-2 ">
                    <div className="col-12 mt-5">
                        <h2 className='mt-2 mb-4 text-uppercase fw-bold'>Technologies Stack</h2>
                        <hr />
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12">
                        <p> 👉 including programming Languages, Frameworks,Database, Front-end and Back-end Tools</p>
                    </div>
                </div>

                <div className="row mb-5 mt-5">

                    {Techstacklist.map(tech => (
                        <div className="col-md-4 " key={tech._id}>
                            <div className="card m-3 techstack-content">
                                <div className="card-content">
                                    <div className='card-body'>
                                        <div className="medeia d-flex justify-content-center">
                                            <div className="align-self-center">

                                                <tech.icon className='tech-icon' />
                                            </div>
                                            <div className="media-body">
                                                <h4>{tech.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default TechStack