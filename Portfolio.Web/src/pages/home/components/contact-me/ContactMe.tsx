import ContactForm from '../../../../components/contact-form/ContactForm';
import { sectionIds } from '../../../../utils/utils';

import styles from './ContactMe.module.scss';

const ContactMe = () => {
    return (
        <div id={sectionIds.contact} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.heading}>Contact</div>
                    <div>
                        Fill in the form and I will get back you you soon!
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
