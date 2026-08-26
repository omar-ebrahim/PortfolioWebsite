import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string;
    description: string;
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
                <p>{description}</p>
                {notes && <sub className={styles.notes}>{notes}</sub>}
                <h5 className={styles.price}>{priceLabel}</h5>
            </div>
        </article>
    );
};

export default ServiceCard;
