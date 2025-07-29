"use client"

import { Heart, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const people = [
  {
    id: "valentina",
    name: "Valentina Doncel Zarate",
    title: "Software Developer & Inclusive Tech Enthusiast",
    bio: "Val es una desarrolladora de software en formación apasionada por la creación de soluciones tecnológicas con propósito. Le interesa especialmente el desarrollo de herramientas digitales inclusivas, como asistentes interactivos para personas con discapacidad visual. Combina sus conocimientos en C#, Python con una fuerte inclinación hacia el diseño estético y la inteligencia artificial. Además de su vocación técnica.",
    image: "/images/valentina-profile.png",
    hobbiesImage: "/images/valentina-hobbies.jpg",
    hobbies: ["Sky: Children of the Light", "Estética visual & organización", "Estudio autodidacta con IA"],
    funFacts: [
      "Le encanta hacer ejercicio y mantenerse activa durante la semana",
      "Crea agendas a mano para planear su semana con disciplina",
      "Puede levantarse a las 3:00 a.m. para estudiar si se lo propone",
    ],
    color: "bg-purple-500",
  },
  {
    id: "pedro",
    name: "Pedro David Arnedo Romero",
    title: "Desarrollador Full Stack & Analista de datos e Inteligencia Artificial",
    bio: "Pedro es un desarrollador full stack comprometido con la creación de soluciones digitales eficientes y creativas. Su enfoque combina la lógica de la programación con el pensamiento estratégico y la innovación tecnológica. Apasionado por el aprendizaje continuo, ha trabajado con tecnologías modernas como Angular, TypeScript y plataformas de inteligencia artificial, aplicándolas en proyectos reales con impacto. Cree en el poder de la tecnología como herramienta para transformar ideas en experiencias funcionales.",
    image: "/images/pedro-profile-new.png",
    hobbiesImage: "/images/pedro-hobbies.png",
    hobbies: [
      "Programación y desarrollo web",
      "Jugar ajedrez y estudiar aperturas",
      "Escuchar música para concentrarse y relajarse",
    ],
    funFacts: [
      "Siempre está probando nuevas herramientas de IA para mejorar su flujo de trabajo",
      "Puede pasar horas resolviendo bugs como si fuera un reto mental",
      "Tiene playlists organizadas por estado de ánimo y fases del día",
    ],
    color: "bg-blue-500",
  },
  {
    id: "javier",
    name: "Javier Kamilo Fernández Daza",
    title: "System Engineering Student & Tech Enthusiast",
    bio: "Javier es un estudiante de Ingeniería de Sistemas en la Universidad Popular del Cesar, nacido en Valledupar en 2005. También vivió parte de su vida en Codazzi, lo que le dio una visión más amplia del entorno y lo ayudó a formar una perspectiva abierta y reflexiva. Eligió su carrera por su afinidad con la tecnología, la lógica y el deseo de crear soluciones que impacten positivamente a las personas. Con una base académica sólida del colegio CASD y una fuerte disciplina personal, Javier se esfuerza por desarrollarse tanto en lo profesional como en lo personal.",
    image: "/images/javier-profile.jpg",
    hobbiesImage: "/images/javier-hobbies.png",
    hobbies: ["Gimnasio", "Fútbol", "Voleibol", "Escuchar música", "Explorar nuevas ideas tecnológicas"],
    funFacts: [
      "Vivió en Codazzi y Valledupar, lo que fortaleció su visión de vida",
      "Disfruta de entrenar y practicar deportes en su tiempo libre",
      "Siempre encuentra motivación en la música",
      "Tiene un fuerte compromiso con su formación académica",
      "Sueña con desarrollar sistemas que transformen su comunidad",
    ],
    color: "bg-teal-500",
  },
]

export default function PersonalWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-8">
              {/* Company Logo */}
              <Link href="#" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="SmartSite Solutions Logo" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold text-slate-800 hidden sm:block">SmartSite Solutions</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium cursor-pointer"
                >
                  Inicio
                </button>
                <Link
                  href="#valentina"
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                >
                  Equipo
                </Link>
                <Link
                  href="#contacto"
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 via-indigo-700 to-teal-600 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          {/* Logo and Company Name - Horizontal Layout */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Logo with enhanced styling */}
            <div className="flex-shrink-0">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
                <Image
                  src="/logo.png"
                  alt="SmartSite Solutions Logo"
                  width={160}
                  height={160}
                  className="drop-shadow-2xl filter brightness-110"
                />
              </div>
            </div>

            {/* Company name - Two lines */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
                SmartSite
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
                Solutions
              </span>
            </h1>
          </div>

          {/* Description with better typography */}
          <p className="text-xl md:text-2xl text-blue-50/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Creamos experiencias web inteligentes usando IA
          </p>

          {/* Enhanced CTA button */}
          <button
            onClick={() => document.getElementById("valentina")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 border border-white/20"
          >
            Conoce Nuestro Equipo
            <svg
              className="ml-3 h-5 w-5 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Conoce Nuestro Increíble Equipo</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tres individuos únicos con antecedentes diversos, unidos por la creatividad y la pasión por sus oficios.
          </p>
        </div>
      </section>

      {/* People Sections */}
      {people.map((person, index) => (
        <section key={person.id} id={person.id} className={`py-16 px-4 ${index % 2 === 1 ? "bg-white" : ""}`}>
          <div className="container mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative">
                  <div className={`absolute -inset-4 ${person.color} rounded-2xl opacity-20 blur-xl`}></div>
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{person.name}</h2>
                    <p className={`text-lg font-medium ${person.color.replace("bg-", "text-")}`}>{person.title}</p>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed">{person.bio}</p>

                  {/* Hobbies */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <h3 className="text-xl font-semibold text-slate-800">Pasatiempos</h3>
                    </div>

                    {/* Special hobbies image for team members with hobbiesImage */}
                    {person.hobbiesImage && (
                      <div className="mb-4">
                        <Image
                          src={person.hobbiesImage || "/placeholder.svg"}
                          alt={`${person.name} hobbies`}
                          width={600}
                          height={200}
                          className="rounded-lg shadow-md w-full max-w-lg"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {person.hobbies.map((hobby, hobbyIndex) => (
                        <span
                          key={hobbyIndex}
                          className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fun Facts */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <h3 className="text-xl font-semibold text-slate-800">Datos Curiosos</h3>
                    </div>
                    <ul className="space-y-2">
                      {person.funFacts.map((fact, factIndex) => (
                        <li key={factIndex} className="flex items-start space-x-2 text-slate-600">
                          <span className={`w-2 h-2 ${person.color} rounded-full mt-2 flex-shrink-0`}></span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer id="contacto" className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ponte en Contacto</h3>
          <p className="text-slate-300 mb-6">¿Interesado en colaborar o aprender más sobre nuestro trabajo?</p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
              Contáctanos
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
