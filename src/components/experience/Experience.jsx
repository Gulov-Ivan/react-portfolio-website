import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__design">
          <h3>UX/UI Design</h3>
          <div className="experience__content">
            <article className='experience__deteils' >
              <BsPatchCheckFill  className='experience__deteils-icon' />
              <div>
                <h4>Figma/FigJam</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>After Effects</h4>
                <small className='text-light'>Сonfident</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Сonfident</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>InVision</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>Zeplin</h4>
                <small className='text-light'>Amateur</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>Principle</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__deteils' >
              <BsPatchCheckFill className='experience__deteils-icon' />
              <div>
                <h4>Notion</h4>
                <small className='text-light'>Amateur</small>
              </div>
            </article>
          </div>
        </div>
        {/* {END OF DESIGN} */}

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Сonfident</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Сonfident</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>Gulp</h4>
                  <small className='text-light'>Amateur</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>jQuery</h4>
                  <small className='text-light'>Amateur</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Сonfident</small>
                </div>
              </article>

              <article className='experience__deteils' >
                <BsPatchCheckFill className='experience__deteils-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Amateur</small>
                </div>
              </article>
            </div>
            {/* {END OF FRONTEND} */}
        </div>
      </div>
    </section>
  )
}

export default Experience