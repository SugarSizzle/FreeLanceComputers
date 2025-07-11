import React from 'react'
import { Link } from 'react-router-dom';



export const HomePageStoreSection = () => {




    return(
        <>
        <h3 className='store-title'>Check out our store</h3>
          <div className='store-container'>
            
            <h3 className='store-preference-text'>Tech Prefernce</h3>

            <div className='store-preference-container'>
                <button className='store-preference-button'/>
                <h3 className="store-preference-text">Laptop</h3>
            

             
                <button className='store-preference-button'/>
                <h3  className="store-preference-text">Desktop</h3>
             </div>

             
            <h3 className='store-preference-text'>New Or Used?</h3>
            <div className='store-preference-container'>

               <button className='store-preference-button'/>
               <h3 className='store-preference-text new-text'>New</h3>

                <button className='store-preference-button'/>
                <h3 className='store-preference-text'>Used</h3>

            </div>

            <div className="submit-button-container">

                <button className='submit-button'>Submit</button>
                <Link to="/products"><button className='all-selections-button'>All Selections</button></Link>

            </div>


          </div>

        </>
    )
}
