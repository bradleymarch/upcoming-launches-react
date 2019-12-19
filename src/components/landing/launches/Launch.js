import React, { useState } from "react";

function Launch(props) {

    const [show, toggleShow] = useState(false)

    return (
        <div id="launch_container">
            <h2 onClick={() => toggleShow(!show)}>{props.name}</h2>
            {show == true ? <span><p>{props.details}</p>
            <p>Date: {props.net.slice(0, 10)}</p>
            <p>{props.missionType !== '' ? <span>Mission Type: {props.missionType}</span> : <span></span>}</p>
            <p>Pad Name: {props.padName}</p>
            <p>Pad Location: {props.location}</p></span> : <span></span>}
        </div>
    )
};

export default Launch;