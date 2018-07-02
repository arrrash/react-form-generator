import React, { Component } from 'react';
import PropTypes from 'prop-types';



class JsonResult extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="pb-2">Submission Result : </div>
                <textarea className="json-modifier form-control"
                         readOnly name="textarea" value={JSON.stringify(this.props.result, undefined, 4)}
                />
            </div>

        )
    }

};

JsonResult.propTypes = {
    result: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,

    ]),

};

export default JsonResult;