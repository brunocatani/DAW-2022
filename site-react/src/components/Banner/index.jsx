import './style.css';

export function Banner() {
    return(
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
    )
}