
import { useState } from "react"; // Adicione isso no topo
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
    // 1. Configuração para o Título e as Tabs (Entram de baixo para cima)
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // 2. Configuração para os itens do menu (Efeito cascata)
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // O primeiro entra rápido, os próximos vão atrasando
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const [activeTab, setActiveTab] = useState('Principais');

    const menuData = {
        Entradas: [
            { name: "Bruschetta Toscana", price: "R$ 45", img: "src/public/images/comida4.jpg", desc: "Pão artesanal tostado, tomates cereja marinados em ervas e manjericão fresco." },
            { name: "Tartare de Atum", price: "R$ 85", img: "src/public/images/comida6.jpg", desc: "Atum fresco picado na faca, acompanhado de avocado, ovas e chips de raiz." },
            { name: "Carpaccio de Filé", price: "R$ 58", img: "src/public/images/comida7.jpg", desc: "Lâminas de filé mignon, alcaparras, parmesão curado e molho de mostarda em grãos." },
            { name: "Camarões ao Alho", price: "R$ 92", img: "src/public/images/comida8.jpg", desc: "Camarões rosa salteados no azeite extravirgem, alho laminado e pimenta dedo-de-moça." },
            { name: "Burrata Cremosa", price: "R$ 74", img: "src/public/images/comida9.jpg", desc: "Burrata fresca com pesto de pistache, tomates confitados e rúcula selvagem." },
            { name: "Ceviche Clássico", price: "R$ 62", img: "src/public/images/comida10.jpg", desc: "Peixe branco marinado no leite de tigre, cebola roxa, coentro e batata doce." }
        ],
        Principais: [
            { name: "Risoto de Cogumelos", price: "R$ 78", img: "src/public/images/comida1.webp", desc: "Arroz arbóreo, mix de cogumelos e azeite de trufas." },
            { name: "Salmão Grelhado", price: "R$ 92", img: "src/public/images/comida2.jpg", desc: "Filé de salmão com crosta de ervas e purê de mandioquinha." },
            { name: "Filé Mignon ao Malbec", price: "R$ 115", img: "src/public/images/comida3.webp", desc: "Redução de vinho Malbec e risoto de parmesão." },
            { name: "Nhoque de Abóbora", price: "R$ 65", img: "src/public/images/comida5.jpg", desc: "Massa artesanal com manteiga de sálvia e nozes." },
            { name: "Cordeiro com Ervas", price: "R$ 128", img: "src/public/images/comida11.jpg", desc: "Carré de cordeiro grelhado com risoto de hortelã fresco." },
            { name: "Espaguete de Frutos do Mar", price: "R$ 98", img: "src/public/images/comida12.jpg", desc: "Massa fresca com camarões, lulas e mariscos ao vinho branco." }
        ],
        Sobremesas: [
            { name: "Petit Gâteau", price: "R$ 35", img: "src/public/images/sobremesa1.jpg", desc: "Chocolate belga com sorvete de baunilha artesanal." },
            { name: "Tiramisú", price: "R$ 40", img: "src/public/images/sobremesa2.jpg", desc: "Clássico italiano com café espresso, mascarpone e cacau." },
            { name: "Cheesecake de Frutas Vermelhas", price: "R$ 38", img: "src/public/images/sobremesa3.jpg", desc: "Base crocante com creme suave e calda artesanal de frutas." },
            { name: "Mousse de Chocolate 70%", price: "R$ 32", img: "src/public/images/sobremesa4.jpg", desc: "Mousse aerada com nibs de cacau e flor de sal." },
            { name: "Pudim de Pistache", price: "R$ 42", img: "src/public/images/sobremesa5.jpg", desc: "Pudim ultra cremoso de pistache siciliano com praliné." },
            { name: "Tarte Tatin de Maçã", price: "R$ 36", img: "src/public/images/sobremesa6.jpg", desc: "Torta de maçã caramelizada servida morna com creme fraiche." }
        ]
    };


    return (
        <div id="Menu" className="container-fluid py-5">
            <div className="container">
                {/* Título com Animação */}
                <motion.div
                    className="text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h5 className="section-title ff-secondary text-center text-warning fw-normal">Experiência Gastronômica</h5>
                    <h1 className="mb-5">Seleção do Chef</h1>
                </motion.div>

                {/* Tabs de Navegação */}
                <motion.div
                    className="tab-class text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Tabs de Navegação */}
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5 flex-nowrap w-100">
                        {[
                            { label: 'Entradas', icon: 'fa-leaf' },
                            { label: 'Principais', icon: 'fa-utensils' },
                            { label: 'Sobremesas', icon: 'fa-ice-cream' }
                        ].map((tab, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    onClick={() => setActiveTab(tab.label)}
                                    
                                    className={`btn d-flex align-items-center text-start mx-1 mx-md-3 pb-3 border-0 bg-transparent nav-tab-custom ${activeTab === tab.label ? 'border-bottom border-warning border-3' : ''}`}
                                >
                                    
                                    <i className={`fa ${tab.icon} fa-2x icon-tab ${activeTab === tab.label ? 'text-warning' : 'text-secondary'}`}></i>
                                    <div className="ps-2 ps-md-3 text-container">
                                        <small className="text-body d-none d-sm-block">Sabor</small>
                                        <h6 className={`${activeTab === tab.label ? 'text-warning' : 'text-black'} mt-n1 mb-0 fw-bold label-tab`}>{tab.label}</h6>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="tab-content">
                        <div className="row g-4">
                            <AnimatePresence mode="wait">
                                {menuData[activeTab].map((item, index) => (
                                    <motion.div
                                        key={`${activeTab}-${index}`}
                                        className="col-lg-6"
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src={item.img} className="flex-shrink-0 img-fluid rounded" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={item.name} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{item.name}</span>
                                                    <span className="text-warning">{item.price}</span>
                                                </h5>
                                                <small className="fst-italic">{item.desc}</small>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Menu;
