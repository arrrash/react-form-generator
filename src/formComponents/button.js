import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabled = true;
    }

    handleSubmit(event){
       if (this.props.properties.id == 'submit'){
           if (this.props.isFormValid){
               this.props.submit(event)
           }
       }

    }

    render(){
        return (
                <div className="col-sm-12 pb-3" style={this.props.properties.style}>
                    <label htmlFor={this.props.properties.id}>{this.props.properties.label} </label>
                    <button className={this.props.properties.class ? this.props.properties.class.join().replace(/\,/g, " ") : ''}
                            id={this.props.properties.id}
                            name = {this.props.properties.id}
                            onClick={this.handleSubmit}
                    >
                        {this.props.properties.text}
                        </button>
                </div>
            );


    }
};

Button.propTypes = {
    submit: PropTypes.func.isRequired,
    isFormValid: PropTypes.bool,
};

export default Button;