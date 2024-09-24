import Navbar from "./Navbar";

const Psycho = () => {
    const movies = [
        "Ghost in the Shell (1995)",
        "Ghost in the Shell 2: Innocence (2004)",
        "Ghost in the Shell: Stand Alone Complex - Solid State Society (2006)",
        "Ghost in the Shell: Arise (2013)",
        "Ghost in the Shell: The New Movie (2015)",
        "Ghost in the Shell (2017)",
    ];
    
    const story = "Psycho-Pass is set in a dystopian future where a powerful network of psychometric scanners determines the threat level of each citizen. The story follows Akane Tsunemori, a young inspector in the Public Safety Bureau, as she navigates the moral complexities of a system that prioritizes societal safety over individual freedom.";

    return (
        <div className="relative bg-cover bg-center h-auto">
            <Navbar />
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mt-4">Psycho-Pass Movies</h1>
                <p className="mt-4 text-lg text-center">{story}</p>

                {/* Grid for movies */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {movies.map((movie, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-lg">{movie}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Psycho;