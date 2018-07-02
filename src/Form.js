import React, { Component } from 'react';
import JsonResult from './jsonResult';

import Input from './formComponents/input';
import Checkbox from './formComponents/checbox';
import Button from './formComponents/button';
import Select from './formComponents/select';
import DateInput from './formComponents/date';




class FormGenerated extends Component {

    constructor(props) {
        super(props);
        this.formData = {};
        this.formTemplate = JSON.parse(this.props.formTemplate);
        this.state = {'formData' : [], 'error' : []};
        this.errorHandling = [];
        this.isFormValid = false;
        this.renderForm = this.renderForm.bind(this);
        this.generadeRandomString = this.generadeRandomString.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    generadeRandomString() {
        return Math.random().toString(36).substring(2, 9);
    }

    handleChange(event){
        //handling checkbox clicking
        if (event.target.type == "checkbox"){
           if( this.formData[event.target.attributes['id'].value] != undefined) {
               delete this.formData[event.target.attributes['id'].value];
           } else {
               this.formData[event.target.attributes['id'].value] = true;
           }
            return;
        }

        //forming the formData to submit
        this.formData[event.target.attributes['id'].value] = event.target.value;

        Object.entries(JSON.parse(this.props.formTemplate).newsletter).forEach(([key, value]) => {
            if (value.isRequired && this.formData[value.id] == undefined){
                this.errorHandling[value.id] = false;
            } else {
                this.errorHandling[value.id] = true;
            }
        });

    }

    handleSubmit(event) {
        event.preventDefault();
       if (Object.keys(this.errorHandling).every((k) => this.errorHandling[k])){
           this.setState({ 'formData' : this.formData });
           this.formData = [];
       }
    }

    renderForm() {
        let form = [];
        try {
                let formTemplate = JSON.parse(this.props.formTemplate);
                Object.entries(formTemplate.newsletter).forEach(([key, value]) => {
                    switch (value.type) {
                        case 'input' :
                            form.push(<Input key={this.generadeRandomString()} controlFunc={this.handleChange} properties = {value}/>);
                            break;
                        case 'checkbox' :
                            form.push(<Checkbox key={this.generadeRandomString()} controlFunc={this.handleChange} properties = {value}/>);
                            break;
                        case 'button' :
                            form.push(<Button key={this.generadeRandomString()} controlFunc={this.handleChange} properties = {value} isFormValid = {this.isFormValid} submit ={this.handleSubmit}/>);
                            break;
                        case 'select' :
                            form.push(<Select key={this.generadeRandomString()} controlFunc={this.handleChange} properties = {value}/>);
                            break;
                            case 'date' :
                            form.push(<DateInput key={this.generadeRandomString()} controlFunc={this.handleChange} properties = {value}/>);
                            break;
                    }

                })
             }
        catch (error) {
            return <div> Not a valid Json </div>;
        }
        return form;
    }

    render(){
    return(

        <div className="row col-sm-8">
            <div className="col-sm-6">
                <div className="pb-2">Form generated : </div>

                <form className="form-group form-control"  onSubmit={this.handleSubmit}>
                    {this.renderForm()}
                </form>
            </div>
            <div className="col-sm-6 border-right form-group">
                <JsonResult result={this.state.formData}/>
            </div>
        </div>


    )
    }
}

export default FormGenerated;