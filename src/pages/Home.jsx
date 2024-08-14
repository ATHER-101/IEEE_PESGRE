import React from 'react'
import Corousel from "../components/Corousel"
import AnnouncementStrip from "../components/AnnouncementStrip"

function Home() {
    return (
        <div>
            <Corousel />
            <AnnouncementStrip />
            <div className="p-5">
        <div className="text-4xl mt-5 text-center text-red-500" style={{fontWeight: 500}}><u>Important Info</u></div>
        <div className="mx-[12%] mt-5 mb-20"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis magni, minima, sint expedita culpa ipsum sed veritatis cum. Nam, eligendi est repudiandae natus sunt distinctio reiciendis hic sint sapiente iste, consequuntur laboriosam nobis itaque illum explicabo soluta possimus, eos a delectus qui labore corporis consectetur. Labore velit dolorum exercitationem nemo pariatur nostrum necessitatibus! Dolor, rerum animi modi possimus itaque sunt doloremque ut eius repellendus at eos suscipit quia est exercitationem. Vitae delectus ratione architecto eum voluptates natus a, fugiat impedit odit corporis debitis modi obcaecati. Rerum laudantium fugit sed nisi deleniti ducimus? Voluptatum et veniam repellendus excepturi tempora quas laborum aliquid ex autem sint nulla natus architecto vero quasi iste id obcaecati sapiente numquam culpa</div>
      </div>

    <div className="w-full bg-gray-200 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center mb-5 mt-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 1</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis magni, minima, sint expedita culpa ipsum sed veritatis cum. Nam, eligendi est repudiandae natus sunt distinctio reiciendis hic sint sapiente iste, consequuntur laboriosam nobis itaque illum explicabo soluta possimus, eos a delectus qui labore corporis consectetur. Labore velit dolorum exercitationem nemo pariatur nostrum necessitatibus! Dolor, rerum animi modi possimus itaque sunt doloremque ut eius repellendus at eos suscipit quia est exercitationem.</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 2</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis magni, minima, sint expedita culpa ipsum sed veritatis cum. Nam, eligendi est repudiandae natus sunt distinctio reiciendis hic sint sapiente iste, consequuntur laboriosam nobis itaque illum explicabo soluta possimus, eos a delectus qui labore corporis consectetur. Labore velit dolorum exercitationem nemo pariatur nostrum necessitatibus! Dolor, rerum animi modi possimus itaque sunt doloremque ut eius repellendus at eos suscipit quia est exercitationem.</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 3</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis magni, minima, sint expedita culpa ipsum sed veritatis cum. Nam, eligendi est repudiandae natus sunt distinctio reiciendis hic sint sapiente iste, consequuntur laboriosam nobis itaque illum explicabo soluta possimus, eos a delectus qui labore corporis consectetur. Labore velit dolorum exercitationem nemo pariatur nostrum necessitatibus! Dolor, rerum animi modi possimus itaque sunt doloremque ut eius repellendus at eos suscipit quia est exercitationem.</p>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center m-5">
          <h2 className="font-libre-franklin font-light text-2xl mb-4" style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 700}}>Header Text 4</h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat debitis, aperiam tempora veniam unde dolore? Explicabo suscipit delectus at harum, doloribus recusandae facilis magni, minima, sint expedita culpa ipsum sed veritatis cum. Nam, eligendi est repudiandae natus sunt distinctio reiciendis hic sint sapiente iste, consequuntur laboriosam nobis itaque illum explicabo soluta possimus, eos a delectus qui labore corporis consectetur. Labore velit dolorum exercitationem nemo pariatur nostrum necessitatibus! Dolor, rerum animi modi possimus itaque sunt doloremque ut eius repellendus at eos suscipit quia est exercitationem.</p>
        </div>

      </div>
    </div>
        </div>
    )
}

export default Home
