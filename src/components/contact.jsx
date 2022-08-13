import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'service_8uj1t5p', 'template_6svgc4f', e.target, 'SqyNyUnobZA7aQel2'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          console.log("done .............");
        },
        (error) => {
          console.log(error.text)
          console.log("something error ...........");
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.

                </p>

              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href= "https://www.google.com/search?q=sea%20sky&oq=sea+&aqs=chrome.0.69i59j69i57j46i512j46i131i433i512j0i512j69i60l2j69i61.1113j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYCa7dpBR5eBP1zh0KJkxJWYdxebQ:1660412530352&rflfq=1&num=10&rldimm=14239707642045924778&lqi=CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl&phdesc=HGcoqowvPts&ved=2ahUKEwi4m7XYrsT5AhUHZWwGHczeBRYQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:14239707642045924778,l,CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl,y,HGcoqowvPts;mv:[[23.752148299999998,90.41374689999999],[23.7379799,90.38291679999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/search?q=sea%20sky&oq=sea+&aqs=chrome.0.69i59j69i57j46i512j46i131i433i512j0i512j69i60l2j69i61.1113j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYCa7dpBR5eBP1zh0KJkxJWYdxebQ:1660412530352&rflfq=1&num=10&rldimm=14239707642045924778&lqi=CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl&phdesc=HGcoqowvPts&ved=2ahUKEwi4m7XYrsT5AhUHZWwGHczeBRYQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:14239707642045924778,l,CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl,y,HGcoqowvPts;mv:[[23.752148299999998,90.41374689999999],[23.7379799,90.38291679999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10">
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/search?q=sea%20sky&oq=sea+&aqs=chrome.0.69i59j69i57j46i512j46i131i433i512j0i512j69i60l2j69i61.1113j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:10&tbm=lcl&sxsrf=ALiCzsYCa7dpBR5eBP1zh0KJkxJWYdxebQ:1660412530352&rflfq=1&num=10&rldimm=14239707642045924778&lqi=CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl&phdesc=HGcoqowvPts&ved=2ahUKEwi4m7XYrsT5AhUHZWwGHczeBRYQvS56BAgJEAE&sa=X&rlst=f#rlfi=hd:;si:14239707642045924778,l,CgdzZWEgc2t5WgkiB3NlYSBza3mSARNtZW5zX2Nsb3RoaW5nX3N0b3Jl,y,HGcoqowvPts;mv:[[23.752148299999998,90.41374689999999],[23.7379799,90.38291679999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:10">
                      <i className='fa fa-youtube' 
                        href src 
                      
                      >

 
                        


                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
