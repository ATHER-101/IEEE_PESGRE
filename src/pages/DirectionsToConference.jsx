import React from 'react'
import Corousel from "../components/Corousel"

function DirectionsToConference() {
  return (
    <div>

      <Corousel text="Location" />

      <div className="text-3xl text-center m-5 mb-10 uppercase">
        Location
      </div>

      <div className='md:mx-[170px] mx-3 mb-3'>
        Hubballi (also Hubli) and dhArwAD are twin cities just about 20km apart. Hubballi is a major railway junction with about a dozen trains to Bengaluru (8-9 hours) daily. There are many buses between Hubballi/dhArwAD and major cities such as Bengaluru, Hyderabad, Mumbai etc.
      </div>
      <div className='md:mx-[170px] mx-3'>
        dhArwAD is connected with three airports. Hubballi is the nearest airport to IIT DHARWAD (about 30 minutes). At present Air India, Indigo, Spice-jet etc. operates flights between Ahmedabad, Bengaluru, Chennai, Goa, Hyderabad, Kochi, Mumbai etc. Belgavi (Belgaum) airport is about 50 minutes away. Goa airport is about 160 km from IIT DHARWAD. dhArwAD railway station and Hubli railway stations are at distances 15 kms and 35 kms respectively from the current campus.
      </div>

      <div className="my-10 mx-3">
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
