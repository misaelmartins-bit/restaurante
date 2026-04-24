import Hero from './Hero.jsx';
import { motion } from "framer-motion";

const Navbar = () => {
    const closeMenu = (e, id) => {
        e.preventDefault(); // Impede o pulo brusco do link

        // 1. Tenta fechar o menu Offcanvas
        const menu = document.getElementById('offcanvasDarkNavbar');
        if (menu) {
            const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(menu);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            } else {
                const closeBtn = menu.querySelector('.btn-close');
                closeBtn?.click();
            }
        }

        // 2. Faz o scroll suave até a seção
        const targetSection = document.querySelector(id);
        if (targetSection) {
            // Pequeno delay para o menu começar a fechar antes da tela correr
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // O segredo da suavidade 
                    block: 'start'
                });
            }, 300); // 300ms é o tempo médio da animação do Bootstrap
        }
    };

    return (
        <div id='Home' className="container-fluid position-relative p-0 min-vh-custom  d-flex flex-column">

            <motion.nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-3 sticky-top"
                initial={{ opacity: 0, x: -50 }} // Começa invisível e 50px para a esquerda
                animate={{ opacity: 1, x: 0 }}    // Termina visível na posição original
                transition={{ duration: 0.8, ease: "easeOut" }} // Velocidade e suavidade
            >
                <a href="#" className="navbar-brand p-0">
                    <h1 className="text-warning m-0" style={{ fontSize: "30px" }}><i className="fa fa-utensils me-3"></i></h1>
                </a>

                {/* Para Desktop */}

                <div className="collapse  navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4" style={{ fontSize: "18px" }}>
                        {/* Exemplo de animação em cascata nos links */}
                        {["Home", "Serviços", "Sobre", "Menu", "Equipe", "Contatos"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                className="nav-item nav-link"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }} // Cada um entra com um pequeno atraso
                            >
                                {item}
                            </motion.a>
                        ))}

                    </div>
                    <motion.a href="#Reservation" className="btn btn-warning py-2 px-4" style={{ fontSize: "18px" }}
                        whileHover={{ scale: 1.02 }} // Bônus: aumenta um pouco ao passar o mouse
                        whileTap={{ scale: 0.9 }}   // Diminui ao clicar
                    >
                        Reserve uma Mesa
                    </motion.a>
                </div>

                {/* Para mobile */}

                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>S
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark d-lg-none" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h1 className="text-warning m-0"><i className="fa fa-utensils me-3"></i></h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#Home" onClick={(e) => closeMenu(e, '#Home')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Serviços" onClick={(e) => closeMenu(e, '#Serviços')}>Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Sobre" onClick={(e) => closeMenu(e, '#Sobre')}>Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Menu" onClick={(e) => closeMenu(e, '#Menu')}>Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Equipe" onClick={(e) => closeMenu(e, '#Equipe')}>Equipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contatos" onClick={(e) => closeMenu(e, '#Contatos')}>Contatos</a>
                            </li>
                        </ul>
                        <a href="#Reservation" className="btn btn-warning py-2 px-4 fs-5 w-100 mt-3" onClick={(e) => closeMenu(e, '#Reservation')}>Reserve sua Mesa</a>
                    </div>
                </div>


            </motion.nav>

            <div className="flex-grow-1 d-flex align-items-center">
                <Hero />
            </div>

        </div>
    )
}

export default Navbar
