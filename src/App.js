import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FormGenerated from './Form';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {'formTemplate' : '' };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:3000/assets/formtemplate.json')
            .then((response) => {
                this.setState({"formTemplate" :JSON.stringify   (response.data, undefined, 4)});
            })
            .catch((e) => {console.error(e);});

    }

    handleChange(event) {
        // console.log('here', event.target.value);
        this.setState({"formTemplate" : event.target.value });
    }

  render() {
      if (!this.state.formTemplate) {
          return <div> loading...</div>
      }
    return (
      <div className="container mt-5">
        <div className="row">

            <div className="col-sm-4 border-right form-group">
                <form id="noter-save-form" method="POST">
                    <div className="pb-2">Form schema : </div>

                    <textarea className="json-modifier form-control"
                              name="textarea" value={this.state.formTemplate}
                              onChange={this.handleChange}
                    />
                </form>
            </div>


            <FormGenerated formTemplate = {this.state.formTemplate} />
        </div>
      </div>
    );
  }


}

export default App;
