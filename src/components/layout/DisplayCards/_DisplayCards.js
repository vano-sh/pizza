import { Card } from './components/Card'

export const DisplayCards = () => {
  const className = 'display-cards'

  return (
    <section className={className}>
      <h1 className={`${className}__title`}>Все пиццы</h1>
      <div className={`${className}__cards`}>
        <Card />
      </div>
    </section>
  )
}
