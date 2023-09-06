import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component } from 'react';
import './App.css'; // Make sure to create an appropriate CSS file
import BillingAddress from './Component/BillingAddress';
import PaymentSection from './Component/PaymentSection';
import CartSection from './Component/CartSection';
import CheckboxComponent from './Component/CheckboxComponent';
import Resultb from './Resultb'
import Gallery from './Resultb';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends Component {
  render() {
    return (
      <div className="row">

        <div className="col-lg-8">
          <div className="container">
            <div className='col-75'>
            <form action="">
              <BillingAddress />
              {/* ... Other form elements ... */}
              <PaymentSection />
            </form>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
        <CartSection />
        <Gallery />
        </div>
        {/* <CheckboxComponent /> */}
        
      </div>
    );
  }
}

export default App;