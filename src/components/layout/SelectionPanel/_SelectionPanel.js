import { Categories, Sort } from '../../common'

export const SelectionPanel = () => {
  const className = 'selection-panel'

  return (
    <section className={className}>
      <Categories />
      <Sort />
    </section>
  )
}
