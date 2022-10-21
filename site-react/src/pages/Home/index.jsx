import { Banner } from '../../components/Banner';
import { Cards } from '../../components/Cards';
import { Reasons } from '../../components/Reasons';
import { SectionValues } from '../../components/SectionValues';
import { Specialists } from '../../components/Specialists';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <Banner />

                <Cards />

                <Reasons />

                <Specialists />

                <SectionValues />
                     
            </div>

        </div>

    )
}