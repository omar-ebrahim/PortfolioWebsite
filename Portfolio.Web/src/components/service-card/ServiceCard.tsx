import styles from './ServiceCard.module.scss';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

interface ServiceCardProps {
    title: string;
    description: PortableTextBlock[];
    price: number;
    from?: boolean;
    notes?: string;
}

const ServiceCard = ({
    title,
    description,
    price,
    from = false,
    notes,
}: ServiceCardProps) => {
    const formattedPrice = price === 0 ? 'Free' : `£${price.toFixed(2)}`;
    const priceLabel = from ? `From ${formattedPrice}` : formattedPrice;

    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.description}>
                <PortableText value={description} />
                {notes && <sub className={styles.notes}>{notes}</sub>}
                <h5 className={styles.price}>{priceLabel}</h5>
            </div>
        </article>
    );
};

export default ServiceCard;
