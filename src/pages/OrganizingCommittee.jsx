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
      <div className="px-[70px] md:px-[200px] py-5">
        <div className="text-3xl text-center mb-5 uppercase">
          Conference Organizing Committee
        </div>
        <div className="text-xl text-center text-blue-500">
          General Co-Chairs
        </div>
        <div className="text-lg text-center">
          Sertac Bayhan, Gazi University, Turkiye & HBKU, Qatar
          <br />
          Haitham Abu-Rub, Texas A&M University at Qatar, Qatar
          <br />
          Naki Guler, Gazi University, Turkiye
        </div>
      </div>

      {/* Committee Details */}
      <div className="flex flex-wrap m-7">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-blue-600 font-bold">Honorary Chair</h2>
          <p>Mariusz Malinowski, Warsaw University of Technology, Poland</p>

          <h2 className="text-blue-600 font-bold">Honorary Co-Chairs</h2>
          <p>Joao Martins, Nova School of Science and Technology, Portugal</p>
          <p>Ryszard Strzelecki, Gdansk University of Technology, Poland</p>

          <h2 className="text-blue-600 font-bold">Technical Program Chairs</h2>
          <p>Enrique R. Cadaval, University of Extremadura, Spain</p>
          <p>Krzysztof Górecki, Gdynia Maritime University, Poland</p>
          <p>Ramazan Bayindir, Gazi University, Turkiye</p>
          <p>Mohamad Shadmand, University of Illinois Chicago, USA</p>

          <h2 className="text-blue-600 font-bold">Special Session Chairs</h2>
          <p>Hadi Kanaan, Saint-Joseph University of Beirut, Lebanon</p>
          <p>Hasan Komurcugil, Eastern Mediterranean Univ., Turkiye</p>
          <p>Sheldon Williamson, Ontario Tech University, Canada</p>

          <h2 className="text-blue-600 font-bold">Publication Chairs</h2>
          <p>Leopoldo Franquelo, University of Seville, Spain</p>
          <p>Sevki Demirbas, Gazi University, Turkiye</p>
          <p>Luigi Piegari, Polytechnic University of Milan, Italy</p>
          <p>Giampaolo Buticchi, University of Nottingham Ningbo China</p>

          <h2 className="text-blue-600 font-bold">Publicity Chairs</h2>
          <p>Farzaneh Bagheri, Antalya Bilim University, Turkiye</p>
          <p>Anas Karaki, Hamad Bin Khalifa University, Qatar</p>
          <p>Akshay Rathore, Singapore Institute of Technology</p>
          <p>Erdal Irmak, Gazi University, Turkiye</p>
          <p>Jun Cheng, Ningbo University of Technology, China</p>
          <p>Hamza Makhamreh, Ozyegin University, Turkey</p>
          <p>Hasan Dincer, Istanbul Medipol University, Turkey</p>

          <h2 className="text-blue-600 font-bold">Finance Chair</h2>
          <p>Ugur Fesli, Gazi University, Turkiye</p>

          <h2 className="text-blue-600 font-bold">Student and Young Professionals Chairs</h2>
          <p>Dmitri Vinnikov, Tallinn University of Technology, Estonia</p>
          <p>Andrii Chub, Tallinn University of Technology, Estonia</p>
          <p>Hani Vahedi, Delft University of Technology, Netherlands</p>
          <p>Ali Sharida, Hamad Bin Khalifa University, Qatar</p>

          <h2 className="text-blue-600 font-bold">Local Organizing Committee</h2>
          <p>Fatih Issı, Cankiri Karatekin University, Turkiye</p>
          <p>Seyfettin Vadi, Gazi University, Turkiye</p>
          <p>Halil Ertaş, Akdeniz University, Turkiye</p>
          <p>Kemal Celik, Akdeniz University, Turkiye</p>
          <p>Murat Akın, Gazi University, Turkiye</p>
          <p>Rıdvan Canbaz, Hacı Bektas Veli University, Turkiye</p>
          <p>Halil İbrahim Aytekin, Akdeniz University, Turkiye</p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-blue-600 font-bold">International Advisory Board</h2>
          <p>K. Al Haddad, University of Quebec, Canada</p>
          <p>O. Kaynak, Bogazici University, Turkiye</p>
          <p>K. Abdellah, Djelfa University, Algeria</p>
          <p>A. M. Cardoso, University of Beira Interior, Portugal</p>
          <p>M. Aly, Universidad San Sebastián, Chile</p>
          <p>A. Barrado, Universidad Carlos III de Madrid, Spain</p>
          <p>P. Bauer, Delft University of Technology, Netherlands</p>
          <p>A. Benigni, Forschungszentrum Jülich, Germany</p>
          <p>S. Bernet, Technische Universitat Dresden, Germany</p>
          <p>R. Blasco, Technical University of Valencia, Spain</p>
          <p>C. Cecati, University of L’Aquila, Italy</p>
          <p>C. Chakraborty, Indian Institute of Technology Kharagpur, India</p>
          <p>R. W. De Doncker, RWTH Aachen, Germany</p>
          <p>F. Flores, Universidad Andres Bello, Chile</p>
          <p>F. Gao, University of Technology of Belfort-Montbéliard, France</p>
          <p>O. García, Universidad Politécnica de Madrid, Spain</p>
          <p>A. Emadi, McMaster University, Canada</p>
          <p>A. Iqbal, Qatar University, Qatar</p>
          <p>P. Karamanakos, Tampere University, Finland</p>
          <p>J. W. Kolar, ETH Zurich, Switzerland</p>
          <p>S. Kouro, Federico Santa María Technical University, Chile</p>
          <p>J. Kyyrä, Aalto University, Finland</p>
          <p>M. Liserre, University of Kiel, Germany</p>
          <p>Y. Liu, Beihang University, China</p>
          <p>O. Lucía, University of Zaragoza, Spain</p>
          <p>P. Mattavelli, University of Padova, Italy</p>
          <p>H. Mashinchi Maheri, University of Tabriz, Iran</p>
          <p>R. Mastromauro, University of Florence, Italy</p>
          <p>V. Monteiro, University of Minho, Portugal</p>
          <p>A. Moreno, University of Cordoba, Spain</p>
          <p>S. Norrga, KTH Royal Institute of Technology, Sweden</p>
          <p>G. Petrone, University of Salerno, Italy</p>
          <p>S. Pinto, University of Lisboa, Portugal</p>
          <p>A. Pires, Polytechnic Institute of Setubal, Portugal</p>
          <p>J. Rabkowski, Warsaw University of Technology, Poland</p>
          <p>M. Ricco, University of Bologna, Italy</p>
          <p>S. Rivera, Universidad de los Andes, Chile</p>
          <p>R. Rizzo, Università di Napoli Federico II, Italy</p>
          <p>J. Rodriguez, Andrés Bello National University, Chile</p>
          <p>M. Shafie-khah, University of Vaasa, Finland</p>
          <p>Y. Shi, University of Victoria, Canada</p>
          <p>T. Strasser, Austrian Institute of Technology, Austria</p>
          <p>S. Vazquez, University of Seville, Spain</p>
          <p>J. Onno Krah, TH Köln, Germany</p>
          <p>H. Gao, Harbin Institute of Technology, China</p>
          <p>M. Trabelsi, Kuwait College of Science and Technology, Kuwait</p>
          <p>S. Khalil, University of Hertfordshire, UK</p>
          <p>Z. Li, Ningbo University of Technology, China</p>
          <p>L. Yang, Ningbo University of Technology, China</p>
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommittee;
