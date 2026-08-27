import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import TextController from '../form-controls/text-control/TextController';
import EmailController from '../form-controls/email-control/EmailController';
import TextAreaController from '../form-controls/text-area-control/TextAreaController';

interface IContactFormFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const defaultValues: IContactFormFields = {
    email: '',
    firstName: '',
    lastName: '',
    message: '',
};

const ContactForm = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { isValid },
    } = useForm<IContactFormFields>({
        mode: 'all',
        defaultValues,
    });

    const onSubmit: SubmitHandler<IContactFormFields> = (data) =>
        console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
            <div className={styles.formFieldSection}>
                <div className={styles.formField}>
                    <TextController
                        control={control}
                        label="First name"
                        maxLength={100}
                        name="firstName"
                        required
                        usePlaceholderInsteadOfLabel
                    />
                </div>
                <div className={styles.formField}>
                    <TextController
                        control={control}
                        label="Last name"
                        maxLength={100}
                        name="lastName"
                        required
                        usePlaceholderInsteadOfLabel
                    />
                </div>
            </div>
            <div className={styles.formFieldSection}>
                <div className={styles.formField}>
                    <EmailController
                        control={control}
                        label="Email"
                        name="email"
                        required
                        usePlaceholderInsteadOfLabel
                    />
                </div>
            </div>
            <div className={styles.formFieldSection}>
                <div className={styles.formField}>
                    <TextAreaController
                        control={control}
                        label="Message"
                        maxLength={3000}
                        name="message"
                        required
                        usePlaceholderInsteadOfLabel
                    />
                </div>
            </div>
            <div className={styles.formButtons}>
                <button
                    className={styles.buttonSecondary}
                    type="button"
                    onClick={() => reset(defaultValues)}
                >
                    Clear form
                </button>
                <button
                    className={styles.buttonPrimary}
                    type="submit"
                    disabled={!isValid}
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
