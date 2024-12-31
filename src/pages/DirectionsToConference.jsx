import React from 'react'
import Corousel from "../components/Corousel"

function DirectionsToConference() {
  return (
    <div>

      <Corousel text="Location" />

      <div className="text-3xl text-center m-5 mb-10 uppercase">
        Location
      </div>
      <div className="my-10">
        <div className="mx-auto w-full max-w-4xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3429.4408301653116!2d74.93234621941126!3d15.485566230221043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf32db0fffffff%3A0x41e1ca5b252a94d!2sIndian%20Institute%20of%20Technology%20Dharwad!5e1!3m2!1sen!2sus!4v1729417961478!5m2!1sen!2sus" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default DirectionsToConference;
