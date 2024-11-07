
import Navbar from './Navbar';
import FloatingMusicButton from '../FloatingMusicButton';
import Footer from "./Footer";
import cards from "../Constants/Dreamdata";

const DreamWorks = () => {


  return (
    <div className='main-content pt-24'>
      {/* Navbar */}
      <Navbar />

      {/* Main background section */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee4200b4-1ca8-4ef7-9ccb-1b66359eb247/dfzdlcd-c0e41887-185c-4b65-a24f-e88ba60ee8f4.jpg/v1/fill/w_1192,h_670,q_70,strp/dreamworks_wallpaper_by_maxtop9002_dfzdlcd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWU0MjAwYjQtMWNhOC00ZWY3LTljY2ItMWI2NjM1OWViMjQ3XC9kZnpkbGNkLWMwZTQxODg3LTE4NWMtNGI2NS1hMjRmLWU4OGJhNjBlZThmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MmZD7VVsp2Fx8uii0TWUCo0J7Q_JEMyMLnEGYo2twQM')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Dreamworks
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated <br /> classics that have captured hearts across the globe.
            </p>
          </div>
        </div>

        {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
                            style={{
                                backgroundImage: `url(${card.backgroundImage})`,
                            }}
                        >
                            {/* Overlay for text */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                                    <div
                                        className="bg-purple-800 h-full rounded-full"
                                        style={{ width: `${card.rating * 10}%` }} // Adjusted width calculation
                                    ></div>
                                </div>
                                <p className="text-white text-lg">{card.rating}</p>
                                 <a
                                    href={card.downloadLink} // Make sure movieData includes a downloadLink property
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                                    download
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
      </div>
      <Footer/>
          <FloatingMusicButton />
    </div>
  );
};

export default DreamWorks;
