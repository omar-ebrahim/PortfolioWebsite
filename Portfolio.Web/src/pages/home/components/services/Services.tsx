import styles from './Services.module.scss';
import { useEffect, useState } from 'react';
import { sectionIds } from '../../../../utils/utils';
import ServiceCard from '../../../../components/service-card/ServiceCard';
import { fetchServices } from '../../../../sanity/client';
import type { ServiceContent } from '../../../../sanity/content';

const Services = () => {
    const [services, setServices] = useState<ServiceContent[]>([]);

    useEffect(() => {
        fetchServices().then(setServices);
    }, []);

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
                    {services.map((service) => (
                        <ServiceCard key={service._id} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
