import { useState } from 'react';
import { useProduct } from '../../hook/useProduct';
import './style.css';

const nacionalidades = [
    { valor: '', rotulo: 'Nacionalidades' },
    { valor: 'nacional', rotulo: 'Nacional' },
    { valor: 'internacional', rotulo: 'Internacional' }
];

const tipos = [
    { valor: '', rotulo: 'Produtos' },
    { valor: 'artificial', rotulo: 'Intelgência Artificial' },
    { valor: 'uav', rotulo: 'Drones' },
    { valor: 'bot', rotulo: 'Robótica' },
    { valor: 'auto', rotulo: 'Automação' },
    { valor: 'sec', rotulo: 'Segurança' }
];

const marcas = [
    { valor: '', rotulo: 'Marcas' },
    { valor: 'octta', rotulo: 'OCTTA Systems' },
    { valor: 'skydio', rotulo: 'Skydio' },
    { valor: 'dji', rotulo: 'DJI' },
    { valor: 'nvidia', rotulo: 'Nvidia Corporation' },
    { valor: 'pi', rotulo: 'Raspberry PI' },
    { valor: 'ardu', rotulo: 'Arduino' },
    { valor: 'stm', rotulo: 'STMicroelectronics' }
];


export function SectionBanner() {

    const { products, setParamFilter } = useProduct();

    const [filter, setFilter] = useState({});

    function handleFilter() {
        setParamFilter(filter)
    }

    return (
        <section id="banner">
            <div class="banner-content">
                    <h1>Sistemas inteligentes para sua missão</h1>
                </div>
                <div class="banner-filter">
                    <div class="filter-fields">
                    
                    <form>
                        <select
                            onChange={event => setFilter({...filter, nacionalidade: event.target.value})}>
                            {nacionalidades.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}
                        </select>

                        <select
                            onChange={event => setFilter({...filter, tipo: event.target.value})}>
                            {tipos.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}
                        </select>

                        <select
                            onChange={event => setFilter({...filter, marca: event.target.value})}>
                            {marcas.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}                            
                        </select>

                    
                    </form>

                </div>

                <div className="filter-result">
                    <p className="result-value">{ products.length }</p>
                    
                    <p className="result-label">{ products.length != 1 ? 'produtos' : 'produto' }</p>
                    <button onClick={ handleFilter }>Filtrar</button>
                </div>
            </div>
        </section>
    )

}