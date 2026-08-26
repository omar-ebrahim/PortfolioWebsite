import styles from './Services.module.scss';
import { sectionIds } from '../../../../utils/utils';
import ServiceCard from './components/service-card/ServiceCard';

const Services = () => {
    return (
        <div id={sectionIds.services}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.heading}>Services</div>
                    <div>Contact me for more details</div>
                </div>
                <div className={styles.rightContent}>
                    <ServiceCard
                        title="Health check"
                        description={`M-check - brakes, tyres, frame, gears.\nEstimate of cost.`}
                        price={0}
                    />
                    <ServiceCard
                        title="Basic service"
                        description="Brakes, gear indexing, seat post and saddle setting, tyres"
                        price={30}
                        from
                    />
                    <ServiceCard
                        description="something"
                        price={12.345}
                        title="service"
                    />
                    <ServiceCard
                        description="something"
                        price={12.345}
                        title="service"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
