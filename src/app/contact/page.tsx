import React from 'react'

const Contact = () => {
  return (
    <section className="contact-form border max-w-lg mx-auto my-20 p-8 bg-Black shadow-md rounded-md">
        <h2 className='text-4xl font-bold mb-6 text-center text-black' data-aos="fade-up"> Contact Us</h2>
        <form> 
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required/>
            <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required/>
            <input type="text" placeholder="Phone Number" className="w-full mb-4 px-4 py-2 border border-black rounded-md"/>
            <textarea placeholder="Your Message" className="w-full mb-4 px-4 py-2 border border-black rounded-md" rows={5} required></textarea>
            <button type="submit" className="w-full p-2 bg-black text-amber-300 rounded-lg hover:bg-red-500">Send Message</button>
            
           
        </form>
    </section>
  )
}

export default Contact

