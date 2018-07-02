import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    constructor(props){
        super(props);
        this.renderOptions = this.renderOptions.bind(this);

    }

    renderOptions(){
      return  this.props.properties.options.map((option , i) => {
            return (
                <option key = {i} value={option}>{option} </option>
            );
        });
    }

    render(){
        return (
            <div className="col-sm-12 pb-3">
                <label htmlFor={this.props.properties.id}>{this.props.properties.label} </label>
                <select className={this.props.properties.class ? this.props.properties.class.join().replace(/\,/g, " ") : ''}
                        onChange={this.props.controlFunc}
                        name = {this.props.properties.id}
                        id = {this.props.properties.id}
                >
                    <option defaultValue>{this.props.properties.placeholder}</option>
                    {this.renderOptions()}

                </select>
            </div>
        )
    }
};

Select.propTypes = {
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Select;