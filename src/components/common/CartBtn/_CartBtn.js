import { ReactComponent as CartIcon } from './assets/cart.svg'

export const CartBtn = () => {
  const className = 'cart-btn'

  return (
    <div className={className}>
      <div className={`${className}__wrapper`}>
        <p className={`${className}__amount`}>520</p>
        <div className={`${className}__separation`}></div>
        <div className={`${className}__cart`}>
          <CartIcon />
          <p className={`${className}__quantity`}>5</p>
        </div>
      </div>
    </div>
  )
}
