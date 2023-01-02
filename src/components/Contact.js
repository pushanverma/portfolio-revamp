import React from 'react'

const Contact = () => 
{
    return (
        <>
        <section className="details" id="details">
        <h1 className="detailtitle">Contact Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
                  <ul className="list-group">
                    <li className="list-group-item ">Name

                      <i className="deicon fas fa-user-tie fa-2x"></i>
                    <p>Pushan Verma</p>
                    </li>
                    
                    <li className="list-group-item ">Phone
                      <i className="deicon fas fa-phone-alt fa-2x"></i>
                      <p>9999456503</p>
                    </li>

                    <li className="list-group-item ">Email
                      <i className=" deicon fas fa-envelope fa-2x"></i>
                       <p>pushanverma.99@gmail.com</p>
                    </li>
                    </ul>
                  </div>
                    <div className=" qot col-sm">
                      <q className="qotext">Perfection is achieved not when there is nothing more to add,
                         but rather when there is nothing more to take away. </q>
                      <p>-Antoine de Saint-Exupery</p>
                    </div>
                  
            </div>
          </div>

      </section>
        </>
    );
}

export default Contact
