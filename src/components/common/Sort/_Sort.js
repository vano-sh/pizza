import { ReactComponent as ArrowIcon } from './assets/arrow.svg'

export const Sort = () => {
  const className = 'sort'
  const sortItems = ['популярности', 'цене', 'алфавиту']

  return (
    <div className={className}>
      <div className={`${className}__label`}>
        <ArrowIcon />
        <span className={`${className}__text`}>Сортировка по:</span>
        <span className={`${className}__selected`}>популярности</span>
      </div>
      <div className={`${className}__popup`}>
        <ul className={`${className}__list`}>
          {sortItems.map((item) => (
            <li className={`${className}__item`} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
