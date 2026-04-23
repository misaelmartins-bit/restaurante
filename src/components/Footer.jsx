import React from 'react'

const Footer = () => {
    return (
        <div>
            <div id='Contatos' className="container-fluid bg-dark text-light footer mt-5 pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Navegação</h4>
                            <a href="#Sobre" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Sobre nós</a>
                            <a href="#Serviços" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Nossos Serviços</a>
                            <a href="#Menu" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Cardápio</a>
                            <a href="#" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Política de Privacidade</a>
                            <a href="#" className='btn btn-link text-decoration-none p-0 mb-2 text-start text-warning'>Termos & Condições</a>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Contato</h4>
                            <p className='mb-2'><i className='fa fa-map-marker-alt me-3'></i>Av. Gastronômica, 1000, SP</p>
                            <p className='mb-2'><i className='fa fa-phone-alt me-3'></i>(11) 98765-4321</p>
                            <p className='mb-2'><i className='fa fa-envelope me-3'></i>contato@refugio.com.br</p>

                            <div className="d-flex pt-2">
                                <a href='' className="btn btn-outline-light btn-social me-2"><i className="fab fa-instagram"></i></a>
                                <a href='' className="btn btn-outline-light btn-social me-2"><i className="fab fa-facebook-f"></i></a>
                                <a href='' className="btn btn-outline-light btn-social me-2"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Horários</h4>
                            <h5 className='text-light fw-normal'>Terça a Sábado</h5>
                            <p>12:00 - 23:00</p>
                            <h5 className='text-light fw-normal'>Domingo</h5>
                            <p>12:00 - 18:00</p>
                            <p className='text-warning fw-bold small'>Segunda: Fechado</p>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className='section-title ff-secondary text-start text-warning fw-normal mb-4'>Newsletter</h4>
                            <p>Receba convites para eventos exclusivos e novas criações do Chef.</p>
                            <div className="input-group">
                                <input
                                    className='form-control border-warning py-3 ps-4'
                                    type="email"
                                    placeholder='Seu e-mail'
                                />
                                <button
                                    className='btn btn-warning px-4 btn-newsletter'
                                    type="button"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright border-top py-4">
                        <div className='row'>
                            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
                                &copy; 2026 <span className='text-warning'>Refúgio Gastronômico</span>. Todos os direitos reservados.
                            </div>
                            <div className='col-md-6 text-center text-md-end'>
                                Desenvolvido por <a className='text-decoration-none text-warning fw-bold' href=''>Misael Matos</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer