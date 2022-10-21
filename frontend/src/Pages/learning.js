import React from 'react';

class Learning extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            isToggleOn: true,
            currentDate: new Date(),
        }
    }

    componentDidMount()
    {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillMount()
    {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.setState({date: new Date()});
    }

    handleToggle()
    {
        this.setState({isToggleOn: !isToggleOn});
    }

    render()
    {
        return (
            <div>
                <button onClick={()=> this.handleToggle()}>
                    Turn {this.state.isToggleOn? 'ON': 'OFF'}
                </button>
                <div>
                    <h5>The full time is: {this.state}</h5>
                </div>
            </div>
        )
    }
}