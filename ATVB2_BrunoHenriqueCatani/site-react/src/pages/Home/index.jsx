import { SectionBanner } from '../../components/SectionBanner';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionValues } from '../../components/SectionValues';
import { SectionCards } from '../../components/SectionCards';
import { ProductContextProvider } from '../../context/ProductContext';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <ProductContextProvider>
                    <SectionBanner />
                    <SectionCards />
                </ProductContextProvider>

                <SectionReasons />

                <SectionSpecialists />

                <SectionValues />
            </div>
        </div>
    )
}