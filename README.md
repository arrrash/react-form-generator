# React-form-generator
This is a react application that generates form from a json.

## How Form is generated
the Json is located in public_assets_formtemplate.json. In that file We have to provide the elements of the form as array of objects :
```
“0” : {
    “type” : “input” ,
    “placeholder” : “enter your full name”,
    “id” : “fullname”,
    “label” : “Fullname”,
    “description” : “Your full name here ie: ‘John Doe”,
    “validation” : “fullname”,
    “isRequired” : *true*,
    “class” : [“form-control”],
    “style” : {
        “color”: “#dedede",
        “fontSize”: “4px”    }
},
```
the element unidentified by “type” which can be input, button, checkbox, date at the moment.
For the sake of submission handling the field should have “id” to provide the submission payload correctly.

## Validation
There are two validations for each field. 

1 - “required” fields are handled by Form itself.
2 - “per component” validations are handled within its component. 

the implemented validation are as below :

for input : “filename” and “email”
for date “above18”

If the input is not matching the validation the payload will not include it and form submission will be dead. And the “description” of the component will turn red. (it can be handled better)
