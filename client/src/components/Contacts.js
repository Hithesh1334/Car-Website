import React, {useState,useEffect} from 'react'
// import logo from '../images/logo1.jpg';

export default function Contacts() {
  console.log("dataee");
  const [,serUserData] = useState();

  const userContact = async ()=>{
      console.log("data")
      try{
          const res = await fetch('/getdata',{
              method: "GET",
              headers:{
                  "Content-Type": "application/json"
              }
          });
          const data= await res.json();
          console.log("data");
          serUserData(data);
          if(!res.status === 200){
              const error = new Error(data.error);
              throw error;
          }
          // const data = await axios.get('/About',{
          //     credentials:"include"
          // });

          // console.log(data);
          // serUserData(data);
          // if(!data.status === 200){
          //     const error = new Error(data.error);
          //     throw error;
          // }
      }catch(err){
          console.log(err);
          

      }
  }

  useEffect(() => {
      userContact();
  }, []);
  return (
    <div className='contact-main'>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact-info-item  ">
                {/* <img src={logo} className='contact-image-logo' alt='p' width='60' height='30'/> */}
                  <label className='logo-info' htmlFor="phone">
                      <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    Phone
                  </div>
                  <div className="contact-info-text">
                    +91 1111 543 2189
                  </div>
                </div>
              </div>
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                {/* <img src={logo} className='contact-image-logo' alt='p' width='50' height='30'/> */}
                <label className='logo-info' htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <div className="contact-info-content">
                  <div className="contact-info-title">
                      Email
                  </div>
                  <div className="contact-info-text">
                    abc34@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                {/* <img src={logo} className='contact-image-logo' alt='p'width='60' height='30'/> */}
                <label className='logo-info' htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <div className="contact-info-content">
                  <div className="contact-info-title">
                    Adress
                  </div>
                  <div className="contact-info-text">
                    Banglore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      <div className="contact-form">
        <div className="container">
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact-form-container py-5 '>
                <div className='contact-form-title'>
                  Get in touch!

                </div>
                <form id="contact-form">
                  <div className='contact-form-name  justify-content-between align-items-between'>
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type='text' id='contact-form-name' className="contact-form-name-inputfeild" placeholder="Your name" require='true'/>
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type='email' id='contact-form-email' className="contact-form-email-inputfeild" placeholder="Your Email" require='true'/>
                    <label htmlFor="phone">
                      <i className="zmdi zmdi-phone material-icons-name"></i>
                    </label>
                    <input type='number' id='contact-form-phone' className="contact-form-phone-inputfeild" placeholder="Your phone number" require='true'/>
                  </div>
                  <div className='contact-form-text'>
                    <textarea className="text-field" id='text-field' cols='121' rows='7' placeholder='simple message'/>
                  </div>
                  <div className='contact-form-button'>
                    <button type='submit' className='button'>sned message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
