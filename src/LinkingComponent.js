
import React from 'react';


class HowItsWorks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            presentId: window.location.href
        }
    }


    render(){
        const { presentId } = this.state;
        const final = presentId.substr(presentId.lastIndexOf('/') + 1)
        return(
            <div>
                <h3>{presentId}</h3>
                 <h1> Linking to my id: {final}</h1>
            </div>
        );
    }
}

export default HowItsWorks;


