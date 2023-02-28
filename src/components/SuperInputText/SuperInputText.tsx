import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
} from 'react'
import s from 'components/SuperInputText/SuperInputText.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyDown,
        onEnter,
        error,
        className,
        spanClassName,
        id,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e) // если есть пропс onChange, то передаем ему е (поскольку onChange не обязателен)
        onChangeText?.(e.currentTarget.value)
    }
    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')
    const finalInputClassName = s.input
        + (error ? ' ' + s.errorInput : ' ' + s.superInput)
        + (className ? ' ' + s.className : '')

    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <span
                id={id ? id + '-span' : undefined}
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
}

