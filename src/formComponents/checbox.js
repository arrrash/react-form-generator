import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Checkbox extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (

                <div className="form-check col-sm-12 pb-3">
                    <input className={this.props.properties.class ? this.props.properties.class.join().replace(/\,/g, " ") : ''}
                           type="checkbox"
                           value={this.props.properties.name}
                           id={this.props.properties.id}
                           name={this.props.properties.id}
                           onChange={this.props.controlFunc}
                    />
                        <label className="form-check-label" htmlFor={this.props.properties.id}>
                            {this.props.properties.label}
                        </label>
                </div>

        )
    }
};

Checkbox.propTypes = {
    controlFunc: PropTypes.func.isRequired,
};

export default Checkbox;