import React from 'react';
import ContactForm from "../components/contact-form";

function ContactFormPage(){
   return(
       <div className="ui middle aligned grid" style={formStyle}>
           <div className="row">
               <div className="column">
                   <ContactForm />
               </div>
           </div>
       </div>
   );
}

const formStyle = {
     height : '90vh'
}

export default ContactFormPage;
