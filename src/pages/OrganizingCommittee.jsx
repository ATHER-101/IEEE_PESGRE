import React from 'react';

function OrganizingCommittee() {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[40vh] md:h-auto object-cover"
          src="/tmp1.jpg"
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="absolute top-[200px] md:top-[280px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6vw]">
        <h1
          className="justify-center text-center text-white"
          style={{ fontFamily: 'Libre Franklin, sans-serif', fontWeight: 800 }}
        >
          Organising Committee
        </h1>
      </div>

      {/* text */}
      <div className="px-8 md:px-34 py-5">
        <div className="text-3xl text-center mb-5 uppercase">
          Conference Organizing Committee
        </div>
        <div className="text-xl text-center text-blue-500">
          General Co-Chairs
        </div>
        <div className="text-lg text-center">
          Satish Naik Banavath, Indian Institute of Technology Dharwad, Karnataka, India
          <br />
          Dmitri Vinnikov, Tallinn University of Technology, Estonia
          <br />
          Sheldon Williamson, Ontario Tech University, Canada
        </div>
      </div>

      {/* Committee Details */}
      <div className="flex flex-wrap mx-10 mb-10">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-blue-600 font-bold">Honorary Chair</h2>
          <p> Andy Knight, President, IEEE IAS </p>
          <p> Brad Lehman, President, IEEE PELS </p>
          <p> Milos Manic, President, IEEE IES </p>
          <p> Shay Bahramirad, President, IEEE PES </p>
          <p> Muhammed Kasim S, Chair, IEEE Kerala Section </p>
          <p> Vasanthi V, Chair IA/IE/PELS Jt. Chapter Kerala Section </p>

          <h2 className="text-blue-600 font-bold">Technical Program Chairs</h2>
          <p>Abhijit Kshirsagar, IIT Dharwad, India </p>
          <p>Andrii Chub, Tallinn University of Technology, Estonia </p>
          <p>Rajendra Singh, Clemson University, Clemson USA </p>
          <p>Bijuna Kunju K, TKMCE, Kollam, India</p>

          <h2 className="text-blue-600 font-bold">Special Session Chairs</h2>
          <p>Deepak Ronanki, IIT Madras, India</p>
           <p> Sertac Bayhan, Hamad Bin Khalifa University, Qatar</p>
           <p> Sairaj Dhople, University of Minnesota, USA</p>
          
          <h2 className="text-blue-600 font-bold">Publication Chairs</h2>
          <p>Srinivas Bhaskar Karanki, IIT Bhubaneswar, India </p>
          <p>  Amarkumar Ayodhyasingh Kushwaha, IIT Dharwad, India </p>
          <p> Jaison Mathew, Government Engineering College Thrissur, Kerala, India</p>
      
          <h2 className="text-blue-600 font-bold">Publicity Chairs</h2>
           <p>Animesh Kumar Sahoo, IIT Dharwad, India</p>
           <p> Naga Brahmendra , IIT Palakad, India</p>
           <p> Biju K, APJ Abdul Kalam Technological University, Kerala, India</p>
          
          <h2 className="text-blue-600 font-bold">Finance Chair</h2>
          <p>Satish Naik Banavath, IIT Dharwad, India </p>
          <p>  Prathyasa Bhui, IIT Dharwad, India</p>
           <p> Nandan S, Treasurer, IEEE Kerala Section, India</p>

          <h2 className="text-blue-600 font-bold">Student and Young Professionals Chairs</h2>
          <p>Edivan Laercio Carvalho da Silva, Tallinn University of Technology, Estonia</p>
          <p>Filipe Pinarello Scalcon, University of Calgary, Canada</p>
           <p> Sai Ram Boggavarapu, IIT Dharwad, India</p>
        
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-blue-600 font-bold">International Advisory Board</h2>
         <p> S C Srivasthava, IIT Kanpur, India</p>
         <p>  Amit Kumar Gupta, Rolls Royce, Singapore</p>
          <p>Bhim Singh, IIT Delhi, India</p>
          <p>C. Cecati, University of L’Aquila, Italy</p>
          <p>C. Chakraborty, Indian Inst. of Technology Kharagpur, India</p>
          <p>Chun Che Fung, Director, IEEE R10</p>
          <p>Drazen Dujic, École Polytechnique Fédérale de Lausanne – EPFL, Switzerland</p>
          <p>Enrique Romero Cadaval, University of Extremadura, Badajoz, Spain</p>
          <p>Frede Blaabjerg, Aalborg University</p>
          <p>G. Bhuvaneswari, Mahindra University, India</p>
           <p>Giovanni De Carne, KIT, Germany</p>
          <p>Gopakumar K, IISc Bangalore, India</p>
          <p>Holtz, University of Wuppertal, Germany</p>
          <p>J. Rabkowski, Warsaw University of Technology, Poland</p>
          <p>Johann W. Kolar, ETH Zurich, Zurich, Switzerland</p>
          <p>Joseph Ojo, Tennessee Technological University</p>
          <p>Kaushik Rajashekara, University of Houston, Texas, USA</p>
          <p>L Umanand, IISC Bangalore, India</p>
          <p>Mariusz Malinowski, Warsaw University of Technology, Poland</p>
          <p>Pragasen Pillai, Concordia University, Canada</p>
          <p>Prasad Enjeti, Texas A&M University, USA</p>
          <p>S S Murthy, BoG Member, IIT Dharwad</p>
          <p>Subba Reddy B, IISc Bangalore</p>
          <p>S. Norrga, KTH Royal Institute of Technology, Sweden</p>
          <p>Saifur Rahman, Advanced Research Institute at Virginia Tech, USA</p>
          <p>Sameer S M, Secretary, IEEE R10</p>
          <p>Samir Kouro, Universidad Tecnica Federico Santa Maria Valparaiso, Chile</p>
          <p>Sanjib Panda, NUS Singapore</p>
          <p>Suresh Nair, Immediate past chair, IEEE India Council</p>
          <p>Vivek Agarwal, IIT Bombay, India</p>
          <p>V. Fernão Pires, Polytechnic Institute of Setubal, Portugal</p>
         
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommittee;
