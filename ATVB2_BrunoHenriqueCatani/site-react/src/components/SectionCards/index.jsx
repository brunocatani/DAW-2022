import { IntlProvider, FormattedNumber } from 'react-intl';
import { useProduct } from '../../hook/useProduct';

import './style.css';


export function SectionCards() {

    const { products } = useProduct();

    return (
        <section id="cards">
            <h2>Produtos Disponíveis</h2>

            {products.length > 0 ? (
                <div className="cards-content">

                    {products.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.foto} alt="Produto" />
                            <div className="card-content">
                                <h4>{item.titulo}</h4>
                                <p>{item.descricao1}</p>
                                <p>{item.descricao2}</p>
                                <p>{item.descricao3}</p>
                                <p>{item.descricao4}</p>

                                <div className="card-price">
                                    <p>
                                        <IntlProvider locale="pt-BR">
                                            <FormattedNumber value={item.preco}
                                                style="currency"
                                                currency="BRL" />
                                        </IntlProvider>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <h3 className="not-found">Nenhum produto foi encontrado!</h3>
            ) }


        </section>
    )
}