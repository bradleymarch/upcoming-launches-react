import React from "react";
import Launch from './Launch';
import axios from 'axios';

class Launches extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            hasData: false,
            data: []
        }
    }

    componentDidMount() {
        this.fetchLaunches()
    }

    fetchLaunches() {
        axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/')
          .then((response) => {
            console.log(response.data.results);
            this.setState({
                hasData: true,
                data: response.data.results
            })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    render() {
        return (
            <div id="launches_container">
                {this.state.hasData ? this.state.data.map((launch, index) => {
                    return (
                        <Launch 
                            key={index}
                            name={launch.name} 
                            details={launch.mission ? launch.mission.description : ''}
                            missionType={launch.mission ? launch.mission.type : ''}
                            padName={launch.pad.name}
                            location={launch.pad.location.name}
                        />
                    )
                }) : <span></span>}
            </div>
        )
    }
}

export default Launches;