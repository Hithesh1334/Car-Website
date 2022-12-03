import React from 'react';
// import logo from '../images/logo1.jpg';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'

const About = () => {
    // console.log("dataee");
    // const navigate = useNavigate();
    // // const [userData,serUserData] = useState({});

    // const callAboutPage = async ()=>{
    //     console.log("data")
    //     try{
    //         const res = await fetch('/about',{
    //             method: "GET",
    //             headers:{
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials:"include"
    //         });
    //         const data= await res.json();
    //         console.log("data");
    //         serUserData(data);
    //         if(!res.status === 200){
    //             const error = new Error(data.error);
    //             throw error;
    //         }
    //         // const data = await axios.get('/About',{
    //         //     credentials:"include"
    //         // });

    //         // console.log(data);
    //         // serUserData(data);
    //         // if(!data.status === 200){
    //         //     const error = new Error(data.error);
    //         //     throw error;
    //         // }
    //     }catch(err){
    //         console.log(err);
    //         navigate('/Login');

    //     }
    // }

    // useEffect(() => {
    //     console.log("data2w")
    //     callAboutPage()
    // }, []);

     return (
    //     <>
    //         <div className="container em-profile">
    //             <form method="GET">
    //                 <div className="row">
    //                     <div className="col-md-4">
    //                         <img src={logo} alt="." width="200" height='200'/>
    //                     </div>
    //                     <div className="col-md-6">
    //                         <div className="profile-head">
    //                             <h5>name </h5>
    //                             <h6>work</h6>
    //                             <p className="profile-rating mt-3 mb-5">Ranking <span>1/10</span></p>
    //                             <ul className='nav nav-tabs' role='tablist'>
    //                                 <li className="nav-item">
    //                                     <a class='nav-link active' id='home-tab' data-toggle='tab' href='#home' role="tab" aria-controls='home'
    //                                     aria-selected='true'>About</a>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <a clas='nav-link ' id='profile-tab' data-toggle='tab' href='#profile' role="tab" aria-controls='profile'
    //                                     aria-selected='false'>Timeline</a>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     <div className='col-md-2'>
    //                         <input type='submit' className='profile'
    //                         name='btnAddMore'
    //                          value="edit profile"/>
    //                     </div>
    //                 </div>
    //                 <div className='row'>
    //                     {/*left side url*/}
    //                     <div className='col-md-4'>
    //                         <div className='pro  file-work'>
    //                             <p>Work Link</p>
    //                             <a href="https://www.youtube.com/channel/UCvBWk1zgBbPQ0KFK4x3dFIg" target="_blank">Youtube</a><br/>
    //                             <a href="https://www.youtube.com/channel/UCvBWk1zgBbPQ0KFK4x3dFIg" target="_blank">Instagram</a><br/>
    //                             <a href="https://www.youtube.com/channel/UCvBWk1zgBbPQ0KFK4x3dFIg" target="_blank">Linkedin</a><br/>
    //                             <a href="https://www.youtube.com/channel/UCvBWk1zgBbPQ0KFK4x3dFIg" target="_blank">Github</a><br/>

    //                         </div>
    //                     </div>
    //                     {/* right side toggle*/}
    //                     <div className='col-md-8 pl-5 about-info'>
    //                         <div className="tab-content profile-tab" id="myTabContent">
    //                             <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>{/*-pane fade shwo active*/}
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                            userId
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             id
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                         name
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             name
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             Email
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             email
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             Phone
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             phone
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             profession
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             work
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="tab-pane fade " id='profile' role='tabpanel' aria-labelledby='profile-tab'>{/*-pane fade shwo active*/}
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             User Iddsf
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             7851584526582asdfd
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             Namesffsg
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             qwertasdfdg
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             Emailsfg
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             qwer@gmail.comdsfdgf
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             Phonedsfd
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             741852963fdsfdsg
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className='row'>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             professionafsdd
    //                                         </label>
    //                                     </div>
    //                                     <div className='col-md-6'>
    //                                         <label> 
    //                                             webdevsdafg
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
        // </>
        <div>
            hi
        </div>
    );
}

export default About;
