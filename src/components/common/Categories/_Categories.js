import { useState } from 'react'
import { CategoriesBtn } from './components/CategoriesBtn'

export const Categories = () => {
  const [active, setActive] = useState(0)

  const className = 'categories'
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className={className}>
      <ul className={`${className}__list`}>
        {categories.map((category) => (
          <CategoriesBtn className={className} key={category}>
            {category}
          </CategoriesBtn>
        ))}
      </ul>
    </div>
  )
}
