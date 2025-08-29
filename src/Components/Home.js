import React from 'react'
import bannerimg1 from '../Pics/Group 1000008464.svg'
import './Home.css'
import cardimg1 from '../Pics/Group 1000002521.svg'
import cardimg2 from '../Pics/Group 48096180.svg'
import cardimg3 from '../Pics/1-Gujarkhan 3.svg'
import visionpic1 from '../Pics/image 2393.webp'
import pic1 from '../Pics/image 2394 (1).webp'
import pic2 from '../Pics/image 2395 (1).svg'
import pic3 from '../Pics/image 2396 (1).webp'
import pic4 from '../Pics/image 2397 (1).webp'
import pic5 from '../Pics/image 2398 (1).webp'
import pic6 from '../Pics/image 2399 (1).webp'
import pic7 from '../Pics/image 2400 (1).webp'
import pic8 from '../Pics/image 2401 (1).webp'
import topagencypic from '../Pics/image 254 (1).svg'
import formpic1 from '../Pics/6488126489ef2e3ed3154507_gray-padded-chaise-couch-beside-window 1.webp'




function Home() {
    return (
        <div>
            <div className='container-fluid home-banner-div1' id='home'>
                <div className='container'>
                    <div>
                        <h1 className='home-banner-text1'>Luxury real Estate
                            & Construction </h1>
                        <p className='home-banner-text2'>We are a real estate agency that will help you find a house <br className='d-lg-block d-none'></br> that will meet all your expectations.</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <a href="tel:+923351216000" ><div className='home-banner-btn1'>+92 335 1216000</div></a>
                    </div>
                </div>
            </div>



            <div className='container-fluid home-about-div1' id='about'>
                <div className='container'>
                    <div className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <path d="M18.5001 18.3333L18.568 18.0927L18.112 17.9641L18.2631 18.4131L18.5001 18.3333ZM28.7124 15.4742L28.8928 15.6473L28.945 15.593L28.9584 15.5188L28.7124 15.4742ZM15.4766 28.4117L15.3164 28.2197L15.0825 28.4148L15.3195 28.6062L15.4766 28.4117ZM18.5001 38.5494L18.2592 38.4826L18.1447 38.8956L18.5605 38.792L18.5001 38.5494ZM28.7111 41.6413L28.9566 41.5942L28.9434 41.5256L28.8966 41.4737L28.7111 41.6413ZM28.7208 41.6915L28.4753 41.7387L28.5703 42.2327L28.9067 41.8586L28.7208 41.6915ZM28.7385 41.6717L28.9243 41.5044L28.7385 41.2982L28.5528 41.5044L28.7385 41.6717ZM28.7563 41.6915L28.5704 41.8586L28.9067 42.2327L29.0018 41.7387L28.7563 41.6915ZM28.7659 41.6413L28.5804 41.4737L28.5336 41.5256L28.5204 41.5942L28.7659 41.6413ZM38.977 38.5494L38.9165 38.792L39.3323 38.8956L39.2179 38.4826L38.977 38.5494ZM42.0005 28.4117L42.1576 28.6062L42.3945 28.4148L42.1606 28.2197L42.0005 28.4117ZM38.977 18.3333L39.2139 18.4131L39.365 17.9641L38.9091 18.0927L38.977 18.3333ZM28.7646 15.4742L28.5186 15.5188L28.5321 15.593L28.5843 15.6473L28.7646 15.4742ZM28.7563 15.4284L29.0023 15.3837L28.9146 14.9012L28.5756 15.2556L28.7563 15.4284ZM28.7385 15.447L28.558 15.6199L28.7385 15.8084L28.9191 15.6199L28.7385 15.447ZM28.7208 15.4284L28.9014 15.2556L28.5625 14.9012L28.4748 15.3837L28.7208 15.4284ZM18.4322 18.574C20.8015 19.2423 22.5832 19.4006 24.2017 18.9306C25.8183 18.4611 27.233 17.3761 28.8928 15.6473L28.5321 15.3011C26.8911 17.0103 25.551 18.0181 24.0623 18.4504C22.5754 18.8822 20.9012 18.751 18.568 18.0927L18.4322 18.574ZM15.6367 28.6037C17.6591 26.9172 18.8401 25.4794 19.3031 23.8667C19.7665 22.2525 19.4967 20.5111 18.737 18.2536L18.2631 18.4131C19.0136 20.6431 19.243 22.264 18.8225 23.7287C18.4016 25.1948 17.3157 26.5525 15.3164 28.2197L15.6367 28.6037ZM18.741 38.6162C19.4628 36.0119 19.6075 34.1347 19.0923 32.5348C18.5767 30.9338 17.4144 29.6555 15.6336 28.2172L15.3195 28.6062C17.0797 30.0279 18.1467 31.2297 18.6163 32.6881C19.0864 34.1477 18.9724 35.9094 18.2592 38.4826L18.741 38.6162ZM28.8966 41.4737C27.2028 39.5991 25.7521 38.5021 24.1241 38.0334C22.4976 37.5651 20.733 37.7355 18.4396 38.3068L18.5605 38.792C20.828 38.2271 22.4877 38.0826 23.9858 38.5139C25.4824 38.9448 26.8568 39.9619 28.5256 41.8089L28.8966 41.4737ZM28.4656 41.6885C28.4688 41.7052 28.472 41.722 28.4753 41.7387L28.9662 41.6442C28.963 41.6275 28.9598 41.6108 28.9566 41.5942L28.4656 41.6885ZM28.9067 41.8586C28.9125 41.8521 28.9184 41.8456 28.9243 41.839L28.5528 41.5044C28.5468 41.511 28.5408 41.5177 28.5348 41.5243L28.9067 41.8586ZM28.9422 41.5243C28.9362 41.5177 28.9302 41.511 28.9243 41.5044L28.5528 41.839C28.5587 41.8456 28.5645 41.8521 28.5704 41.8586L28.9422 41.5243ZM28.5204 41.5942C28.5172 41.6108 28.514 41.6275 28.5108 41.6442L29.0018 41.7387C29.005 41.722 29.0082 41.7052 29.0115 41.6885L28.5204 41.5942ZM28.9514 41.8089C30.6203 39.9619 31.9946 38.9448 33.4913 38.5139C34.9894 38.0826 36.649 38.2271 38.9165 38.792L39.0374 38.3068C36.744 37.7355 34.9795 37.5651 33.3529 38.0334C31.7249 38.5021 30.2742 39.5991 28.5804 41.4737L28.9514 41.8089ZM39.2179 38.4826C38.5047 35.9094 38.3907 34.1477 38.8607 32.6881C39.3304 31.2297 40.3974 30.0279 42.1576 28.6062L41.8434 28.2172C40.0627 29.6555 38.9004 30.9338 38.3848 32.5348C37.8696 34.1347 38.0143 36.0119 38.7361 38.6162L39.2179 38.4826ZM42.1606 28.2197C40.1613 26.5525 39.0755 25.1948 38.6546 23.7287C38.2341 22.264 38.4635 20.6431 39.2139 18.4131L38.74 18.2536C37.9803 20.5111 37.7106 22.2525 38.174 23.8667C38.637 25.4794 39.818 26.9172 41.8404 28.6037L42.1606 28.2197ZM38.9091 18.0927C36.5758 18.751 34.9016 18.8822 33.4148 18.4504C31.926 18.0181 30.5859 17.0103 28.945 15.3011L28.5843 15.6473C30.244 17.3761 31.6588 18.4611 33.2754 18.9306C34.8939 19.4006 36.6755 19.2423 39.0449 18.574L38.9091 18.0927ZM28.5103 15.4731C28.5131 15.4884 28.5159 15.5036 28.5186 15.5188L29.0106 15.4295C29.0078 15.4143 29.0051 15.399 29.0023 15.3837L28.5103 15.4731ZM28.9191 15.6199C28.925 15.6137 28.931 15.6074 28.937 15.6012L28.5756 15.2556C28.5697 15.2618 28.5639 15.2679 28.558 15.2741L28.9191 15.6199ZM28.9191 15.2741C28.9132 15.2679 28.9073 15.2618 28.9014 15.2556L28.5401 15.6012C28.5461 15.6075 28.552 15.6137 28.558 15.6199L28.9191 15.2741ZM28.4748 15.3837C28.472 15.399 28.4692 15.4143 28.4665 15.4295L28.9584 15.5188C28.9612 15.5036 28.9639 15.4884 28.9667 15.4731L28.4748 15.3837Z" fill="#FEAB02" />
                            <path d="M1 20.5534V6.10082H6.05753V1H20.4823C24.0819 1 27 3.91808 27 7.51771C27 11.1173 24.0819 14.0354 20.4823 14.0354H18.8523C16.1134 14.0354 13.8932 11.8151 13.8932 9.07629H20.4547C21.2764 9.07629 21.9425 8.41021 21.9425 7.58856C21.9425 6.7669 21.2764 6.10082 20.4547 6.10082H11.2575V11.1308H6.05753V20.3681C6.05753 21.1746 6.71132 21.8283 7.51781 21.8283C8.3243 21.8283 8.97808 21.1746 8.97808 20.3681V13.8229H9.03842C11.7196 13.8229 13.8932 15.9964 13.8932 18.6776V20.5534C13.8932 24.1138 11.0069 27 7.44658 27C3.88623 27 1 24.1138 1 20.5534Z" stroke="#FEAB02" stroke-width="0.5" />
                            <path d="M1 36.4466V50.8992H6.05753V56H20.4823C24.0819 56 27 53.0819 27 49.4823C27 45.8827 24.0819 42.9646 20.4823 42.9646H18.8523C16.1134 42.9646 13.8932 45.1849 13.8932 47.9237H20.4547C21.2764 47.9237 21.9425 48.5898 21.9425 49.4114C21.9425 50.2331 21.2764 50.8992 20.4547 50.8992H11.2575V45.8692H6.05753V36.6319C6.05753 35.8254 6.71132 35.1717 7.51781 35.1717C8.3243 35.1717 8.97808 35.8254 8.97808 36.6319V43.1771H9.03842C11.7196 43.1771 13.8932 41.0036 13.8932 38.3224V36.4466C13.8932 32.8862 11.0069 30 7.44658 30C3.88623 30 1 32.8862 1 36.4466Z" stroke="#FEAB02" stroke-width="0.5" />
                            <path d="M56 20.5534V6.10082H50.9425V1H36.5177C32.9181 1 30 3.91808 30 7.51771C30 11.1173 32.9181 14.0354 36.5177 14.0354H38.1477C40.8866 14.0354 43.1068 11.8151 43.1068 9.07629H36.5453C35.7236 9.07629 35.0575 8.41021 35.0575 7.58856C35.0575 6.7669 35.7236 6.10082 36.5453 6.10082H45.7425V11.1308H50.9425V20.3681C50.9425 21.1746 50.2887 21.8283 49.4822 21.8283C48.6757 21.8283 48.0219 21.1746 48.0219 20.3681V13.8229H47.9616C45.2804 13.8229 43.1068 15.9964 43.1068 18.6776V20.5534C43.1068 24.1138 45.9931 27 49.5534 27C53.1138 27 56 24.1138 56 20.5534Z" stroke="#FEAB02" stroke-width="0.5" />
                            <path d="M56 36.4466V50.8992H50.9425V56H36.5177C32.9181 56 30 53.0819 30 49.4823C30 45.8827 32.9181 42.9646 36.5177 42.9646H38.1477C40.8866 42.9646 43.1068 45.1849 43.1068 47.9237H36.5453C35.7236 47.9237 35.0575 48.5898 35.0575 49.4114C35.0575 50.2331 35.7236 50.8992 36.5453 50.8992H45.7425V45.8692H50.9425V36.6319C50.9425 35.8254 50.2887 35.1717 49.4822 35.1717C48.6757 35.1717 48.0219 35.8254 48.0219 36.6319V43.1771H47.9616C45.2804 43.1771 43.1068 41.0036 43.1068 38.3224V36.4466C43.1068 32.8862 45.9931 30 49.5534 30C53.1138 30 56 32.8862 56 36.4466Z" stroke="#FEAB02" stroke-width="0.5" />
                            <rect x="24" y="24" width="4" height="4" fill="#FEAB02" />
                            <rect x="24" y="29" width="4" height="4" fill="#FEAB02" />
                            <rect x="29" y="24" width="4" height="4" fill="#FEAB02" />
                            <rect x="29" y="29" width="4" height="4" fill="#FEAB02" />
                        </svg>
                        <h1 className='home-about-text1'>WHO WE ARE</h1>
                        <h1 className='home-about-text2'>Top-tier Agency</h1>
                        <p className='home-about-text3'>Master Developer is a growing real estate company in Jhelum Gujrat and Gujjar Khan Pakistan. It is among the topmost trustful realtors in the market. the experience of 10 years in the real estate industry. Our experience always helps the company to grow and offer the best services.</p>
                        <p className='home-about-text4'>Our realtors at the Master Developers platform ensure that each client’s needs are catered in the best manner. We are offering different residential, commercial, as well as in multi-purpose properties.</p>
                    </div>

                    <div className='home-about-card-div0 container-fluid'>
                        <div>
                            <img src={topagencypic} className='img-fluid' alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-fluid home-vision-div1'>
                <div className='container'>
                    <div>
                        <h1 className='home-vision-text1'>Why Choose Us</h1>
                        <h1 className='home-vision-text2'>Your Vision. Our Priority</h1>
                        <p className='home-vision-text3'>We hold four core values that define our approach <br className='d-lg-block d-none' /> to serving our esteemed clients</p>
                    </div>

                    <div>
                        <div className='row  home-vision-div2'>
                            <div className='col-md-6 col-12 d-flex justify-content-center align-items-xl-start align-items-center'>
                                <div  className='' >
                                    <img src={visionpic1} className='img-fluid mx-auto' alt="" />
                                </div>
                            </div>
                            <div className='col-md-6 col-12 d-flex align-items-center '>
                                <div className=' mt-md-0 mt-5'>
                                    <div className='ml-md-3 ml-0 d-flex'>
                                        <div>
                                            <h1 className='home-price1-text01'>01</h1>
                                        </div>
                                        <div className='home-price-text-div1'>
                                            <h1 className='home-price-text1'>The best prices</h1>
                                            <p className='home-price-text2'>Thinking Out Of The Box To Create Innovation Has Been An All-Time Ambition And Practice Of Master’s Developer. Incorporating Uniqueness In Vitality And Convenience In Your Daily Life Functions And Lifestyle Is Our USP.</p>
                                        </div>
                                    </div>

                                    <div className='home-price-line1'></div>
                                    <div className='ml-md-3 ml-0 d-flex'>
                                        <div>
                                            <h1 className='home-price1-text02'>02</h1>
                                        </div>
                                        <div className='home-price-text-div1'>
                                            <h1 className='home-price-text3'>Quality Service</h1>
                                            <p className='home-price-text2'>While Other Companies in the Business Boast About Achieving High-Quality Project Completion On Time, Master Developer Consistently Delivers What Believes In - Timely, Top-Notch Quality</p>
                                        </div>
                                    </div>
                                    <div className='home-price-line1'></div>
                                    <div className='ml-md-3 ml-0 d-flex'>
                                        <div>
                                            <h1 className='home-price1-text02'>03</h1>
                                        </div>
                                        <div className='home-price-text-div1'>
                                            <h1 className='home-price-text3'>Certified Agency</h1>
                                            <p className='home-price-text2'>Master Developer Boast An Unmatched Recored Of On-Time And Early Project Deliveries, Driven By Our Unwavering Commitment To Fulfilling Promises To Valued Clients</p>
                                        </div>
                                    </div>
                                    <div className='home-price-line1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid home-images-div1' id='gallery'>
                <div className='container'>
                    <div className='row home-images-div2'>
                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic1} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic2} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic3} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic4} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic5} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic6} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic7} className='img-fluid' alt="" />
                            </div>
                        </div>

                        <div className='col-sm-3 col-6'>
                            <div>
                                <img src={pic8} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container-fluid home-form-div1' id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 home-form-div22 pr-0'>
                            <div className='home-form-div33'>
                                <div>
                                    <h1 className='home-contact-text1'>Contact Us</h1>
                                    <h1 className='home-contact-text2'>Send us a request</h1>
                                    <form className="contact-form" >
                                        <div class="row">
                                            <div class="col-lg-12 ">
                                                <div class="d-flex form-input-field-div1">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        class="form-control form-input-field"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 ">
                                                <div class="d-flex form-input-field-div1">
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        class="form-control form-input-field"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 ">
                                                <div class="d-flex form-input-field-div1">
                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        class="form-control form-input-field"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className=' col-12 form-btn1-div1'>
                                                <button className='form-btn1'>Book a Back Call</button>
                                            </div>

                                        </div>
                                    </form> 
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-12 pl-0 h-100 form-pics-divs12'>
                            <div className='h-100'>
                                <img src={formpic1} className=' form-pics-12' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
