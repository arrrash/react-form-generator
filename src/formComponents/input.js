import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
        this.state = {'isError' : ''};

    }

    validate(event){
        let isValid = false;
        switch (this.props.properties.validation){
            case 'fullname':
                event.target.value.indexOf(' ') > 1 &&
                event.target.value.indexOf(' ') !== event.target.value.length -1 ? isValid = true : '';
                break;
            case 'email' :
                event.target.value.indexOf('@') > 2 &&
                event.target.value.indexOf('.') > 3 &&
                event.target.value.indexOf('.') !== event.target.value.length -1 ? isValid = true : '';
                break;
            default :
                isValid = true;
        }



        if (typeof this.props.controlFunc === 'function' && isValid) {
            this.props.controlFunc(event);
            this.setState ({isError : ''});

        } else {
            this.setState ({isError : 'text-danger'});
        }
    }

    render(){
        return (
            <div className="col-sm-12 pb-4">
                <label htmlFor={this.props.properties.id}>{this.props.properties.label} </label>
                <input type="text"
                       className={`${this.props.properties.class ? this.props.properties.class.join().replace(/\,/g, " ") : ''}`}
                        id={this.props.properties.id}
                       name = {this.props.properties.id}
                       placeholder={this.props.properties.placeholder}
                       value = {this.props.content}
                       onChange={this.validate}
                />
                <div className={`"figure-caption" ${this.state.isError}`}> {this.props.properties.description}</div>


            </div>
        )
    }
};

Input.propTypes = {
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
    ]),
};

export default Input;