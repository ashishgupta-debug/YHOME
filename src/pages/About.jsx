import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/founderImg.png'

export default function About() {
  return (
    <div className='py-20 px-4 pl-20 pr-20 mx-auto flex flex-col gap-4 text-colorDarkGray text-lg'>
      <h1 className='font-bold text-2xl lg:text-4xl mt-10'>About <span className='text-colorPrimary'>YHOME</span></h1>
      <p className='mb-4'>Welcome to YHOME, a modern real estate platform designed to connect property 
        owners and seekers seamlessly. Whether you’re a homeowner looking to list your property or a customer searching for 
        the perfect room or house, YHOME makes the process effortless and efficient.</p>

        <div className='flex flex-col gap-2 mb-4'>
        <h2 className=' font-bold text-colorPrimary'>What makes YHOME unique?</h2>
        <p>At YHOME, we believe in simplicity and convenience. Our platform allows:</p>
        <ul className='flex flex-col gap-1'>
          <li>
            <span className='font-semibold text-colorPrimary'>• Property Owners </span>
            to easily upload property details, including images, descriptions, and contact information, making it accessible to a wide audience.
          </li>
          <li>
            <span className='font-semibold text-colorPrimary'>• Customers </span>
            to explore a diverse range of properties, view detailed information, and directly connect with property owners without intermediaries.
            </li>
        </ul>
      </div>
      
      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='font-bold text-colorPrimary'>Why Choose YHOME?</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <span className='font-semibold text-colorPrimary'>Wide Selection of Properties:</span>
            From budget-friendly rooms to spacious homes, our listings cater to various needs and preferences.
          </li>
          <li>
            <span className='font-semibold text-colorPrimary'>Direct Connections:</span>
            Skip the middleman! Customers can contact property owners directly through the platform for inquiries or visits.
            </li>
          <li>
            <span className='font-semibold text-colorPrimary'>User-Friendly Interface:</span>
            A simple, intuitive platform that ensures a hassle-free experience for both owners and customers.
          </li>
          <li>
            <span className='font-semibold text-colorPrimary'>Transparency:</span>
            Clear property details, pricing, and contact information make decision-making easier.
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='font-bold text-colorPrimary'>Our Mission</h2>
        <p>
        Our mission is to bridge the gap between property owners and seekers by creating a transparent, user-friendly 
        platform where everyone can find their ideal living space.
        </p>
      </div>

      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='font-bold text-colorPrimary'>How YHOME works</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <span className='font-semibold text-colorPrimary'>For Owners:</span>
            Create an account, upload your property details, and reach potential tenants or buyers effortlessly.
          </li>
          <li>
            <span className='font-semibold text-colorPrimary'>For Customers:</span>
            Browse through our listings, compare properties, and contact owners directly to schedule visits or ask questions.
          </li>
          <li>
            <span className='font-semibold text-colorPrimary'>Fast and Secure:</span>
            All interactions happen directly between users, ensuring quick and reliable communication.
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='font-bold text-colorPrimary'>
        Your Journey Starts Here
        </h2>
        <p>
        Whether you’re a property owner or a seeker, YHOME is here to make your real estate experience as smooth and straightforward as possible.
        </p>
      </div>

      <div>
      <h1 className='font-bold text-2xl lg:text-4xl'>About <span className='text-colorPrimary'>Founder</span></h1>

      <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl text-colorPrimary'>Meet the Founder</h2>
        <div className='flex flex-col lg:flex-row gap-6'>
          <img 
            src={img}
            alt="Founder Image"
            className='w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg'
          />
          <div className='flex flex-col'>
            <p className='text-lg'>
              YHOME is founded by <span className='font-semibold text-colorPrimary'>Ashish Gupta</span>, a visionary entrepreneur passionate about simplifying the real estate experience. 
              With years of experience, Ashish saw the opportunity to create a platform that would bring together property owners and seekers seamlessly.
            </p>
            <p className='text-lg mt-4'>
              Ashish’s dedication to transparency, simplicity, and innovation has been the driving force behind YHOME’s success. He believes in creating solutions that benefit everyone involved, from homeowners to renters, by reducing the complexities traditionally associated with real estate transactions.
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='font-bold text-xl text-colorPrimary'>Contact the Founder</h3>
          <p className='text-lg mb-3'>
            Have any questions or ideas? Feel free to reach out directly to our founder! Click below to get in touch.
          </p>
          <a 
              href='https://www.linkedin.com/in/ashish-gupta-5b7282228/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block py-2 px-4 bg-colorPrimary text-white rounded-md'
            >
              Contact Founder
            </a>
        </div>
      </div>
    </div>
    </div>
  )
}