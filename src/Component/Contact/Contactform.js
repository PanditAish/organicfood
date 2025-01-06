import React from 'react'

const Contactform = () => {
  return (
    <>
      <div className='conform container-fluid'>
          <div className='con-body'>
            <form>
                <div className='form-div'>
                <div className='div-one'>
                    <input type='text' name='username' placeholder='username' autoComplete='off' className='shadow-sm'/>
                </div>
                <div className='div-one'>
                    <input type='email' name='email' placeholder='Email' autoComplete='off' className='shadow-sm'/>
                </div>
                <div className='div-one'>
                    <textarea name='message' className='shadow-sm' cols="30" rows='6' autoComplete='off' placeholder='Message'></textarea>
                </div>
                <div className='div-one'>
                    <button className='but1 px-5 py-2 shadow'>Send</button>
                </div>
                </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default Contactform;
