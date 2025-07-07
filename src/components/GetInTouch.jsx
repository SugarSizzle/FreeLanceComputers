import React from 'react'


export const GetInTouch = () => {
    return (
        <>
            <div className='get-in-touch-container'>
                <div className='get-in-touch-title-container'>
                    <h2 className='get-in-touch-title'>Get In Touch</h2>
                </div>
                
                <div className='get-in-touch-form-container'>
                    <h3>Fill out the form, and we'll get to you shortly</h3>

                    <form>  
                        <div className='get-in-touch-contact-name-container'>
                            <input className='get-in-touch-contact-name-input' type="text" placeholder='First Name' />
                            <input className='get-in-touch-contact-name-input' type="email" placeholder='Last Name' />
                        </div>

                        <div className='get-in-touch-contact-method-container'>
                            <p className='get-in-touch-contact-method-title'>Preferred Contact Method</p>
                                <div className='get-in-touch-contact-method-input-container'>   
                                    <input className='get-in-touch-contact-method-input' type="radio" name='contact-method' value='email' />
                                    <label htmlFor="email">Email</label>

                                    <input className='get-in-touch-contact-method-input' type="radio" name='contact-method' value='phone' />
                                    <label htmlFor="phone">Phone</label>

                                    <input className='get-in-touch-contact-method-input' type="radio" name='contact-method' value='text' />
                                    <label htmlFor="text">Text</label>
                                </div>  
                        </div>

                    <div className='get-in-touch-contact-info-container'>
                        <input className='get-in-touch-contact-info-input' type="text" placeholder='Phone Number' />
                        <input className='get-in-touch-contact-info-input' type="text" placeholder='Email' />

                        <textarea className='get-in-touch-contact-info-textarea' placeholder='Tell Us About Your Problem' />
                        <button className="get-in-touch-contact-info-button" type='submit'>Submit</button>
                    </div>

                    </form>

                </div>
               
               
            </div>
        </>
    )


}