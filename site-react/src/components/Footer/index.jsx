import './style.css';

export function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">

                    <div class="footer-menu">
                        <p class="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Contato</p>
                        <ul>
                            <li>+55 (46) 9 9976-3208</li>
                            <li>R. Lídio Oltramari, 1628</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <p class="footer-menu-title">Parceiros</p>
                        <ul>
                            <li><a href="#">Intracargo Transportes</a></li>
                            <li><a href="#">UNIMATER</a></li>
                            <li><a href="#">UTFPR</a></li>
                            <li><a href="#">ITECPB</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-social">
                    <span class="facebook"></span>
                    <span class="twitter"></span>
                    <span class="instagram"></span>
                    <span class="linkedin"></span>
                </div>

                <p class="footer-copyright">
                    &#169; 2022 - All rights reserved
                </p>
            </div>
        </footer>
    )
}