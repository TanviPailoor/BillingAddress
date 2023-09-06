
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Component from './Allcomponents/Component';
import Button from './Allcomponents/Button';
import Grid from './Allcomponents/Grid';
function App() {
  const cardDetails= [
    {
      img:"./images/Solid_grey.jpg" ,
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"29mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"29mins"
    },
    {
      img:"./images/Solid_grey.jpg",
      description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"29mins"
    }

  ];
  const condition = "This is my first react app";
  return (

    <div className="App">
       {condition == "This is my first react app" ? "dfghj" :"This is test"} 
 
  <Component title="albumexample" />
  <main role="main">
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
        
       {
        cardDetails.map((data,index)=>{
          return(
            <Grid  key={index}  description={data.description} img={data.img} time={data.time}/>);
        })
       }
        
        </div>
      </div>
    </div>
       
  </main>
  <footer className="text-muted">
    <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>  </div>
  </footer>
    </div>
  );
}

export default App;