import './style.css'

import imgLogo from '../../assets/img/t2.png';

export function SectionValues() {
    return (

        <section id="values">
            <h2>A NOSSA MISSÃO É</h2>

            <div className="values-container">
                <img src={imgLogo} alt="Equipe" />

                <div className="values-content">
                    <p>Fornecer sistemas de hardware e software inteligêntes, confiáveis e eficiêntes.</p>

                    <p>Trazendo mais informação, tecnologia e segurança para sua empresa</p>

                    <div className="value-detail">
                        <div className="value">
                            <span>Tecnologia de ponta</span>
                            <span>Intelgência Artificial</span>
                        </div>

                        <div className="value">
                            <span>Facilidade</span>
                            <span>Confiabilidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}