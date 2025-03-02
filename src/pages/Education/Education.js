import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md'
import './Education.css'
import { useTheme } from '../../context/Themecontext';

const Education = () => {
  const [theme] = useTheme()
  return (
    <>
      <div className="education mt-4" id='education' data-aos="zoom-in-up"
    //  data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
        <div className="row text-center mb-2 ">
          <div className="col-12">
            <h2 className='mb-5 text-uppercase fw-bold'>Education Details</h2>
            <hr />
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work my-5"
            contentStyle={ theme ==='light' ? ({ background: 'white', color: 'black' ,border:'none'}) : ({ background: '#1d1d1d', color: '#ece9e1' } )}
            contentArrowStyle={theme === 'light'? { borderRight: '10px solid  gray' } : {borderRight:'10 px solid #ece9e1'}}
            date="2023 - 2026"
            iconStyle={theme === 'light' ? ({ background: '#138781', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' })}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title mt-2 mb-2">B-tech CSE</h3>
            <h4 className="vertical-timeline-element-subtitle mb-3 mt-2">Delhi College of technologies & Management  (palwal) Haryana  (2023-26)</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work my-5"
            contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' } )}
            contentArrowStyle={{ borderRight: '10px solid  gray' }}
            date="2021 - 2023"
            iconStyle={theme === 'light' ? ({ background: '#138781', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' })}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title mt-2 mb-2">Polytechnic Diploma of CSE</h3>
            <h4 className="vertical-timeline-element-subtitle mb-3 mt-2">Goverment Polytechnic Uttawar Palwal Haryana</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Education