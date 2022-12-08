import './style.css';

const razoes = [
    { valor: '+5', rotulo: 'Anos Experiência'},
    { valor: '1°', rotulo: 'Representante Nvidia nacional'},
    { valor: '+10', rotulo: 'Projetos realizados'}
];


export function SectionReasons() {

    return (

        <section id="reasons">
            <h2>Por que nos Escolher?</h2>

            <div className="reasons-content">

                {razoes.map((item, index) => (
                    <div key={index} className="reason">
                        <p className="reason-value">{ item.valor }</p>
                        <p className="reason-label">{ item.rotulo }</p>
                    </div>
                ))}

            </div>
        </section>

    )

}