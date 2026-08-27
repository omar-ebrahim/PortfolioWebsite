import {
    Controller,
    type Control,
    type FieldPath,
    type FieldValues,
} from 'react-hook-form';
import styles from '../FormControls.module.scss';
import clsx from 'clsx';

interface IEmailControllerProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
> {
    name: TName;
    control: Control<TFieldValues>;
    label: string;
    required?: boolean;
    usePlaceholderInsteadOfLabel?: boolean;
}

const EmailController = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    name,
    control,
    label,
    required,
    usePlaceholderInsteadOfLabel,
}: IEmailControllerProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required ? `${label} is required` : undefined,
                minLength: {
                    value: 5,
                    message: `${label} must be 5 characters or more.`,
                },
            }}
            render={({ field, fieldState: { error } }) => {
                return (
                    <>
                        {!usePlaceholderInsteadOfLabel && (
                            <label htmlFor={name}>{label}</label>
                        )}
                        <input
                            className={clsx(
                                styles.field,
                                error && styles.error,
                            )}
                            type="email"
                            {...field}
                            minLength={5}
                            placeholder={
                                usePlaceholderInsteadOfLabel === true
                                    ? label
                                    : undefined
                            }
                        />
                        {error && (
                            <sub className={styles.error}>{error.message}</sub>
                        )}
                    </>
                );
            }}
        />
    );
};

export default EmailController;
