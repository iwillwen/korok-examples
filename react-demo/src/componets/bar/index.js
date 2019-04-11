import * as React from 'react'
import { registerKorok } from 'korok-react'

import Card from '../card'

@registerKorok('bar')
class Bar extends React.Component {
  render() {
    return (
      <Card width={this.korok.getProp('width') || 100}>
        <div className="bar">
          <h3 style={{ textAlign: 'left', padding: 0, margin: 0 }}>Bar</h3>
          <p>{this.korok.getParam('page:message')}</p>
        </div>
      </Card>
    )
  }
}

export default Bar