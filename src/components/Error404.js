import React from 'react';
import '../404style.css';
import {Link} from 'react-router-dom';
const Error404 = () => {
    return (
        <div>
        <div id="lost">
        <section className="error-page-background">
           <div className="container">
             <div className="row">        
              <div className="col-md-12">

                      <div className="text-center">
                      <Link to="" data-toggle="modal" data-target="#reason" title="Why You Are Seeing 404 Page"><i className="icon-question bounce"></i></Link>
                            </div>
                                
                                <h2>404</h2>
                                <p>The Page You Are Looking For Doesn't Exist.</p>
                                 
                                 <div className="text-center">
                                 <Link to={'/home'} className="button button-style">Back To Home </Link>
                                </div>
                                     
                       </div>
                  </div>
                </div>
            </section>
            
           </div>
  
           <div className="modal fade reason-popup-box padding-top-120" id="reason" role="dialog">
             <div className="modal-dialog">
        
          
             <div className="modal-content">
                <div className="modal-body">
                   <div className="row">
                      <div className="col-sm-12">
                       
                       <div className="box-padding">
                         <button type="button" className="btn pull-right" data-dismiss="modal"><i className="icon-close"></i></button>
                          <h3>Why You Are Seeing 404 Page ?</h3>
                           
                           <div className="margin-top-20">
                             
                              <ul className="list-icon size-sm">
                                <li>May be, The page is removed.</li>
                                <li>May be, The page name have changed.</li>
                                <li>May be, You did typed wrong keyword.</li>
                                <li>May be, The link is temporarily unavailable.</li>
                               </ul>
                            
                               </div>
                
                             </div>
    
                          
                         </div>
                        </div>
                     </div>
                 </div>
              </div>
           </div>
           </div>
    );
}

export default Error404;