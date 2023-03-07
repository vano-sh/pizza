import imagePath from './assets/pizza_cheeseburger.png'
import { ReactComponent as IconAdd } from './assets/plus.svg'

export const Card = () => {
  const className = 'card'

  return (
    <div className={className}>
      <div className={`${className}__image`}>
        <img src={imagePath} alt='Pizza' />
      </div>
      <h4 className={`${className}__title`}>Чизбургер-пицца</h4>
      <div className={`${className}__selector`}>
        <ul className={`${className}__dough`}>
          <li className={`${className}__item active`}>тонкое</li>
          <li className={`${className}__item`}>традиционное</li>
        </ul>
        <ul className={`${className}__size`}>
          <li className={`${className}__item active`}>26 см.</li>
          <li className={`${className}__item`}>30 см.</li>
          <li className={`${className}__item`}>40 см.</li>
        </ul>
      </div>
      <div className={`${className}__footer`}>
        <div className={`${className}__price`}>от 395 ₽</div>
        <div className={`${className}__btn`}>
          <IconAdd />
          <span className={`${className}__text-btn`}>Добавить</span>
          <div className={`${className}__amount-btn`}>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
