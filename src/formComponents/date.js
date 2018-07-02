import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateInput extends Component {

    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
        this.state = {'isError' : ''};
    }



    validate(event){
        let isValid = false;
        switch (this.props.properties.validation){
            case 'above18':
                if(new Date(event.target.value) && event.target.value.length == 10){
                    var birthday = new Date(event.target.value);
                     ((new Date() - birthday) / (31557600000)) == 18 ||
                     ((new Date() - birthday) / (31557600000)) > 18
                         ? isValid = true : '';
                } else {
                    isValid = false;
                }
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
            <div className="col-sm-12 pb-3">
                <label htmlFor={this.props.properties.id}>{this.props.properties.label} </label>
                <input type="date" className={`${this.props.properties.class ? this.props.properties.class.join().replace(/\,/g, " ") : ''}`}
                       id={this.props.properties.id}
                       name = {this.props.properties.id}
                       placeholder={this.props.properties.placeholder}
                       validation={this.props.properties.validation}
                       disabled={this.props.properties.dependsOnId}
                       value = {this.props.content}
                       onChange={this.validate}
                />
                <div className={`"figure-caption" ${this.state.isError}`}> {this.props.properties.description}</div>

            </div>
        )
    }
};

DateInput.propTypes = {
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
    ]),
};

export default DateInput;