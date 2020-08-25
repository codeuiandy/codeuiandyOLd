import React, { Component } from 'react'
import './contact.css'
export default class contact extends Component {
    render() {
        return (
            <div className="contact-section">
               <div className="main-contact">
               <form>

                   <div className="sectionForm1">
                      <div class="form-group">
    <label for="exampleInputText1">Input Name</label>
    <input type="Text" class="form-control" id="exampleInputText1" />
   
  </div>   

  <div class="form-group">
    <label for="exampleInputText1">Email Address</label>
    <input type="email" class="form-control" id="exampleInputText1" />
   
  </div>   


  <div class="form-group">
    <label for="exampleInputEmail1">Subject</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>   
 
 
                   </div>

                   <div className="sectionForm1">
      <div class="form-group">
    <label for="exampleInputEmail1">InputSubject</label>
    <textarea type="Text" class="form-control" id="exampleInputText1" />
   
  </div>    
  </div>

 
</form>
                   </div> 
            </div>
        )
    }
}
