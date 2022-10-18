import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <section id="banner">
                    <div className="banner-content">
                        <h1>Lugar exato para você realizar os seus sonhos</h1>
                        <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>
                    </div>
                    <div className="banner-filter">
                        <div className="filter-fields">

                            <form>
                                <select>
                                    <option value="venda">Venda</option>
                                    <option value="locacao">Locação</option>
                                </select>

                                <select>
                                    <option>Tipo Imóvel</option>
                                    <option value="apto">Apartamento</option>
                                    <option value="casa">Casa</option>
                                    <option value="sobrado">Sobrado</option>
                                    <option value="terreno">Terreno</option>
                                </select>

                                <select>
                                    <option>Cidade</option>
                                    <option value="coronel">Coronel Vivida</option>
                                    <option value="beltrao">Francisco Beltrão</option>
                                    <option value="pato">Pato Branco</option>
                                    <option value="saudade">Saudade do Iguaçu</option>
                                </select>

                                <select>
                                    <option>Bairro</option>
                                    <option value="brasilia">Brasilia</option>
                                    <option value="centro">Centro</option>
                                    <option value="lasalle">La Salle</option>
                                    <option value="pinheiro">Pinheiros</option>
                                </select>
                            </form>

                        </div>

                        <div className="filter-result">
                            <p className="result-value">26</p>
                            <p className="result-label">Imóveis</p>
                            <button>Filtrar</button>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <h2>Imóveis disponíveis</h2>

                    <div className="cards-content">

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 1" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                                    voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.</p>

                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb2.png" alt="Casa 2" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb3.png" alt="Casa 3" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb4.png" alt="Casa 4" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb5.png" alt="Casa 5" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb6.png" alt="Casa 6" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="reasons">
                    <h2>Por que nos Escolher?</h2>

                    <div className="reasons-content">

                        <div className="reason">
                            <p className="reason-value">+1000</p>
                            <p className="reason-label">Imóveis</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+500</p>
                            <p className="reason-label">Clientes Felizes</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+50</p>
                            <p className="reason-label">Premiações</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+100</p>
                            <p className="reason-label">Especialistas</p>
                        </div>

                    </div>
                </section>

                <section id="specialists">
                    <h2>Converse com um Especialista</h2>
                    <div className="specialists-content">

                        <div className="specialist">
                            <h5>Tutu Williams</h5>
                            <p>London</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
                        </div>

                        <div className="specialist">
                            <h5>Mark Zion</h5>
                            <p>New York City</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
                        </div>

                        <div className="specialist">
                            <h5>Essien Crest</h5>
                            <p>Berlin</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
                        </div>

                    </div>
                </section>

                <section id="values">
                    <h2>Que é a Imobiliária Unimater?</h2>

                    <div className="values-container">
                        <img src="./assets/img/place-company.png" alt="Foto da firma" />

                        <div className="values-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos dolores necessitatibus, blanditiis corporis veritatis impedit velit temporibus mollitia hic sed fugit at vitae non exercitationem rem corrupti nostrum officia.</p>

                            <p>Neque eveniet fugiat at deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse doloremque perferendis! Culpa earum reiciendis repudiandae, officiis magnam voluptate ex quas deleniti, enim ad excepturi.</p>

                            <div className="value-detail">
                                <div className="value">
                                    <span>Alto Padrão</span>
                                    <span>Agilidade</span>
                                </div>

                                <div className="value">
                                    <span>Facilidade</span>
                                    <span>Confiabilidade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}