import logoIcon from './assets/logo.png'

export const Logo = () => {
  const className = 'logo'

  return (
    <div className={className}>
      <img
        className={`${className}__img`}
        src={logoIcon}
        alt='logotype'
      />
      <div className={`${className}__text`}>
        <p className={`${className}__title`}>pizza</p>
        <p className={`${className}__subtitle`}>
          самая вкусная пицца во вселенной
        </p>
      </div>
    </div>
  )
}
