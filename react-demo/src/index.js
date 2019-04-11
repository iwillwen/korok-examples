import * as React from 'react'
import { render } from 'react-dom'
import Korok from 'korok-core'

import './componets'

Korok.registerRegularProp('width', {
  description: 'Width',
  default: '100%'
})

const cardsConfig = [
  {
    key: 'foo',
    props: {
      width: 500,
      target: 'Korok',
      message: 'This is a message for the whole page. Make some changes.'
    }
  },
  {
    key: 'bar',
    props: {
      width: 300
    }
  }
]

class App extends React.Component {
  render() {
    const cards = cardsConfig.map(({ key, props }, i) => {
      const Comp = Korok.get(key)

      if (!Comp) return null

      return <Comp {...props} key={i} />
    })

    return cards
  }
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
