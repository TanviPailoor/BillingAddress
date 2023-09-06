import Button from "./Button";
import Styles from './Button.module.css';

function Grid(props){

  //to change image
  const isNineMin = props.time === "9mins";
  const isTwentyNine = props.time === "29mins";
  const img = isNineMin ? "./images/Solid_blue.jpg" : (isTwentyNine ? "./images/Solid_pink.jpg" : props.img);



//to change background of text
  const isNine = props.time === "9mins";
  const isTwenty = props.time === "29mins";
  const cardtextA = isNine ? "cardtextA" : (isTwenty ? "cardtextB" : "");
  const cardtextB = isNine ? "cardtextA" : (isTwenty ? "cardtextB" : "");



    return(
    <div className="col-lg-4 col-md-6">
    <div className="card mb-4 shadow-sm">
       
        <img className="card-img-top" src={img} alt="card"></img>
      <div className={`card_body ${Styles.card_body}`}>
        <p className={`card-text ${cardtextA} ${cardtextB}`}> {props.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className={`btn-group ${Styles.btnView} ${Styles.btnEdit}`}>
              <Button className="btnView" title="View"/>
              <Button className="btnEdit" title="Edit"/>
          </div>
          <small className="text-muted">{props.time}</small>
        </div>
      </div>
    </div>
    </div>
     )

}
export default Grid;

