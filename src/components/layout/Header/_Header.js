import { Logo, CartBtn } from '../../common'

export const Header = () => {
  const className = 'header'

  return (
    <header className={className}>
      <div className={`${className}__wrapper`}>
        <Logo />
        <CartBtn />
      </div>
    </header>
  )
}
