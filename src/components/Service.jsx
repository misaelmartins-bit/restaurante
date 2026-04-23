import { motion } from "framer-motion";

const ServiceStart = () => {
    // 1. Mantemos os variants, mas o "visible" agora será controlado pelo scroll
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2, // Mantém o efeito cascata
                ease: "easeOut"
            }
        })
    };

    const services = [
        {
            icon: "fa-user-tie",
            title: "Chefs Renomados",
            text: "Nossa equipe cria pratos que são verdadeiras experiências sensoriais."
        },
        {
            icon: "fa-wine-glass",
            title: "Ambiente Premium",
            text: "Um refúgio elegante no centro da cidade para os seus melhores momentos."
        },
        {
            icon: "fa-calendar-check",
            title: "Reserva Online",
            text: "Planeje sua visita com antecedência e garanta a melhor mesa da casa."
        },
        {
            icon: "fa-gem",
            title: "Experiência VIP",
            text: "Atendimento personalizado para tornar sua celebração ainda mais marcante."
        },
    ];

    return (
        <div id="Serviços" className="container-fluid py-5">
            <div className="container">
                <div className="row g-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="col-lg-3 col-sm-6"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            custom={index}
                        >
                            {/* Container principal com animação de borda */}
                            <div className="card-wrapper">
                                <div className="border-animation"></div> {/* O feixe de luz */}

                                <div className="service-item rounded pt-3">
                                    <div className="p-4 text-center">
                                        <i className={`fa fa-3x ${service.icon} text-warning mb-4`}></i>
                                        <h5>{service.title}</h5>
                                        <p className="mb-0">{service.text}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceStart;