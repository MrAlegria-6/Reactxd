import meme from "../meme.png"

export function Carrusel() {
    return (
        <div id="carouselExample" className="carousel slide m-0">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/*Desde Public*/}
                    <img src="pera.jpg" className="h-50 w-50 p-400 m-0" alt="..." />
                </div>
                <div className="carousel-item m-0">
                    {/*Desde Src*/}
                    <img src= {meme} className="h-50 w-50 p-400 m-0" alt="..." />
                </div>
                <div className="carousel-item m-0">
                    <img src="https://9to5google.com/wp-content/uploads/sites/4/2024/08/Gemini-Advanced-Imagen-3-1.jpg" className="h-50 w-50 p-400 m-0" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
