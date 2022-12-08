import './style.css';

import imgLogo from '../../assets/img/OCTTA.svg';

export function Header() {
    return (
        <header>
            <div class="container">
                <div class="brand">
                    <img src={imgLogo} alt="OCTTA"/>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#" class="active">Home</a>
                        </li>
                        <li>
                            <a href="#">Produtos</a>
                        </li>
                        <li>
                            <a href="#">A Empresa</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bruno.catani/">Contato</a>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}