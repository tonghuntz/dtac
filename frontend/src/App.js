import React from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import InsuranceTravel from './Screens/InsuranceTravel';
import InsurancePerson from './Screens/InsurancePerson';

function App() {
  
  return (
  <BrowserRouter>  
    <div className="grid-container">
            <div className="header"></div>
            <div className="banner"></div>
            <div className="tab">              
              <ul className="navbar">
                <Link to={'/InsurancePerson/'} className='text-link'>
                  <li className="tabPerson">
                    <div className="tabTitle">
                      <div style={{display:"inline-block",width:"70%"}}>
                        <div style={{fontSize:"2rem"}}>แพ็คเกจเน็ต<img src="/images/icon-free.png" className="icon-free" ></img></div>
                        <strong style={{fontSize:"2.5rem"}}>ประกันอุบัติเหตุส่วนบุคคล</strong>
                      </div>
                      <div className="icon-person">
                      </div>                      
                    </div>                    
                  </li>
                </Link>
                <Link to={'/InsuranceTravel/'} className='text-link'> 
                  <li className="tabTravel">
                    <div className="tabTitle">
                      <div style={{display:"inline-block",width:"70%"}}>
                        <div style={{fontSize:"2rem"}}>แพ็คเกจเน็ต<img src="/images/icon-free.png" className="icon-free" ></img></div>
                        <strong style={{fontSize:"2.5rem"}}>ประกันการเดินทาง</strong>
                      </div>
                      <div className="icon-travel">
                      </div>                      
                    </div> 
                    
                  </li>    
                </Link>            
              </ul>
            </div>
            <main className="main">
                  <Redirect exact from="/" to="InsurancePerson" />
                  <Route path="/InsurancePerson" component={InsurancePerson} />
                  <Route path="/InsuranceTravel" component={InsuranceTravel} />

            </main>
            <footer className="footer"></footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
