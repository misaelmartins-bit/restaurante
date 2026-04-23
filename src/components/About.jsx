
import { motion } from "framer-motion";

const About = () => {
    // Configuração para as imagens (Zoom)
    const zoomVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Configuração para o bloco de texto (Entrada pela direita)
    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        }
    };

    return (
        <div id="Sobre" className='container-fluid py-5'>
            <div className='container'>
                <div className='row g-5 align-items-center'>
                    {/* Lado das Imagens */}
                    <div className='col-lg-6'>
                        <div className='row g-3'>
                            <div className="col-6 text-start">
                                <motion.img 
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    className='img-fluid rounded w-100' 
                                    src="public\images\restau.webp" 
                                    alt="img" 
                                />
                            </div>
                            <div className="col-6 text-start">
                                <motion.img 
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.2 }}
                                    className='img-fluid rounded w-75' 
                                    style={{ marginTop: "17%" }} 
                                    src="public\images\chef2.webp" 
                                    alt="img2" 
                                />
                            </div>
                            <div className='col-6 text-end'>
                                <motion.img 
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.3 }}
                                    className='img-fluid rounded w-75' 
                                    src="public\images\img3.avif" 
                                    alt="img3" 
                                />
                            </div>
                            <div className='col-6 text-end'>
                                <motion.img 
                                    variants={zoomVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.4 }}
                                    className='img-fluid rounded w-100' 
                                    src="public\images\img4.jpg" 
                                    alt="img4" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lado do Texto */}
                    <motion.div 
                        className='col-lg-6'
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h5 className='section-title ff-secondary text-start text-warning fw-normal'>Sobre nós</h5>
                        <h1 className='mb-4'>Bem-vindo ao <i className='fa fa-utensils text-warning me-2'></i>Restaurante</h1>
                        <p className='mb-4'>Nascido da paixão pela alta gastronomia, o nosso restaurante não é apenas um lugar para comer, mas um destino para quem busca desconectar do caos da cidade e reconectar com os sentidos. Cada detalhe, da iluminação suave à escolha das louças, foi pensado para emoldurar a verdadeira estrela: a comida contemporânea feita com alma.</p>
                        <p className='mb-4'>Combinamos técnicas clássicas internacionais com o frescor de ingredientes locais, criando um menu sazonal que surpreende a cada visita. Aqui, cada reserva é tratada como um evento único.</p>
                        
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className='d-flex align-items-center border-start border-5 border-warning px-3'>
                                    <h1 className='flex-shrink-0 display-6 fw-bold text-warning mb-0'>15</h1>
                                    <div className="ps-4">
                                        <p className='mb-0'>Anos de</p>
                                        <h6 className='text-uppercase mb-0 fw-bold'>Experiência</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-6'>
                                <div className='d-flex align-items-center border-start border-5 border-warning px-3'>
                                    <h1 className='flex-shrink-0 display-6 fw-bold text-warning mb-0'>50</h1>
                                    <div className="ps-4">
                                        <p className='mb-0'>Popular</p>
                                        <h6 className='text-uppercase mb-0 fw-bold'>Master Chef</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className='btn btn-warning py-3 px-5 mt-2'
                        >
                            Leia mais
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;