import React from "react";
import "../styles/Pages.css";


function Characters() {
    return (
        <div className="characters-container">
        <h2>Personajes</h2>
        <div className="character-card">
            <img 
                src="https://steamuserimages-a.akamaihd.net/ugc/937207815092803638/9ADA31315DE8621044B95D756CAF1CCB5B76170C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
                alt="Arthur Morgan" 
                className="character-image" 
            />
            <h3>Arthur Morgan</h3>
            <p>
                Arthur Morgan es el protagonista principal de <strong>Red Dead Redemption II</strong>. 
                Es un forajido leal al grupo de Dutch van der Linde, pero con un fuerte sentido de moralidad.
                Nacido como un huérfano, tras conocer a Dutch siendo muy joven, se convirtió en su brazo ejecutor y más apreciado miembro de la banda, idealizando a Dutch y tomándolo como una figura paterna. 
                Siendo un hombre malhumorado, melancólico y tosco, posee su propio código de honor.
                Citas:
                Escúchame... Cuando llegue el momento... tendrás que correr y no mirar atrás. Esto se acabó.
                ¿Tienes algo de dinero para mi, muchacho? He visto su nombre en nuestro libro de cuentas.
                Cuando tu madre haya terminado de llorar a tu padre, puede que haga que siga de luto, por ti.
                Nos persiguen agentes de la ley en tres estados diferentes. Nos han perseguido desde el oeste, nos han perseguido por las montañas.
                ¿Dónde está nuestro dinero?
                [¿Estás de mi parte?] Siempre, Dutch.
                Todo esto está llegando a su fin. Somos más fantasmas que personas.
                No hay nada más importante para mi que esta banda.
                Ojalá las cosas fueran diferentes. Pero no somos nosotros los que hemos cambiado.
                Siempre hay un maldito tren.
                Sé leal a lo que importa.
                Tuve un hijo... Falleció. Tenía una chica que me amaba... Lo tiré a la basura. Mi mamá murió cuando yo era niño, y mi papá... bueno, lo vi morir. Y no fue lo suficientemente pronto
                Al final, Micah... a pesar de mis mejores esfuerzos por hacer lo contrario... resulta que he ganado
                Pero no fuimos nosotros los que cambiaron
            </p>
        </div>
        <div className="character-card">
                <img 
                    src="https://img.goodfon.com/wallpaper/big/6/23/red-dead-redemption-2-john-marston-red-dead-art.webp" 
                    alt="John Marston" 
                    className="character-image" 
                />
                <h3>John Marston</h3>
                <p>
                John Marston es un forajido huérfano, el cual fue adoptado por Dutch Van der Linde, uniéndose a su banda. Junto a Arthur Morgan,son los protagonistas principales de la franquicia de Red Dead Redemption.
                Después de que Arthur descubra que Micah era el traidor, es cuando llega John malherido gritándole a Dutch por haberlo abandonado, es cuando los Pinkerton llegan y empiezan a disparar a Arthur y John.
                Después de huir, Arthur se despide de John y le repite que escape y tenga una vida pacifica con su familia.
                En 1907 es cuando comienza su vida de granjero, junto con Uncle, Abigail y Jack. 
                Sin embargo su pasado regresó una vez más al enterarse de que Micah Bell, el hombre que traicionó a la banda de Dutch y por el cual Arthur perdió la vida, estaba aún vivo, por lo que decidió encontrarlo y matarlo.
                Citas:
                Yo ya tengo una vida. Bueno, la tenía, y ahora quiero recuperarla. O podría decirse que tenía dos y que ahora intento acabar con una para que la otra sobreviva
                A veces me digo que todo sucede por algo. Por ejemplo, que fue el destino el que me trajo aquí. Pero yo trazo mi propio camino. Creer en una especie de plan divino no me va a devolver a mi mujer ni a mi hijo
                Yo también tengo familia, amigo. Y para que ambos volvamos a verlas, le sugiero terminar esto amistosamente
                Algunos árboles florecen, otros mueren. Algunas reses crecen fuertes, otras son devoradas por lobos. Algunos hombres nacen lo bastante ricos e idiotas para disfrutar de la vida. Nada es justo. Ya lo sabes
                </p>
            </div>

            <div className="character-card">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiJ25GE5MAkyQLnySyQjFpaXPPeFG1n_emw&s" 
                    alt="Sadie Adler" 
                    className="character-image" 
                />
                <h3>Sadie Adler</h3>
                <p>
                    Sadie Adler es una de las integrantes más valientes y fuertes del grupo. 
                    Su evolución a lo largo del juego la convierte en uno de los personajes más interesantes.
                    Aparenta tener una personalidad valiente con una actitud ruda, algo raramente visto en las mujeres de aquella época.
                    Es impulsiva y su deseo de vengar a su marido fallecido y a sus seres queridos muertos por criminales la llevan a cometer asesinatos a sangre fría. 
                    Esto último no deja de llamar la atención puesto que no tiene problemas en eliminar a todo aquel que se interponga en su camino, pero a la vez es sumamente leal con quienes ella siente aprecio.
                    Citas:
                    Era un buen hombre, mi Jackie. ¡Me convirtieron en un monstruo, Arthur! Pero sus recuerdos… siguen siendo puros.
                    Eres el único de estos idiotas en el que confío.
                </p>
            </div>
        </div>
    );
}

export default Characters;
