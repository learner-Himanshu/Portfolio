import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md'
import './Workexp.css'
import { useTheme } from '../../context/Themecontext';

const Workexp = () => {
  const [theme] = useTheme()
  return (
    <>
      <div className="work" id='workexperience' data-aos='zoom-in-up' data-aos-duration='3000'>
        <div className="container work-exp">
          <div className="row text-center mt-5 mb-2 ">
            <div className="col-12 mt-5">
              <h2 className='mt-2 mb-4 text-uppercase fw-bold'>Work Experience</h2>
              <hr />
            </div>
          </div>
          <VerticalTimeline lineColor='#1e1e2c'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' } )}
              contentArrowStyle={{ borderRight: '15px solid  white' }}
              date="Nov - 2023 -  Feb- - 2024"
              iconStyle={theme === 'light' ? ({ background: '#138781', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' })}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title fw-bold mt-2 mb-2">Consultant</h3>
              <h4 className="vertical-timeline-element-subtitle mb-3 mt-2">Globallogic - A Hitachi Group of Company Gurugram </h4>

              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={theme ==='light' ? ({ background: 'white', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' } )}
              contentArrowStyle={{ borderRight: '10px solid  white' }}
              date="Jan - 2023 - Nov - 2023"
              iconStyle={theme === 'light' ? ({ background: '#138781', color: 'black' }) : ({ background: '#1d1d1d', color: '#ece9e1' })}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title fw-bold mt-2 mb-2">Full Stack Training</h3>
              <h4 className="vertical-timeline-element-subtitle mb-3 mt-2">OneTick CDC Faridabad</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

    </>
  )
}

export default Workexp