import React from "react";
import KosarElem from "./KosarElem";

export default function Kosar(props) {
  return (
    <div className="row">{
        props.kosarLista.map((elem,i)=>{
            return <KosarElem elem={elem} key={i}/>
        }
        )        
        }
    </div>
  );
}
