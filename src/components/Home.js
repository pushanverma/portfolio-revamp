import React from 'react'
import Typed from "react-typed"


const home = () => 
{
    return (
        <>
        <section className="homely" >
          <div className="home">  
            <div className="row">
                <div className="col-lg"> 
                  <h1 className="intro">Hello my name is <span className="name1">Pushan Verma</span></h1>
                  <div className="text-3">And <span className="typing">
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
                  </span></div>
                </div>
                </div>
                </div>
        </section>
        </>
    );
}

export default home;
