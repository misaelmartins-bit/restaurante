import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="container-fluid py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <motion.h1 className="display-4 text-white animated sliderInLeft fw-bold"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Transforme sua Noite<br />em um Momento Único
                        </motion.h1>
                        <motion.p className="text-white animated slideInleft mb-4 pb-2"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        >
                            Mais do que uma refeição, oferecemos um refúgio gastronômico no coração da cidade. O ambiente perfeito para celebrar a vida, o amor e os bons amigos com o melhor da culinária contemporânea.
                        </motion.p>
                        <motion.a href="#Reservation" className="btn btn-warning py-sm-3 px-sm-5 slideInLeft fs-5"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Reserve sua Mesa
                        </motion.a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                        <motion.img src="src\public\images\patroComidaHero.png" width="500px" className="img-fluid" alt="imagem"
                        initial={{ opacity: 0, scale: 0.8 }} // Começa transparente e menor
                            animate={{ opacity: 1, scale: 1 }}    // Fica visível e tamanho normal
                            transition={{ 
                                duration: 1.5, // Mais lenta para ser suave
                                delay: 0.9,    // Só aparece depois que o texto começou a entrar
                                ease: "easeInOut" 
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
