import React from 'react';
import '../404style.css';
import {Link} from 'react-router-dom';
const Error404 = () => {
    return (
        <div>
        <div id="lost">
        <section class="error-page-background">
           <div class="container">
             <div class="row">        
              <div class="col-md-12">

                      <div class="text-center">
                      <a href="" data-toggle="modal" data-target="#reason" title="Why You Are Seeing 404 Page"><i class="icon-question bounce"></i></a>
                            </div>
                                
                                <h2>404</h2>
                                <p>The Page You Are Looking For Doesn't Exist.</p>
                                 
                                 <div class="text-center">
                                 <Link to={'/home'} className="button button-style">Back To Home </Link>
                                </div>
                                     
                       </div>
                  </div>
                </div>
            </section>
            
           </div>
  
           <div class="modal fade reason-popup-box padding-top-120" id="reason" role="dialog">
             <div class="modal-dialog">
        
          
             <div class="modal-content">
                <div class="modal-body">
                   <div class="row">
                      <div class="col-sm-12">
                       
                       <div class="box-padding">
                         <button type="button" class="btn pull-right" data-dismiss="modal"><i class="icon-close"></i></button>
                          <h3>Why You Are Seeing 404 Page ?</h3>
                           
                           <div class="margin-top-20">
                             
                              <ul class="list-icon size-sm">
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