import React from 'react'


export const DataRecoveryGetInTouch = () => {

    return(
        <>
        <div className='data-recovery-line-light' />
        <div className="data-recovery-get-in-touch-header-container">
            <h3 className='data-recovery-get-in-touch-header'>Get In Touch</h3>
            <p className='data-recovery-get-in-touch-text'>
                Each individual case is unique, making it difficult to have a specific amount up front. 
                In order to give a more accurate amount, you can fill out the form below. 
            </p>
        </div>

        <div className='data-recovery-get-in-touch-form-container'>

            <form>

                <div className='data-recovery-get-in-touch-form-contact-info-container'>
                    <p className="data-recovery-get-in-touch-form-header">Fill out the form, and we'll get you to you shortly.</p>
                    <input className='data-recovery-get-in-touch-form-name-input' type="text" placeholder='First Name' />
                    <input className='data-recovery-get-in-touch-form-name-input' type="text" placeholder='Last Name' />
                    <input className='data-recovery-get-in-touch-form-name-input' type="text" placeholder='Email' />
                    <input className='data-recovery-get-in-touch-form-name-input' type="text" placeholder='Phone Number' />
                </div>

                <div className='data-recovery-get-in-touch-form-contact-method-container'>   
                        <p className='data-recovery-get-in-touch-form-contact-method-title'>Preferred Contact Method</p>
                        <div className='radio-group'>
                            <input className='data-recovery-get-in-touch-form-contact-method-input' type="radio" name='contact-method' value='email' id="email" />
                            <label className='data-recovery-get-in-touch-form-contact-method-label' htmlFor="email">Email</label>
                            <input className='data-recovery-get-in-touch-form-contact-method-input' type= 'radio' name='contact-method' value='phone' id="phone" />
                            <label className='data-recovery-get-in-touch-form-contact-method-label' htmlFor='phone'>Phone</label>
                        </div>
                </div>

                <div className='data-recovery-get-in-touch-form-textarea-container'>
                    <p className='data-recovery-get-in-touch-form-textarea-header'>Give a detailed description of your problem, this will help us ensure the best approach to helping you!</p>
                    <textarea className='data-recovery-get-in-touch-form-textarea' placeholder='Tell Us About Your Problem' />
                    <button className='data-recovery-get-in-touch-form-submit-button'> SUBMIT </button>


                </div>

            </form>
        </div>


        </>
    )


}