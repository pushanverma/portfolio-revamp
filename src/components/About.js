import React from 'react';
import prof from '../../src/assets/images/pushanpic.jpeg';
import Typed from "react-typed";
import {Row,Col,Container} from "react-bootstrap";

const about = () => {
    return (
       <section className="about" id="about ">

          <h2 className="title">About Me</h2> 

          <Container>
            <Row>
              <Col md={6} >
              <img className="pic" src={prof} alt="not found image yet" />
              </Col>

              <Col md={6} className="abutme">
              <div className="text1">
              <h4>I'm  Pushan Verma 123 and I'm a  
              
              <span className="typing-2">
              <Typed
          strings={[
            "I am a Developer",
            "I'm a Learner",
            "I Love Teaching...",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
              </span></h4>
            </div>
            <br/>
           <h3 className="abouttext">Hello World ! I am a undergraduate from GGSIPU (3rd year) intrested in web development and also has a keen intrest in Cloud Computing . I have a CGPA of 7.9(upto 4th sem) .</h3> 
              </Col>
            </Row>
            
          </Container>


      {/* <div className="container">
        <div className="row">
          <div className="col-sm">
           
          </div>
          <div className="col-sm abutme">
            <div className="text1">
              <h4>I'm  Pushan Verma and I'm a  
              
              <span className="typing-2">
              <Typed
          strings={[
            "I am a Developer",
            "I'm a Learner",
            "I Love Teaching...",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
              </span></h4>
            </div>
            <br/>
           <h3 className="abouttext">Hello World ! I am a undergraduate from GGSIPU (3rd year) intrested in web development and also has a keen intrest in Cloud Computing . I have a CGPA of 7.9(upto 4th sem) .</h3>
          </div>  

        </div>
      </div> */}
        </section>
    );
}

export default about;
