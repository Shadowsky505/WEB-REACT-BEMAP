import foto1 from "../assets/Recurso1.jpg"

export const Modulo1 = () => {
    return ( <>
    
        <div className="bg-azulClaro mx-10 mt-10 rounded-2xl grid grid-cols-2 shadow-xl shadow-slate-500">

            <div className="flex flex-col items-center justify-center ms-10 p-0" id="izquiera">
                <h1 className="font-russo text-7xl text-white drop-shadow-corta">¿QUÉ ES BEMAP?</h1>
                <p className="font-Montserrat text-white text-justify px-28 mt-5 text-4xl drop-shadow-md">
                Es una poderosa herramienta diseñada para brindar a la comunidad 
                information vital sobre la calidad del aire y alertas tempranas 
                relacionadas con la salud pública.
                </p>
            </div>
            <img src={foto1} alt="" className="scale-75 rounded-3xl shadow-xl shadow-slate-700 outline outline-8 outline-gray-100"/>

        </div>
    
    </> );
}

export const Modulo2 = () => {
    return ( <>
    
    <div className="bg-azulClaro mx-10 mt-10 rounded-2xl grid grid-cols-2 shadow-xl shadow-slate-500">
        <img src={foto1} alt="" className="scale-75 rounded-3xl shadow-xl shadow-slate-700 outline outline-8 outline-gray-100"/>

        <div className="flex flex-col items-center justify-center ms-10" id="izquiera">
            <h1 className="font-russo text-6xl text-white drop-shadow-corta">
                ¿CÓMO LO HAREMOS?
                </h1>
            <p className="font-Montserrat text-white text-justify px-28 mt-5 text-4xl drop-shadow-md">
            Lograremos llegar a toda la comunidad a través 
            de datos precisos y una experiencia de usuario eficaz y ergonómica.
            </p>
        </div>

    </div>

    </> );
}

export const Modulo3 = () => {
    return ( <>
    
    <div className="flex flex-col items-center justify-center ms-10" id="izquiera">
            <h1 className="font-russo text-6xl text-white drop-shadow-corta">
                ¿CÓMO LO HAREMOS?
                </h1>
            <p className="font-Montserrat text-white text-justify px-28 mt-5 text-4xl drop-shadow-md">
            Lograremos llegar a toda la comunidad a través 
            de datos precisos y una experiencia de usuario eficaz y ergonómica.
            </p>
        </div>

    </> );
}