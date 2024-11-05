import React, { useContext } from "react";
import { KosarContext} from "../contexts/KosarContext";

export default function Termek(props) {
    const {kosarba} = useContext(KosarContext);
    function kattintas(){
        kosarba(props.elem);
    }
  
    return (
    <div className="col-lg-3">
        <div class="card m-1 p-1">
            <img class="card-img-top" src={props.elem.image} alt={props.elem.description}/>
            <div class="card-body">
                <h5 class="card-title">{props.elem.title}</h5>
                <p className="card-text">${props.elem.price}</p>
                <a href="#" class="btn btn-light"  onClick={()=>{kattintas()}}>Kosárba</a>
            </div>
        </div>
    </div>
  );
}
