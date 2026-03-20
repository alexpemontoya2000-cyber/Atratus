import { useEffect } from 'react'
import { setSEO } from '../utils/seo'
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import CalloutCard from '../components/CalloutCard'
import CTASection from '../components/CTASection'

export default function BlogArticle() {
  useEffect(() => {
    setSEO({
      title: 'Qué llevar a tu primera caminata por el monte colombiano | Atratus',
      description: 'Guía completa de ropa y equipamiento para senderismo en Colombia: chaqueta impermeable, pantalones técnicos, botas y accesorios. Diseñado para el clima tropical de montaña.',
      canonical: 'https://atratus-seo-content.vercel.app/blog/que-llevar-caminata-monte-colombiano',
      keywords: 'chaqueta impermeable, ropa para senderismo Colombia, botas de senderismo, pantalones de senderismo, implementos para el monte, ropa outdoor Colombia',
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <article>
      {/* HERO */}
      <Hero
        breadcrumb="Inicio › Blog › Guía de senderismo"
        label="Guía Outdoor"
        title="¿Qué es Senderismo? Qué llevar a tu primera caminata por el monte colombiano"
        subtitle="Guía completa — desde la chaqueta impermeable hasta las medias técnicas"
        meta="Lectura de 8 min · Equipo Atratus · Actualizado 2026"
      />

      {/* INTRO */}
      <section className="bg-bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-selva-deep mb-8">
              El monte colombiano no es cualquier monte
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
              Colombia tiene algo que pocos países pueden decir: caminar una hora en línea recta y pasar de un bosque húmedo tropical a un páramo donde la neblina te abraza a 3.800 metros. Eso suena poético, pero tiene una implicación muy práctica para quien va a caminar: el clima cambia sin avisar, el terreno es impredecible y lo que te pongas encima puede ser la diferencia entre disfrutar una jornada o sobrevivirla.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Esta guía no es un listado genérico sacado de una revista de viajes europea. Está pensada para quienes caminan senderos colombianos — desde los cerros orientales de Bogotá hasta la Sierra Nevada de Santa Marta, pasando por el Cocuy, el Chocó y los páramos de Santurbán. Porque la ropa para senderismo en Colombia tiene necesidades que no resuelve cualquier marca internacional que diseñó sus productos pensando en los Alpes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CHAQUETA IMPERMEABLE */}
      <section className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-on-dark mb-8">
              La chaqueta impermeable: la prenda que define tu experiencia
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-8">
              <CalloutCard
                stat="4.400 búsquedas/mes"
                text="Más de 4.400 personas al mes en Colombia buscan 'chaqueta impermeable'. Es la prenda outdoor más buscada del país."
                variant="green"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed mb-6">
              Si hay una sola prenda que justifica investigar bien antes de comprar, es la chaqueta impermeable. No es casualidad que sea la búsqueda más frecuente en Google cuando alguien empieza a preparar una salida al monte: más de 4.400 personas al mes en Colombia buscan exactamente eso. Y es que en un país donde puede llover en cualquier momento — sin importar lo que diga el pronóstico — una buena chaqueta impermeable no es un lujo, es lo mínimo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed">
              El error más común es comprar una chaqueta gruesa de invierno europeo creyendo que sirve para el trópico de montaña. No. En Colombia necesitás algo liviano, que respire, que se pueda guardar en un bolsillo del morral y que te proteja del aguacero sin convertirte en un horno ambulante cuando sale el sol 20 minutos después. Las chaquetas que diseña Atratus, por ejemplo, están pensadas para exactamente eso: impermeabilidad real en condiciones tropicales, sin el peso ni el calor de las marcas que diseñaron para otro clima.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CAPA BASE */}
      <section className="bg-bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-pluma-deep mb-8">
              Capa base: lo que va contra tu piel importa más de lo que creés
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
              El segundo error clásico del caminante principiante es ponerse una camiseta de algodón. El algodón absorbe el sudor, se queda húmedo y cuando llega el frío de altura — porque siempre llega — el cuerpo se enfría brutalmente rápido. En ambientes tropicales de montaña, donde sudás subiendo y te congelás en la cumbre, eso no es solo incómodo. Puede ser peligroso.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              La capa base ideal es de tela sintética de secado rápido o de mezclas técnicas que regulen la temperatura. Una camisa de manga larga con protección UV es la jugada inteligente: te protege del sol directo en los tramos expuestos, de los mosquitos en zona boscosa y se seca en minutos si te moja un aguacero sorpresa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PANTALÓN */}
      <section className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-on-dark mb-8">
              De la cintura para abajo: el pantalón define la caminata
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-8">
              <CalloutCard
                stat="260 búsquedas/mes"
                text="260 personas buscan cada mes en Colombia pantalones de senderismo técnicos — un nicho en crecimiento constante."
                variant="pluma"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed mb-6">
              Un jean no es pantalón de trekking. Punto. Es pesado cuando se moja, no se estira para pasar obstáculos y se demora un siglo en secar. Los pantalones de senderismo técnicos — que unas 260 personas buscan cada mes en Colombia — están diseñados para moverse con vos: tela liviana con elastano, secado rápido, resistencia a rasguños de ramas y generalmente protección UV.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed">
              En Colombia, donde muchos senderos combinan terreno húmedo con pasos de quebrada, tener un pantalón que drene rápido y no se pegue a las piernas no es un capricho de montañista profesional. Es sentido común para cualquiera que quiera caminar sin arrepentirse.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTAS */}
      <section className="bg-bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-selva-deep mb-8">
              Las botas: la base de todo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-8">
              <CalloutCard
                stat="720 búsquedas/mes"
                text="Las botas de senderismo son el 2do producto más buscado del ecosistema outdoor en Colombia, con 720 búsquedas mensuales."
                variant="green"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
              Con 720 búsquedas mensuales en Colombia, las botas de senderismo son el segundo producto más buscado del ecosistema outdoor. Y por buena razón: un mal calzado no solo genera ampollas — puede provocar lesiones de tobillo en terreno irregular. El mercado colombiano está dominado por Columbia, Decathlon y Croydon, pero la clave no es comprar la marca más cara sino la bota que mejor se adapte al tipo de terreno que vas a caminar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Para senderos húmedos y barro (la mayoría en Colombia), la impermeabilidad y el agarre de la suela son innegociables. Para caminatas cortas en cerros secos, una bota media caña con buena amortiguación es suficiente. La peor decisión es salir con tenis de running o con botas de construcción disfrazadas de outdoor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ACCESORIOS */}
      <section className="bg-bg-moss">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-pluma-deep mb-8">
              Accesorios que parecen menores pero cambian todo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
              Un buen cuellito multifuncional protege del sol, del polvo y del frío en un solo accesorio. Repelente de insectos es innegociable en zonas por debajo de los 2.000 metros. Una gorra o sombrero con ala ancha te salva de la insolación en los tramos expuestos. Y un par de medias técnicas — sí, las medias importan — evitan ampollas que pueden arruinar los últimos cinco kilómetros de una caminata que venía siendo perfecta.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Se trata de pensar cada prenda como una herramienta con función específica, no como decoración. En el monte, lo que llevás puesto trabaja por vos o trabaja en tu contra.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-on-dark mb-8">
              Comprá para el monte colombiano, no para el monte de otros
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed mb-6">
              El mercado está lleno de marcas que diseñan ropa para condiciones que no existen aquí. Frío extremo permanente, nieve constante, desiertos secos. Colombia no es eso. Colombia es humedad, cambio de temperatura drástico, sol tropical a 3.500 metros, lluvia impredecible y biodiversidad que necesita ropa que no la agreda.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-text-on-dark/80 text-lg leading-relaxed mb-6">
              Marcas como Atratus entienden eso porque nacieron de ahí. Nacieron de Toña y Mate metiéndose al monte, probando telas bajo la lluvia del Chocó, subiendo páramos con prototipos que después se convirtieron en productos reales. Eso no lo reemplaza una marca importada con buenas fotos.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-body text-text-on-dark/70 text-lg leading-relaxed italic">
              La próxima vez que te preparés para una caminata, antes de empacar, hacete una pregunta: ¿lo que llevás puesto fue pensado para donde vas, o fue pensado para donde no vas? Esa respuesta cambia todo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        heading="Conocé la colección Piel de Selva"
        body="Ropa outdoor diseñada en Colombia, para el monte colombiano. Inspirada en el Colibrí Paramuno."
        buttonText="Conocé la colección Piel de Selva →"
        buttonHref="https://atratuscolombia.com"
        dark
      />
    </article>
  )
}
