import React from "react";
import Termek from "./Termek";

export default function VasarloTer(props) {
  return (
    <div className="row">{
        props.termekLista.map((elem,i)=>{
            return <Termek elem={elem} key={i}/>
        }
        )        
        }
    </div>
  );
}
