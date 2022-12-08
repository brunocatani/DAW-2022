import { useEffect } from "react";
import { createContext, useState } from "react";

const dados = [
    {
        foto: './assets/img/Thumbs/nano.jpg',
        titulo: 'Nvidia JETSON NANO 4GB',
        descricao1:'- 128-core Maxwell',
        descricao2:'- 4 GB 64-bit LPDDR4 25.6 GB/s',
        descricao3:'- 1000 mb/s Gigabit internet',
        preco:  1500.00,
        nacionalidade: 'internacional',
        tipo: 'artificial',
        marca: 'nvidia'
    },
    {
        foto: './assets/img/Thumbs/xavier.jpg',
        titulo: 'Nvidia JETSON XAVIER NX 8GB',
        descricao1:'- NVIDIA Volta architecture',
        descricao2:'- 384 NVIDIA CUDA cores',
        descricao3:'- 48 Tensor cores',
        descricao4: '- 8 GB 128-bit LPDDR4x',
        preco:  5200.00,
        nacionalidade: 'internacional',
        tipo: 'artificial',
        marca: 'nvidia'
    },
    {
        foto: './assets/img/Thumbs/proj.jpg',
        titulo: 'Drone projetor autônomo',
        descricao1:'- Drone de alta capacidade',
        descricao2:'- 20 minutos de Voo',
        descricao3: '- Projetor OPTOMA de alta performance',
        preco:  85000.00,
        nacionalidade: 'nacional',
        tipo: 'uav',
        marca: 'octta'
    },
    {
        foto: './assets/img/Thumbs/banner.jpg',
        titulo: 'Drone Holografico',
        descricao1:'- Projeções Holograficas móveis',
        descricao2:'- Encante de uma maneira jamais vista',
        descricao3:'- 40 minutos de Voo',
        descricao4:'- Tela Semi-Transparente',
        preco:  130000.00,
        nacionalidade: 'nacional',
        tipo: 'uav',
        marca: 'octta'
    },
    {
        foto: './assets/img/Thumbs/cine.jpg',
        titulo: 'Drone Cinelifter',
        descricao1:'- Suporta câmeras RED 8K- 6 minutos de vôo (6S 5000 mAh)',
        descricao2:'- Velocidade máxima de 80 km/h',
        descricao3:'- Construção Fibra de Carbono',
        preco:  7500.00,
        nacionalidade: 'internacional',
        tipo: 'uav',
        marca: 'dji'
    },
    {
        foto: './assets/img/Thumbs/agr.jpg',
        titulo: 'Drone para Mapeamento Agricola',
        descricao1:'- Suporta câmera CANON 5D',
        descricao2:'- 25 minutos de vôo- Gimbal Tarot 5D',
        descricao3:'- Construção Fibra de Carbono',
        preco:  60000.00,
        nacionalidade: 'nacional',
        tipo: 'uav',
        marca: 'octta'
    },
    {
        foto: './assets/img/Thumbs/ardu.jpg',
        titulo: 'Arduino MEGA',
        descricao1:'- Microcontroladora ATmega2560 Rev3 - Memoria flash de 256',
        preco:  250.00,
        nacionalidade: 'internacional',
        tipo: 'auto',
        marca: 'ardu'
    },
    {
        foto: './assets/img/Thumbs/pi.jpg',
        titulo: 'Raspberry PI 4B+ 4GB',
        descricao1:'-ARM Cortex-A72 Quad-core',
        descricao2:'- 4GB Memória RAM',
        descricao3:'- Alimentação USB tipo C',
        preco: 800.00,
        nacionalidade: 'internacional',
        tipo: 'auto',
        marca: 'pi'
    }
]

export const ProductContext = createContext();

export function ProductContextProvider(props) {

    const [products, setProduct] = useState(dados);
    const [paramFilter, setParamFilter] = useState({});    

    useEffect(() => {

        let dadosFiltrados = dados;

        //Operação
        if (paramFilter.nacionalidade) {
            dadosFiltrados = dadosFiltrados.filter(item => item.nacionalidade === paramFilter.nacionalidade)
        }

        //Tipo
        if (paramFilter.tipo) {
            dadosFiltrados = dadosFiltrados.filter(item => item.tipo === paramFilter.tipo)
        }

        //Cidade
        if (paramFilter.marca) {
            dadosFiltrados = dadosFiltrados.filter(item => item.marca === paramFilter.marca)
        }

        setProduct(dadosFiltrados)

    }, [ paramFilter ]);



    return (
        <ProductContext.Provider value={{products, setParamFilter}}>
            {props.children}
        </ProductContext.Provider>
    )
}