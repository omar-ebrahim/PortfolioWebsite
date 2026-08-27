import {
    type FieldValues,
    type FieldPath,
    type Control,
    Controller,
} from 'react-hook-form';
import styles from '../FormControls.module.scss';
import clsx from 'clsx';

interface ITextAreaControllerProps<
    TFieldValues extends FieldValues, // react-hook fields, comes from useForm<MyFormType>()
    TName extends FieldPath<TFieldValues>, // The name needs to be a valid value of the form
> {
    name: TName;
    control: Control<TFieldValues>;
    label: string;
    maxLength: number;
    required?: boolean;
    usePlaceholderInsteadOfLabel?: boolean;
    lines?: number;
}

const MIN_LINE_PADDING = 8;
const LINE_HEIGHT = 16;

const TextAreaController = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    control,
    label,
    maxLength,
    name,
    required,
    usePlaceholderInsteadOfLabel,
    lines = 5,
}: ITextAreaControllerProps<TFieldValues, TName>) => {
    const minLines = lines < 1 ? 5 : lines;
    const height = MIN_LINE_PADDING + minLines * LINE_HEIGHT;

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
                minLength: {
                    value: 50,
                    message: `${label} must be 50 characters or more.`,
                },
            }}
            render={({ field, fieldState: { error, invalid } }) => {
                return (
                    <>
                        {!usePlaceholderInsteadOfLabel && (
                            <label htmlFor={name}></label>
                        )}
                        <textarea
                            className={clsx(
                                styles.field,
                                (error || invalid) && styles.error,
                            )}
                            {...field}
                            maxLength={maxLength}
                            placeholder={
                                usePlaceholderInsteadOfLabel === true
                                    ? label
                                    : undefined
                            }
                            style={{ height: `${height}px` }}
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

export default TextAreaController;
