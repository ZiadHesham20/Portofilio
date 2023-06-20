import React from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';




export default function Home() {
  
  const myNumber = '01126553297'
  
  const whoIam = useRef(null);
  const education= useRef(null);
  const skills = useRef(null);
  const experience = useRef(null);
  const serve = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = whoIam.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const eduTop = education.current.getBoundingClientRect().top;
      const skillTop = skills.current.getBoundingClientRect().top;
      const exTop = experience.current.getBoundingClientRect().top;
      const serveTop = serve.current.getBoundingClientRect().top;





      if (top < windowHeight * 0.5) {
        $('.whorow').removeClass("opacity-0")
        $('.whorow').addClass("animate__animated");
    $('.whorow').addClass("animate__fadeInLeft");
      }
      if(eduTop < windowHeight * 0.5){
        $('.edu').removeClass("opacity-0")
      $('.edu').addClass("animate__animated");
  $('.edu').addClass("animate__fadeInRight");
      }
      if(skillTop < windowHeight * 0.5){
        $('.skill').removeClass("opacity-0")
      $('.skill').addClass("animate__animated");
  $('.skill').addClass("animate__fadeInUp");
      }
      if(exTop < windowHeight * 0.5){
        $('.ex').removeClass("opacity-0")
      $('.ex').addClass("animate__animated");
  $('.ex').addClass("animate__fadeInLeft");
      }
      if(serveTop < windowHeight * 0.5){
        $('.serve').removeClass("opacity-0")
      $('.serve').addClass("animate__animated");
  $('.serve').addClass("animate__fadeInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return <>
    {/*Hero section*/}
    <div className='container-fluid d-flex align-items-center hero vh-100 overflow-hidden' id='Home'>
    <div  className='homeicons align-self-end p-4'>
          <Link to={'https://www.linkedin.com/in/ziad-hesham-354768237'}><i className="fa-brands icons hicon fa-linkedin me-4 ms-2 fa-3x"></i></Link>
          <Link to={'https://github.com/ZiadHesham20/ZiadHesham20.git'}><i className="fa-brands icons hicon fa-github me-4 fa-3x"></i></Link>
        </div>
     
      <div className='row w-100'>
        <div className='col-lg-3 col-md-4 col-6 colofimage2'>
          <div>
            <img src="./portofilio(2).jpg" className='w-100 rounded-circle' alt="portofolio" />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 mt-5 ps-lg-0 ps-5 ms-auto text-center'>
          <div>
            <h1 className='display-1  ziad2 finalcolor thirdcolor bg-transparent'>ZIAD HESHAM</h1>
            <h2 className='mb-4 finalcolor bg-transparent'><TypewriterComponent
              options={{
                strings: ['Front-End Developer', 'Freelancer'],
                autoStart: true,
                loop: true,
              }}

            /></h2>
            <div className='d-flex justify-content-center'>
              <a href="./ZIAD-CV.pdf" download>
                <button className='btn btn-outline-secondary  rounded-5 d-flex justify-content-center align-items-center'>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='thechange' className='my-5 d-flex align-items-center justify-content-center'>
      <div className='dot'></div>
      <div className='dot mx-4'></div>
      <div className='divider rounded-5'></div>
    </div>
    {/*who I am section*/}
    <div className='container my-5 overflow-hidden' id='About'>
      <div ref={whoIam} className="row flex-row-reverse">
        <div className='col-lg-6'>
          <div>
            <img src="./undraw_hello_re_3evm 1.svg" className='w-100' alt="" />
          </div>
        </div>
        <div   className='col-lg-6 d-flex align-items-center'>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Who I am</h2>
            <p className='opacity-0 whorow  thirdcolor bg-transparent fs-5'>My name is Ziad Hesham and I'm 21 years old.I'm computer science student and Front-End developer.I earned a certificate for completing Front-End course at Route and I'm always looking for new ways to learn and grow.</p>
          </div>
        </div>
      </div>

    </div>
    {/*Education section*/}
    <div className='container p-4 overflow-hidden'>
      <div ref={education} className='row  align-items-center'>
        <div className='col-6  d-lg-flex d-none justify-content-start align-items-center'>
          <div>
            <img  src="./undraw_certificate_re_yadi2.svg" className='w-100' alt="" />
          </div>
        </div>
        <div  className=' col-lg-6 '>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Education</h2>
            <div className='row gy-3 edu opacity-0'>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div>
                  <p className='fw-bold thirdcolor bg-transparent'>2017-2019</p>
                  <div className='d-flex align-items-center'>
                    <i className="fa-solid diffwhite fa-graduation-cap fa-2x me-2  maincoloronly rounded-circle p-3"></i>
                    <h4 className='thirdcolor bg-transparent'>High school</h4>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div>
                  <p className='fw-bold thirdcolor bg-transparent'>2020-2024</p>
                  <div className='d-flex align-items-center'>
                    <i className="fa-solid fa-graduation-cap diffwhite fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                    <div>
                      <h4 className='thirdcolor bg-transparent'>Bachelor of Computer Science</h4>
                      <p className='thirdcolor bg-transparent'>Higher Technological Institute</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*SKILLS section*/}
    <div className='container my-5 overflow-hidden'>
      <div ref={skills} className='text-center skill opacity-0'>
        <h2 className=' display-4 fw-bold my-5 bg-transparent thirdcolor'>Skills</h2>
        <div className='row  justify-content-center'>
          <div className="col-md-2">
            <img src="./html.svg" className='projchange' alt="html" />
            <p>HTML</p>
          </div>
          <div className="col-md-2">
            <img src="./css.svg" className='projchange' alt="css" />
            <p>CSS</p>
          </div>
          <div className="col-md-2">
            <img src="./bootstrap.svg" className='projchange' alt="bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="col-md-2">
            <img src="./javascript.svg" className='projchange' alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div className="col-md-2">
            <img src="./react.svg" className='projchange' alt="react" />
            <p>ReactJs & Redux</p>
          </div>
        </div>
      </div>
    </div>
    {/*Experience section*/}
    <div className='container p-4'>
      <div ref={experience} className='row align-items-center'>
        <div className='col-lg-6 '>
          <div>
            <h2 className='display-4 fw-bold thirdcolor bg-transparent'>Experience</h2>
            <div className='row gy-3 ex opacity-0'>
              <div className='col-12 maincolorsubtle rounded-4 p-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite maincoloronly fa-briefcase fa-2x me-2 rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Front-End Developer</h4>
                    <p className='thirdcolor bg-transparent'>Freelancer</p>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-4 ps-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite fa-briefcase fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Certificate For Completing Front-End Course</h4>
                    <p className='thirdcolor bg-transparent'>Route</p>
                  </div>
                </div>
              </div>
              <div className='col-12 maincolorsubtle rounded-4 p-4 ps-3'>
                <div className='d-flex align-items-center'>
                  <i className="fa-solid diffwhite fa-briefcase fa-2x me-2 maincoloronly rounded-circle p-3"></i>
                  <div>
                    <h4 className='thirdcolor bg-transparent'>Certificate For Data Challenger Track</h4>
                    <p className='thirdcolor bg-transparent'>Udacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 d-none d-lg-flex justify-content-start align-items-center'>
          <div>
            <img src="./undraw_programming_re_kg9v.svg" className='w-100' alt="experience" />
          </div>
        </div>
      </div>
    </div>
    {/*Projects section*/}
    <div className='container my-5 p-4' id='Projects'>
      <div className='text-center'>
        <h2 className=' display-4 fw-bold my-5 thirdcolor bg-transparent'>Projects</h2>
        <div className="ag-offer-block">
          <div className="ag-format-container">
            <ul className="ag-offer_list">
            <li className="ag-offer_item">
                <Link to={'https://entertainment-theatre.netlify.app'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./movies.svg" className='w-100' alt="Entertainment Theatre" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h5 className='text-center thirdcolor bg-transparent'>Entertainment Theatre</h5>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-react"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                     This website shows you the trending movies and the top rated movies of all time
                    </p>
                  </div>
                </Link>
              </li>
              <li className="ag-offer_item">
                <Link to={'https://games-2-know-v2.netlify.app'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./joystick.svg" className='w-100' alt="Games2Know" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h4 className='text-center thirdcolor bg-transparent'>Games 2 know</h4>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-react"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                      This website shows you the latest games that has been released and thier ratings
                    </p>
                  </div>
                </Link>
              </li>
              <li className="ag-offer_item">
                <Link to={'https://tasty-food-v1.netlify.app'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./tasty food.svg" className='w-100' alt="tasty food" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h4 className='text-center thirdcolor bg-transparent'>Tasty Food</h4>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                      This website about restaurant that serves a delicious food 
                    </p>
                  </div>
                </Link>
              </li>          
              <li className="ag-offer_item">
                <Link to={'https://toxic-vampires.netlify.app'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./art.svg" className='w-100' alt="Toxic Vampire" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h4 className='text-center thirdcolor bg-transparent'>Toxic Vampires</h4>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-react"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                      This website shows the artwork of Nodisope and Alioartworks
                    </p>
                  </div>
                </Link>
              </li>
              <li className="ag-offer_item">
                <Link to={'https://football-life.netlify.app'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./football.svg" className='w-100' alt="Football Life" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h4 className='text-center thirdcolor bg-transparent'>Football Life</h4>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-react"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                    This website is about football news and matchdays and the latest transfers
                    </p>
                  </div>
                </Link>
              </li>
              <li className="ag-offer_item">
                <Link to={'https://weather-condition-2.netlify.app/'} target='_blank'>
                  <div className="ag-offer_visible-item">
                    <div className="ag-offer_img-box">
                      <img src="./weather.svg" className='w-100' alt="Weather app" />
                    </div>
                    <div className="ag-offer_title p-3">
                      <h4 className='text-center thirdcolor bg-transparent'>Weather App</h4>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-html5"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-css3-alt"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-js"></i>
                      <i className="fa-brands maincolor bg-transparent mx-1 fa-2x fa-react"></i>
                    </div>
                  </div>
                  <div className="ag-offer_hidden-item">
                    <p className="ag-offer_text">
                      This website shows the temperature at any city
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    {/*Services section*/}
    <div className='container my-5' id='Services'>
      <div ref={serve} className='text-center'>
        <h2 className=' display-4 fw-bold thirdcolor bg-transparent'>Services</h2>
        <div className='row serve opacity-0 gy-5 p-5 justify-content-around'>
          <div className="col-md-3 p-3 rounded-4 ">
            <img src="./code.svg" className='w-75' alt="Responsive" />
            <h3 className='fw-bold text-center mt-4'>Web Application Development</h3>
          </div>
          <div className="col-md-3 p-3 rounded-4">
            <img src="./Responsive.svg" className='w-75' alt="Responsive" />
            <h3 className='fw-bold text-center mt-4'>Web Responsive</h3>
          </div>
        </div>
      </div>
    </div>
    {/*Footer*/}
    <div className='container-fluid maincolor p-5 '>
      <div className="row justify-content-center">
        <div className='col-12'>
          <div className='text-center finalcolor'>
            <h2>LET`S STAY IN TOUCH</h2>
          </div>
        </div>
        <div className='col-12 mb-3 d-flex justify-content-center'>
          <input type="text" className='form-control w-50 rounded-end-0' placeholder='Message' />
          <button className=' btn btn-secondary rounded-start-0
        . text-white '>Contact Me</button>
        </div>
        <div className='col-2 d-flex align-items-center justify-content-around'>
          <Link to={'https://www.linkedin.com/in/ziad-hesham-354768237'}><i className="fa-brands icons mx-2 finalcolor mx-lg-0  fa-2x fa-linkedin"></i></Link>
          <Link to={'https://github.com/ZiadHesham20/ZiadHesham20.git'}><i className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-github"></i></Link>
          <Link to={'https://www.facebook.com/ziad.hesham.1441'}><i className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-facebook"></i></Link>
          <i onClick={()=>{navigator.clipboard.writeText(myNumber)
    $('.copied').removeClass('d-none').addClass('animate__animated').addClass('animate__fadeIn').addClass('animate__fadeOut')}} className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-whatsapp"></i>
        </div>
        <p className='text-white text-center copied d-none'>Copied</p>
      </div>
    </div>
    {/*Back way up button */}
    <a href='#Home'>
    <div className='toupbutton opacity-0 rounded-circle py-2 px-3'>
        <div>
        <i class="fa-solid finalcolor fa-arrow-up"></i>
      </div>
    </div>
    </a>
     </>
}
