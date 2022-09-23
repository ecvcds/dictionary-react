import React from "react";

export default function Photos(props){
    
    if(props.photos){
        return (
            <div className="Photos">
                <section>
                    <div className="row">                 
                        {props.photos.map(function(photo,index){
                            if(index>8){
                                return null;
                            } else {
                                return (
                                    <div className="col-4 mb-3" key={index}>
                                        <a href={photo.src.original} target="_blank" rel="noreferrer"><img className ="img-fluid" src={photo.src.tiny} alt = "keyword result" key = {index} /></a>
                                    </div>)
                            }

                        })}
                    </div>
                </section>
                
            </div>
        )
    }
    else{
        return null;
    }
}

