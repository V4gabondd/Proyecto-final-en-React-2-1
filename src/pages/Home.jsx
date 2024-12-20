import React from "react";
import "../styles/Pages.css";

function Home() {
  return (
      <div className="homeIntro">
          <div className="homeTextoEntrada">
              <h1>Bienvenido al Viejo Oeste</h1>
              <p>
                  Sumérgete en la épica narrativa de <strong>Red Dead Redemption</strong>, 
                  donde la lealtad, la traición y la lucha por la supervivencia definen cada decisión. 
                  Explora vastos paisajes llenos de vida, enfréntate a bandidos y forja tu camino en un mundo lleno de desafíos y oportunidades.
              </p>
              <p> Red Dead Redemption 2 es un videojuego de acción-aventura western desarrollado y publicado por Rockstar Games. Se estrenó el 26 de octubre de 2018. 
                Es la tercera entrega de la saga Red Dead y precuela del título Red Dead Redemption de 2010.
                Ambientado en 1899 en un entorno ficticio, sigue las aventuras de Arthur Morgan y sus compañeros dentro de la banda de Dutch van der Linde doce años antes de la anterior entrega. En este videojuego regresan personajes como John Marston, el protagonista del título previo en una aventura donde el jugador debe enfrentar a otros criminales, a las fuerzas del orden y ejecutar asaltos en un ambiente del salvaje oeste.
                El juego es presentado en perspectivas de primera y tercera persona en donde el jugador podrá vagar libremente en un entorno de mundo abierto completamente interactivo. Como parte de las actividades, el jugador podrá montar a caballo, asaltar, cazar, participar en tiroteos e incluso interactuar con personajes no jugables. Asimismo el jugador podrá mantener la calificación de Honor del personaje a través de elecciones y actos morales. Un sistema de recompensas rige la respuesta de las fuerzas del orden y los cazadores de recompensas a los crímenes cometidos por el jugador.
                El juego narra los acontecimientos que llevaron a la caída en desgracia de la Banda de Dutch van der Linde y del cómo John Marston cambió su forma de ser gracias al protagonista de esta entrega, Arthur Morgan.</p>
          </div>
          <div className="imagenHome">
              <img 
                  src="https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270" 
                  alt="Paisaje del Viejo Oeste" 
              />
          </div>
          
          <div className="VideoHome">
        <iframe width="1128" height="635" src="https://www.youtube.com/embed/IjZwoOwxqtM" title="Red Dead Redemption 2: Tráiler de lanzamiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
  );
}

export default Home;
