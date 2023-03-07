import { CategoriesBtn } from './components/CategoriesBtn'

export const Categories = () => {
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
      <div className={`${className}__wrapper`}>
        {categories.map((category) => (
          <CategoriesBtn className={className} key={category}>
            {category}
          </CategoriesBtn>
        ))}
      </div>
    </div>
  )
}
