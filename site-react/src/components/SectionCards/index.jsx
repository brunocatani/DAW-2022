import { useImovel } from '../../hook/useImovel';
import {IntlProvider, FormattedNumber} from 'react-intl'
import './style.css';


export function SectionCards() {

    const { imoveis } = useImovel();

    return (
        <section id="cards">
            <h2>Imóveis disponíveis</h2>

            <div className="cards-content">

                {imoveis.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.foto} alt="Casa 1" />
                        <div className="card-content">
                            <h4>{ item.titulo }</h4>
                            <p>{ item.descricao }</p>

                            <div className="card-price">
                                <p>
                                    <IntlProvider Locale="pt-BR">
                                        <FormattedNumber value={item.preco}
                                            style="currency"
                                            currency='brl' />
                                    </IntlProvider>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}