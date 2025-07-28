import { User, Heart, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const people = [
  {
    id: "sarah",
    name: "Sarah Chen",
    title: "Creative Designer & Photographer",
    bio: "Sarah is a passionate creative designer with over 8 years of experience in visual storytelling. She combines her love for photography with digital design to create compelling visual narratives. Based in San Francisco, she draws inspiration from urban landscapes and human connections.",
    image: "/placeholder.svg?height=400&width=400",
    hobbies: [
      "Street Photography",
      "Watercolor Painting",
      "Rock Climbing",
      "Coffee Roasting",
      "Vintage Vinyl Collecting",
    ],
    funFacts: [
      "Has visited 23 countries and counting",
      "Can solve a Rubik's cube in under 2 minutes",
      "Once had her photo featured in National Geographic",
      "Speaks four languages fluently",
      "Has a pet parrot named Pixel",
    ],
    color: "bg-blue-500",
  },
  {
    id: "marcus",
    name: "Marcus Rodriguez",
    title: "Software Engineer & Music Producer",
    bio: "Marcus is a full-stack developer by day and music producer by night. He's passionate about creating innovative web applications and electronic music. His unique perspective combines technical precision with artistic creativity, resulting in both elegant code and captivating beats.",
    image: "/placeholder.svg?height=400&width=400",
    hobbies: [
      "Electronic Music Production",
      "Skateboarding",
      "Cooking Fusion Cuisine",
      "Gaming (RPGs)",
      "Urban Gardening",
    ],
    funFacts: [
      "Built his first computer at age 12",
      "Has released music on Spotify with 50K+ streams",
      "Can kickflip on a skateboard",
      "Grows his own hot peppers",
      "Once debugged code for 18 hours straight",
    ],
    color: "bg-purple-500",
  },
  {
    id: "elena",
    name: "Elena Kowalski",
    title: "Marine Biologist & Environmental Advocate",
    bio: "Elena is dedicated to ocean conservation and marine research. With a PhD in Marine Biology, she spends her time studying coral reef ecosystems and advocating for sustainable ocean practices. Her work has contributed to several conservation initiatives across the Pacific.",
    image: "/placeholder.svg?height=400&width=400",
    hobbies: ["Scuba Diving", "Underwater Photography", "Surfing", "Yoga & Meditation", "Marine Life Illustration"],
    funFacts: [
      "Has dived to depths of over 100 feet",
      "Discovered a new species of sea slug",
      "Can hold her breath for 4 minutes",
      "Has swum with whale sharks",
      "Maintains a successful marine life blog",
    ],
    color: "bg-teal-500",
  },
]

export default function PersonalWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-slate-700" />
              <span className="text-xl font-bold text-slate-800">Our Team</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {people.map((person) => (
                <Link
                  key={person.id}
                  href={`#${person.id}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  {person.name.split(" ")[0]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Meet Our Amazing Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three unique individuals with diverse backgrounds, united by creativity and passion for their crafts.
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
                      <h3 className="text-xl font-semibold text-slate-800">Hobbies</h3>
                    </div>
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
                      <h3 className="text-xl font-semibold text-slate-800">Fun Facts</h3>
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
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-slate-300 mb-6">Interested in collaborating or learning more about our work?</p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
              Contact Us
            </button>
            <button className="px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-medium transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
