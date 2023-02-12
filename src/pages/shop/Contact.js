import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt,faPhoneAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Contact=()=>{
  return (
  <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <FontAwesomeIcon className="i"icon={faMapMarkerAlt}/>
          <div className="topic">Address</div>
          <div className="text-one">Saida, H</div>
          <div className="text-two">Saida_street</div>
        </div>
        <div className="phone details">
          <FontAwesomeIcon className="i" icon={faPhoneAlt}/>
          <div className="topic">Phone</div>
          <div className="text-one">+961 76/837/980</div>
          <div className="text-two">+961 76/837/980</div>
        </div>
        <div className="email details">
          <FontAwesomeIcon className="i" icon={faEnvelope}/>
          <div className="topic">Email</div>
          <div className="text-one">ihabawad767@gmail.com</div>
          <div className="text-two">ihabawad15@outlook.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any comment or any types of quries related to my shop, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
            <textarea placeholder="Enter your message here!"></textarea>
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  )

}
export default Contact;
