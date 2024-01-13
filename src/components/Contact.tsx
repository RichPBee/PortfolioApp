import { ReactNode, useState } from 'react';
import './styles/Contact.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Contact(): React.JSX.Element
{
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: ''
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const toggleAlert = (message: string, type: string) => { 
        setAlertInfo({
            display: true,
            message,
            type
        });
        if (message = '') { setDisabled(false); }
        setTimeout(() => {
            setDisabled(false);
            setAlertInfo({
                display: false,
                message: '',
                type:''
            })
        }, 5000);
    }

    const onSubmit = async (data: any) => { 
        setDisabled(true);
        const { name, email, title, message } = data;
        try {
            const templateParams = {
                name,
                email,
                title,
                message
            };
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID as string,
                import.meta.env.VITE_TEMPLATE_ID as string,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY as string
            );
            toggleAlert('Email sent successfully', 'Success');
        } catch(e) {
            console.log(e);
            toggleAlert('Uh oh. Something went wrong', 'Error');
        } finally {
            reset();
        };
    }

    return (
    <div className="ContactSection PageSection" id="Contact">
        <h1>
            Contact Me
        </h1>
        <form action="POST" className="ContactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className='FormSection'>
                <input 
                    type="text" 
                    placeholder='Name'
                    {...register('name', {
                        required: {value: true, message: 'Please enter your name'},
                        maxLength: {
                            value: 40,
                            message: 'Please use 40 characters or less'
                        },
                        minLength: {
                            value: 2,
                            message: 'Please use 2 characters or more'
                        }
                    })}
                />
                {errors.name && <span className="ErrorMessage">{errors.name.message as ReactNode}</span>}
            </div>
            <div className="FormSection">
                <input 
                    type="text" 
                    placeholder='Email'
                    {...register('email', {
                        required: {
                            value: true, 
                            message: 'Please enter your email.',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+=/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Please enter a valid email.'
                        }
                    })}
                />
                {errors.email && <span className='ErrorMessage'>{errors.email.message as ReactNode}</span>}
            </div>
            <div className="FormSection">
                <input 
                    type="text" 
                    placeholder='Subject'
                    {...register('title', {
                        required: {value: true, message: 'Please enter a subject'},
                        maxLength: {
                            value: 80,
                            message: 'Please use 40 characters or less'
                        },
                        minLength: {
                            value: 3,
                            message: 'Please use 2 characters or more'
                        }
                    })}
                />
                {errors.title && <span className='ErrorMessage'>{errors.title.message as ReactNode}</span>}
            </div>
            <div className="FormSection MessageSection">
                <textarea
                    className = 'textArea'
                    placeholder='Message'
                    {...register('message', {
                        required: {
                            value: true,
                            message: 'Please enter a message'
                        }
                    })}
                />
                {errors.message && <span className='ErrorMessage'>{errors.message.message as ReactNode}</span>}
            </div>
            <button disabled={disabled}>
                Submit
            </button>
            {alertInfo.display && <div className={`alert ${alertInfo.type}`}>
            {alertInfo.message}
            <button
                type='button'
                className='close-button'
                onClick={() => setAlertInfo({display: false, message: '', type: ''})}
            >
                Close
            </button>
            </div>}
        </form>
        
    </div>
    );
}

export default Contact;