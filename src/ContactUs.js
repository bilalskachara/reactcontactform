import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as emailjs from 'emailjs-com';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }
        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //phone
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
        if(typeof  fields["phone"] !== "undefined"){
            if(!fields["phone"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["phone"] = "Only Numbers";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            console.log("Form submitted");
            this.sendEmail(e)
        } else {
            console.log("Form has errors.")
        }
    }

    sendEmail(e) {
        let fields = this.state.fields;

        emailjs.send("service_0atgei8","template_a3ca3wv",{
            from_name: fields['email'] + " from " + fields['address'],
            to_name: fields['name'],
            message: fields['message'],
            reply_to: fields['email']
        },'user_C8lKxSkvT8TqrKLSUgQZ6');
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
            <div className='container'>
                <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)}>
                    <div className='row mt-3'>
                        <div className="col-md-6">
                            <div className='form-group'>
                                <input className='form-control' type="text" size="30" placeholder="Name"
                                       onChange={this.handleChange.bind(this, "name")}
                                       value={this.state.fields["name"]}/>
                                <span className="text-danger">{this.state.errors["name"]}</span>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type="text" size="30" placeholder="Email"
                                       onChange={this.handleChange.bind(this, "email")}
                                       value={this.state.fields["email"]}/>
                                <span className="text-danger">{this.state.errors["email"]}</span>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type="text" size="30" placeholder="Phone"
                                       onChange={this.handleChange.bind(this, "phone")}
                                       value={this.state.fields["phone"]}/>
                                <span className='text-danger'>{this.state.errors["phone"]}</span>
                            </div>
                            <div className='form-group mb-0'>
                                <input className='form-control' type="text" size="30"
                                       placeholder="Address" onChange={this.handleChange.bind(this, "address")}
                                       value={this.state.fields["address"]}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='form-group h-100'>
                                <textarea cols="28" rows="6" className="h-100 form-control comments"
                                          placeholder="Message"
                                          onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary btn-lg pro" id="submit" value="Submit">Send Message</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactUs