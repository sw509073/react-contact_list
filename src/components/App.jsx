import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function creatCard(props){
  return(
    <Card
      key = {props.id}
      id = {props.id}

      name={props.name}
      img={props.imgURL}
      tel={props.phone}
      email={props.email}
     />

  )

};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(creatCard)}
      
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email} 
      />*/}

    </div>
  );
}

export default App;
