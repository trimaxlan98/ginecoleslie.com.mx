import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import copaMenstrualImg from '@/assets/copa-menstrual.png';

const articles = [
  {
    title: "La importancia del ácido fólico en el primer trimestre",
    category: "Cuidados Prenatales",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
    date: "15 Oct 2023",
    readTime: "4 min",
    excerpt: "Descubre por qué esta vitamina es crucial para el desarrollo temprano de tu bebé y cómo incorporarla en tu dieta.",
    content: [
      {
        heading: "¿Qué es el ácido fólico y por qué es tan importante?",
        body: "El ácido fólico es la forma sintética de la vitamina B9, un nutriente esencial que el cuerpo utiliza para producir nuevas células. Durante el embarazo, su importancia se multiplica: es fundamental para el correcto cierre del tubo neural del bebé, estructura que dará origen al cerebro y a la médula espinal.",
      },
      {
        heading: "¿Cuándo debo empezar a tomarlo?",
        body: "Lo ideal es comenzar a suplementarte con ácido fólico al menos un mes antes de intentar un embarazo y continuar durante todo el primer trimestre. Esto se debe a que el tubo neural se cierra entre los días 21 y 28 de gestación, muchas veces antes de que la mujer sepa que está embarazada. La dosis recomendada de manera general es de 400 a 800 mcg diarios, aunque en casos de antecedentes de defectos del tubo neural o ciertas condiciones médicas, tu ginecóloga puede indicar dosis más altas.",
      },
      {
        heading: "¿Solo debo tomar suplementos?",
        body: "Los suplementos son la forma más segura de garantizar la dosis adecuada, pero también puedes apoyarte con alimentos ricos en folato natural: espinacas, brócoli, lentejas, garbanzos, espárragos, aguacate y cereales fortificados. Sin embargo, el folato de los alimentos tiene menor biodisponibilidad que el suplemento, por lo que no deben ser la única fuente durante el embarazo.",
      },
      {
        heading: "¿Qué pasa si no lo tomo?",
        body: "La deficiencia de ácido fólico en las primeras semanas de gestación está asociada a defectos del tubo neural como la espina bífida y la anencefalia. También puede aumentar el riesgo de paladar hendido, malformaciones cardíacas y parto prematuro. Por eso, aunque no estés planeando un embarazo de forma inmediata, si estás en edad reproductiva y tienes vida sexual activa, consulta a tu ginecóloga sobre la suplementación preventiva.",
      },
      {
        heading: "Consejo de la Dra. Leslie",
        body: "En mi consulta siempre enfatizo que la suplementación con ácido fólico es una de las medidas preventivas con mayor evidencia científica en obstetricia. No esperes a tener el resultado positivo de la prueba de embarazo: habla conmigo antes de buscar tu bebé y planifiquemos juntas los mejores cuidados desde el inicio.",
      },
    ],
  },
  {
    title: "Mitos y realidades sobre la copa menstrual",
    category: "Salud de la Mujer",
    image: copaMenstrualImg,
    date: "28 Sep 2023",
    readTime: "5 min",
    excerpt: "Resolvemos las dudas más comunes sobre el uso de la copa menstrual, sus beneficios y cómo elegir la adecuada.",
    content: [
      {
        heading: "¿Qué es la copa menstrual?",
        body: "La copa menstrual es un dispositivo de silicona médica, látex o elastómero termoplástico con forma de campana que se inserta en la vagina para recolectar el flujo menstrual en lugar de absorberlo. A diferencia de las toallas y tampones, puede reutilizarse por varios años, lo que la convierte en una opción ecológica y económica.",
      },
      {
        heading: "Mito 1: 'La copa menstrual puede romper el himen'",
        body: "Realidad: El himen es una membrana flexible con una abertura natural que permite el flujo menstrual. La copa se inserta plegada y, con la práctica, su uso no implica más tensión que la que ejerce un tampón. Si tienes dudas sobre tu anatomía o sientes incomodidad al inicio, consulta a tu ginecóloga para recibir orientación personalizada.",
      },
      {
        heading: "Mito 2: 'La copa puede perderse dentro de la vagina'",
        body: "Realidad: La vagina es un canal con fondo: termina en el cuello uterino, que actúa como una barrera natural. La copa no puede 'perderse' ni pasar más allá de ese punto. Si en algún momento sientes dificultad para extraerla, relaja el piso pélvico, agáchate y empuja suavemente como si fueras al baño; eso la acercará a la entrada.",
      },
      {
        heading: "Mito 3: 'Solo la pueden usar mujeres que ya tuvieron relaciones sexuales'",
        body: "Realidad: Cualquier persona que menstrúe puede usar una copa, independientemente de su actividad sexual. Existen modelos de diferentes tallas diseñados para flujos ligeros, moderados y abundantes, y también para distintas longitudes vaginales. La clave está en elegir el tamaño correcto y practicar la técnica de inserción.",
      },
      {
        heading: "¿Cómo elegir la copa adecuada?",
        body: "Los factores principales son: tu edad, si has tenido partos vaginales (lo que puede modificar el tono del piso pélvico), la intensidad de tu flujo y la longitud de tu vagina. Existen cuestionarios en línea y guías de marcas reconocidas que pueden orientarte. Aun así, si tienes condiciones como endometriosis, prolapso o DIU, consulta primero con tu ginecóloga antes de empezar a usarla.",
      },
      {
        heading: "Consejo de la Dra. Leslie",
        body: "La copa menstrual es una herramienta maravillosa que muchas de mis pacientes han adoptado con muy buenos resultados. Mi recomendación es que no te desesperes si los primeros ciclos requieren práctica: la curva de aprendizaje es completamente normal. Y siempre, ante cualquier duda o molestia persistente, una consulta ginecológica resolverá el panorama.",
      },
    ],
  },
  {
    title: "Señales de alerta durante el embarazo",
    category: "Obstetricia",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    date: "10 Sep 2023",
    readTime: "6 min",
    excerpt: "Conoce los síntomas que requieren atención médica inmediata durante tu periodo de gestación para tu seguridad.",
    content: [
      {
        heading: "¿Por qué es importante reconocer las señales de alerta?",
        body: "El embarazo es un proceso fisiológico, pero también un periodo en que el cuerpo experimenta cambios profundos que pueden derivar en complicaciones. Identificar a tiempo los signos de alarma puede marcar la diferencia entre un desenlace favorable y una emergencia obstétrica. Como regla general: ante cualquier duda, consulta. Nunca es exagerado pedir ayuda cuando se trata de tu salud y la de tu bebé.",
      },
      {
        heading: "Sangrado vaginal",
        body: "Un poco de sangrado de implantación en las primeras semanas puede ser normal, pero cualquier sangrado abundante, con coágulos o acompañado de dolor debe evaluarse de inmediato. En el primer trimestre puede indicar amenaza de aborto o embarazo ectópico; en el segundo y tercer trimestre puede señalar placenta previa o desprendimiento placentario, ambas situaciones que requieren atención urgente.",
      },
      {
        heading: "Dolor abdominal intenso o presión pélvica",
        body: "Las contracciones de Braxton Hicks son normales y no duelen significativamente. Sin embargo, un dolor abdominal severo, constante o que aumenta en intensidad antes de la semana 37 puede indicar trabajo de parto prematuro, desprendimiento de placenta o incluso apendicitis. No lo ignores: ve a urgencias.",
      },
      {
        heading: "Movimientos fetales disminuidos",
        body: "A partir de la semana 28, es importante que sientas a tu bebé moverse con regularidad. Si notas una disminución significativa de los movimientos (menos de 10 movimientos en 2 horas durante el periodo de mayor actividad del bebé), comunícate con tu ginecóloga o acude a urgencias para un monitoreo fetal.",
      },
      {
        heading: "Hinchazón brusca, dolor de cabeza intenso o visión borrosa",
        body: "Estos síntomas pueden ser señales de preeclampsia, una complicación caracterizada por presión arterial elevada y daño orgánico que puede poner en riesgo la vida de la madre y el bebé. Si presentas estos síntomas —especialmente después de la semana 20— busca atención médica de inmediato.",
      },
      {
        heading: "Fiebre mayor a 38°C o escalofrío intenso",
        body: "La fiebre durante el embarazo no debe ignorarse. Puede indicar una infección urinaria ascendente (pielonefritis), corioamnionitis (infección de las membranas) u otras infecciones que requieren tratamiento urgente para proteger al bebé.",
      },
      {
        heading: "Consejo de la Dra. Leslie",
        body: "En mi consulta de obstetricia siempre le digo a mis pacientes: tú conoces tu cuerpo mejor que nadie. Si algo no se siente bien, llámame o acude a urgencias. Ninguna pregunta es pequeña y ninguna visita de revisión es innecesaria cuando hay una vida en desarrollo. Tu tranquilidad también es parte del cuidado prenatal.",
      },
    ],
  },
];

const ArticleModal = ({ article, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    style={{ background: 'rgba(60,30,50,0.55)', backdropFilter: 'blur(6px)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 8 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      {/* Header image */}
      <div className="relative h-52 overflow-hidden rounded-t-3xl flex-shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(40,15,30,0.55) 100%)' }} />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors duration-150"
        >
          <X size={18} />
        </button>
        <span className="absolute bottom-4 left-5 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(209,155,173,0.85)' }}>
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} de lectura</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-snug" style={{ letterSpacing: '0.02em' }}>
          {article.title}
        </h2>
        <div className="space-y-5">
          {article.content.map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-1.5" style={{ color: '#6E506F', fontSize: '0.97rem' }}>
                {section.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-5 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 italic">
            Este artículo es informativo. Consulta siempre a tu ginecóloga para orientación personalizada.
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const HealthBlog = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="blog" className="py-20 bg-pastel-pink-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog de Salud
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artículos informativos y consejos sobre salud femenina, embarazo y bienestar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <Card
                className="h-full overflow-hidden group border-none bg-white cursor-pointer"
                style={{ transition: 'box-shadow 200ms ease-out' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.10)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
                onClick={() => setSelected(article)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-150 z-10" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-pastel-pink-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pastel-pink-primary transition-colors duration-150 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="flex items-center text-pastel-pink-primary font-semibold text-sm">
                    Leer artículo completo
                    <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform duration-150" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default HealthBlog;
