import React from 'react'
import  AboutImage from '../../assets/images/About-image.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about mt-5 mb-5 me-5" id='about' data-aos='fade-up' data-aos-duration='1000'  data-aos-anchor-placement="top-center">
                <div className="row mt-5 mb-4">
                    <div className="col-md-6  profile-img text-center">
                        <img src={AboutImage} className="img-fluid " alt="Me.." />
                    </div>
                    <div className="col-md-6 about-content">
                        <h1 className='mb-5 ms-0'>About Me </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipiciatis, quaerat nemo sequi fugit? SimiliqueLaudantium, in harum corrupti sunt ipsam quia cum perspiciatis, quaerat nemo sequi fugit? SimiliqueLaudantium, in harum corrupti sunt ipsam quia cum perspicin harum corrupti sunt ipsam quia cum perspiciatis, quaerat nemo sequi fugit? Similiquesapiente corrupti nobis placeat voluptate pariatur, hic enim cupiditate neque odit. Id unde excepturi neque consectetur laudantium odit, porro qui suscipit, earum facere soluta facilis illum optio nobis officiis? Expedita, temporibus veritatis amet natus distinctio vero inventore cupiditate officiis exercitationem sapiente totam nisi architecto, ipsa molestias similique quisquam esse tempora asperiores voluptates alias blanditiis! Fugiat odio recusandae repudiandae adipisci sunt alias tenetur maxime corporis mollitia, quam tempore illo est aspernatur natus veritatis? Saepe nemo repudiandae, itaque quisquam tenetur illum temporibus, quae non, corrupti recusandae libero voluptatem porro aspernatur minima quibusdam voluptas. Laudantium, in harum corrupti sunt ipsam quia cum perspiciatis, quaerat nemo sequi fugit? Similique, nam non?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About