import Particle from "./Particle.jsx"
export default function LandingPage() {
  return (
    <main className="h-screen">
    <div className="relative">
      <Particle />
      <div className="relative z-20 flex items-center justify-center h-screen">   
        <h1 className="text-white text-4xl text-center">Welcome to KYONA</h1>
      </div>
    </div> 
    </main>
  )
}