

import { motion } from "framer-motion";

const Team = () => {
    // Variante para os itens da equipe
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2, // Faz um chef aparecer depois do outro
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const chefs = [
        {
            id: 1,
            name: "Marcus Volpi",
            role: "Chef Executivo",
            img: "src/assets/chef1.avif"
        },
        {
            id: 2,
            name: "Elena Santoro",
            role: "Chef de Cuisine",
            img: "src/assets/chef2.webp"
        },
        {
            id: 3,
            name: "Ricardo Lemos",
            role: "Sous Chef",
            img: "src/assets/chef3.jpg"
        },
        {
            id: 4,
            name: "Sofia Valente",
            role: "Chef Pâtissier",
            img: "src/assets/chef4.avif"
        },
    ];

    return (
        <div id="Equipe" className='container-fluid pt-5 pb-3'>
            <div className="container">
                {/* Título com animação simples de subida */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <h5 className="section-title ff-secondary text-center text-warning fw-normal">
                        Membros da Equipe
                    </h5>
                    <h1 className="mb-5">Nossos Mestres Chefs</h1>
                </motion.div>

                <div className="row justify-content-center">
                    {chefs.map((chef, index) => (
                        <motion.div
                            key={chef.id}
                            className="col-lg-3 col-md-6 mb-4"
                            custom={index} // Passa o índice para o delay cascata
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            {/* INÍCIO DO EFEITO DE BORDA */}
                            <div className="card-wrapper">
                                <div className="border-animation"></div> 
                                
                                <div className="team-item text-center rounded overflow-hidden shadow">
                                    <div className="ratio ratio-1x1 rounded-circle overflow-hidden m-4 mx-auto" style={{ width: '80%' }}>
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="img-fluid object-fit-cover"
                                            src={chef.img}
                                            alt={chef.name}
                                        />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h5 className="mb-0">{chef.name}</h5>
                                        <small>{chef.role}</small>

                                        <div className="d-flex justify-content-center mt-3">
                                            <a className="btn btn-square btn-warning mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-warning mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-warning mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
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

export default Team;