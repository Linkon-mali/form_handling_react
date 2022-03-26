import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
// import Select from 'react-select';
import { useForm } from "react-hook-form";

const Contact = ({label = 'Contact Us'}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [subject, setSubject] = useState('Default Subject');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [terms, setTerms] = useState('');

    const changeInput = (stateName, stateValue) => {
        switch (stateName){
            case 'subject':
                setSubject(stateValue);
                break;

            case 'name':
                setName(stateValue);
                break;

            case 'email':
                setEmail(stateValue);
                break;

            case 'reason':
                setReason(stateValue);
            break;

            case 'message':
                setMessage(stateValue);
            break;
            
            case 'terms':
                setTerms(stateValue);
            break;

            default:
                break;
        }
    }

    const onSubmitContactForm = async (data) => {
        // alert('submit Contact form');
        console.log('data', data);
        // await axios.post('https://test.com', data)
        // .then(res => {
        //     ///
        // })
        // .catch(errors => console.log(errors))
    }
    console.log('errors', errors);

    console.log(subject, name, email, message, reason, terms);

  return (
    <>
        <Form className="card card-body p-5 m-5" onSubmit={handleSubmit(onSubmitContactForm)}>
        <h2 className="mb-4">{label}</h2>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    className={errors.subject && 'is-invalid'}
                    onChange={e => changeInput("subject", e.target.value)}
                    {...register("subject", {
                        required: true,
                        minLength: 5,
                        maxLength: 50
                    })}
                />
                {errors.subject && 
                <span className='text-danger'>
                    {errors.subject.type === 'required' && 'Please give subject'}
                    {errors.subject.type === 'minLength' && 'Please give subject minimum 5 charecter'}
                    {errors.subject.type === 'maxLength' && 'Please give subject maximum 50 charecter'}
                </span>}
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={errors.name && 'is-invalid'}
                    onChange={e => changeInput("name", e.target.value)}
                    {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 50
                    })}
                />
                {errors.name && 
                <span className='text-danger'>
                    {errors.name.type === 'required' && 'Please give name'}
                    {errors.name.type === 'minLength' && 'Please give name minimum 5 charecter'}
                    {errors.name.type === 'maxLength' && 'Please give name maximum 50 charecter'}
                </span>}
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className={errors.email && 'is-invalid'}
                    onChange={e => changeInput("email", e.target.value)}
                    {...register("email", {
                        required: true,
                    })}
                />
                {errors.email && 
                <span className='text-danger'>
                    {errors.email.type === 'required' && 'Please give email'}
                </span>}
            </Form.Group>

            <Form.Group controlId="reason">
                <Form.Label>Reason</Form.Label>
                <select className='form-control' {...register('reason')} onChange={value => changeInput("reason", value)}>
                    <option>--Select Account Type</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                
                 {errors.message && 
                <span className='text-danger'>
                    {errors.message.type === 'required' && 'Please give reason'}
                </span>}
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    type="text" 
                    placeholder="Enter your message"
                    className={errors.message && 'is-invalid'}
                    onChange={e => changeInput("message", e.target.value)}
                    {...register("message", {
                        required: true,
                    })}
                />
                 {errors.message && 
                <span className='text-danger'>
                    {errors.message.type === 'required' && 'Please give message'}
                </span>}
            </Form.Group>

            <Form.Group controlId="terms">
                <Form.Check 
                    type="checkbox" 
                    label="Read Terms and Service"
                    onChange={() => changeInput("terms", terms ? false : true )}
                    className={ errors.terms && 'is-invalid' }
                    {...register("terms", { 
                        required: true
                    })}
                />
               { errors.terms &&  
                <span className="text-danger">
                    {errors.terms.type === 'required' && 'Please read terms and check condition'}
                </span>}

               
            </Form.Group>

            <Button variant="primary" type="submit">
               <i className='fa fa-send'></i> Submit
            </Button>
        </Form>
    </>
  )
}

export default Contact