import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from 'components/SuperButton/SuperButton.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type VariantType = 'secondary' | 'red'
type SuperButtonPropsType = DefaultButtonPropsType & {
    variant?: VariantType
}

export const SuperButton = (
    {
        variant,
        disabled,
        className,
        ...restProps
    }: SuperButtonPropsType
) => {

    const styleVariant = {
        'red': s.red,
        'secondary': s.secondary,
    }

    const finalClassName = s.button +
        (disabled ? ` ${s.disabled}`
            : !!variant ? ` ${styleVariant[variant]}` : ` ${s.default}`)

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}


