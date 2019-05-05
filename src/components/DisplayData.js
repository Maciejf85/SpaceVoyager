import React from 'react'
import Module from './Module';
import Planets from './Planets';

class DisplayData extends React.Component {

    state = {
        page:1,
        selected: true
    }

    viewDetails = () =>{
        this.setState({
            selected: !this.state.selected
        })
    }



    render() {
        const { selected } = this.state;
        return (
            <>
                {!selected && <Planets page={this.state.page}  />}
                {selected && <Module view={this.viewDetails}/>}
            </>

        )
    }
}


export default DisplayData;