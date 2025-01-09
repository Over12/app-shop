import HeroImage from '../../assets/shopping.svg'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-5 lg:p-10">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-left mb-1">Bienvenido a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Shoply</span></h1>
        <p className='text-sm md:text-base lg:text-lg opacity-80 text-pretty max-w-lg'>Descubre artículos únicos y hechos a mano que aportan estilo y personalidad a tu hogar y armario.</p>
      </div>
      <img src={HeroImage} alt="Shopping" className="w-3/5 max-w-80 md:max-w-96 lg:max-w-none md:w-1/2 lg:w-1/3" />
    </section>
  )
}
