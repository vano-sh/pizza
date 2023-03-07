import { Header, SelectionPanel, DisplayCards } from 'components'

export const App = () => {
  const className = 'app'

  return (
    <div className={className}>
      <Header />
      <SelectionPanel />
      <DisplayCards />
    </div>
  )
}
