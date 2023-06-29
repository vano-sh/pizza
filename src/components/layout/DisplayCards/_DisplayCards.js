import { Card } from './components/Card'

export const DisplayCards = () => {
  const className = 'display-cards'

  // Other code...
  // Code... 

  return (
    <section className={className}>
      <h1 className={`${className}__title`}>Все пиццы</h1>
      <div className={`${className}__cards`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
