import {
    Controller,
    type Control,
    type FieldPath,
    type FieldValues,
} from 'react-hook-form';
import styles from '../FormControls.module.scss';
import clsx from 'clsx';

interface ITextControllerProps<
    TFieldValues extends FieldValues, // react-hook fields, comes from useForm<MyFormType>()
    TName extends FieldPath<TFieldValues>, // The name needs to be a valid value of the form
> {
    name: TName;
    control: Control<TFieldValues>;
    label: string;
    maxLength: number;
    required?: boolean;
    usePlaceholderInsteadOfLabel?: boolean;
}

const TextController = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    name,
    control,
    label,
    maxLength,
    required,
    usePlaceholderInsteadOfLabel,
}: ITextControllerProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required ? `${label} is required` : undefined,
                maxLength: {
                    value: maxLength,
                    message: `${label} must be ${maxLength} characters or fewer.`,
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
                            {...field}
                            maxLength={maxLength}
                            placeholder={
                                usePlaceholderInsteadOfLabel === true
                                    ? label
                                    : undefined
                            }
                        />
                        <sub className={styles.errorMessage}>
                            {error?.message ?? ''}
                        </sub>
                    </>
                );
            }}
        />
    );
};

export default TextController;
