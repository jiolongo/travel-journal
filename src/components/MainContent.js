import React from "react";


export default function MainContent(props){
    return(
       
        <div className="wrapper">
            <div className="wrapper-image"> 
                <img src={props.imageUrl} className="image" />
            </div>
               
            <div className="wrapper-details">
                <div className="wrapper-details-location">
                    <div className="wrapper-details-country"> <i class="location-icon fa-solid fa-location-dot"></i>{props.location}</div>
                    <a className="wrapper-details-map" href={props.googleMapsUrl}>View on Google Maps</a> 
                </div>

                <div className="wrapper-details-title">{props.title}</div>
                <div className="wrapper-details-date"> {props.startDate} - {props.endDate}</div>
                <div className="wrapper-details-description">{props.description}</div> 
            </div>


        </div>

       
    )
}