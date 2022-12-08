import './style.css';

import imgBruno from '../../assets/img/IMG_20220403_005718_559.jpg';
import imgnvidia from '../../assets/img/logo-1.png';

const especialistas = [
    {
        nome: 'Bruno Henrique Catani',
        cargo: 'Chief Executive Officer',
        descricao: 'Acadêmico de Sistemas de Informação na UNIMATER, com mais de 5 anos de experiência profissional em robótica com especialidade em veiculos de grande porte, ja realizou projetos de robotica como a Flecha Voadora para a Mocidade Independente de Padre Miguel e atualmente é especialista Nvidia Jetson AI.'
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Nossa Equipe</h2>
            <div className="specialists-content">
                                { especialistas.map((item,index) => (
                                <div key={index} className="specialist">
                                        <img style={{ width: 280, height: 280 }} src={imgBruno} alt="Bruno"/>
                                        <div class="column">
                                            <h3>{ item.nome }</h3>
                                            <p class="cargo-text">{ item.cargo }</p>
                                            
                                            <img style={{ width: 192, height: 94.8 }} src={imgnvidia} alt="Nvidia"/>
                                            <p className="specialist-detail">{ item.descricao }</p>
                                        </div>
                                </div>
                            ))}
            </div>
        </section>
    )
}