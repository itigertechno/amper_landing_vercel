import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    primary:
      'bg-primary-900 text-white hover:bg-primary-800 active:bg-primary-800 focus-visible:outline-primary-800',
    white: '',
  },
  outline: {
    white:
      'ring-white text-white hover:ring-primary-900 hover:text-primary-900 active:ring-primary-900 active:text-primary-900 focus-visible:outline-white',
    primary: '',
  },
}

type ButtonProps = (
  | {
    variant?: 'solid'
    color?: keyof typeof variantStyles.solid
  }
  | {
    variant: 'outline'
    color?: keyof typeof variantStyles.outline
  }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'primary'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
