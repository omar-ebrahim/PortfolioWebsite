import styles from './Services.module.scss';
import { sectionIds } from '../../../../utils/utils';
import ServiceCard from '../../../../components/service-card/ServiceCard';

const Services = () => {
    return (
        <div id={sectionIds.services} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.heading}>Services</div>
                    <div>Contact me for more details</div>
                    <div>
                        It should be noted that I do not do frame repair and
                        cannot carry out carbon frame inspections.
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <ServiceCard
                        title="Health check"
                        description={`M-check - brakes, tyres, frame, gears. Estimate of cost of any repairs.`}
                        price={15}
                        notes="No repairs carried out, this is just an inspection"
                    />
                    <ServiceCard
                        title="Basic service"
                        description="Brake pads/discs, gear indexing, seat post and saddle setting, tyres inflated to correct pressure"
                        price={45}
                        from
                        notes="This does not include cost of parts"
                    />
                    <ServiceCard
                        description="Basic service + replacing brake cabling, gear cabling, wheel inspection, chain replacement, bearings inspected"
                        price={80}
                        title="Full Service"
                        notes="This does not include cost of parts"
                        from
                    />
                    <ServiceCard
                        title="Advanced service"
                        description="Full service + bearing replacements, brake bleeding, tyres replaced if required"
                        price={145}
                        notes="This does not include cost of parts"
                        from
                    />
                    <ServiceCard
                        title="Restoration service"
                        description="Advanced service + strip bike down to bare frame and rebuild. Clean and lubricate."
                        price={250}
                        notes="This does not include cost of parts"
                        from
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
