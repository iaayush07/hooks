import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                {this.state.data ? <p>Data has been fetched successfully <b> without using hook</b></p> : <p>Loading...</p>}
            </div>
        );
    }
}

export default DataFetcher;
