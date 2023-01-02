import React from 'react'

    const skills = () => {
    return (
        <>
        <section className="skills" id="skills">
            <h2 className="skil">My Skills</h2>
            <div className="row">   
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className=" skilname card-title">My Skills and Self Learnings</h5>
                    <p className=" skiltext card-text">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       Recusandae laudantium libero modi. Error, eius? Officiis quae quisquam,
                       sequi sit autem a? Fugiat facilis ut voluptate dolore, repellat enim asperiores ea.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex?
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, at.
                      </p>
                    <a  href="https://www.linkedin.com/in/pushan-verma-559260176" className=" skilbutton btn btn-primary">Go to My LinkedIn</a>
                  </div>
                </div>
                </div>
                                
                <div className="col-sm-6">
                  <p className="progtext">HTML</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                  <p className="progtext">CSS</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                  <p className="progtext">JAVASCRIPT</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                  <p className="progtext"> MERN</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                  <p className="progtext">DATABASE</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                  <p className="progtext">JAVA(Programming)</p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                  </div>
                </div>  
             </div>               
      </section>
        </>
    );
}

export default skills;
