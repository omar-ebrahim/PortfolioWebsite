import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string;
    description: string;
    price: number;
}

const ServiceCard = ({ title, description, price }: ServiceCardProps) => {
    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <h5>£{price.toFixed(2)}</h5>
        </article>
    );
};

export default ServiceCard;
