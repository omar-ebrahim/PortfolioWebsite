import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string;
    description: string;
    price: number;
    from?: boolean;
}

const ServiceCard = ({
    title,
    description,
    price,
    from = false,
}: ServiceCardProps) => {
    const formattedPrice = price === 0 ? 'Free' : `£${price.toFixed(2)}`;
    const priceLabel = from ? `From ${formattedPrice}` : formattedPrice;

    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <h5>{priceLabel}</h5>
        </article>
    );
};

export default ServiceCard;
