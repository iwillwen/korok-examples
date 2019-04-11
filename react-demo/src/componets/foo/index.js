import * as React from 'react'
import { registerKorok } from 'korok-react'

import Card from '../card'

import './styles.css'

@registerKorok('foo')
class Foo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.message
    }

    this.korok
      .bindParam(() => {
        return {
          message: `Message: ${this.state.text}`
        }
      })
      .registerProp('target', {
        description: 'Target',
        required: true
      })
      .registerProp('message', {
        description: 'Message',
        required: true
      })
      .registerParam('message', {
        scope: 'page'
      })
  }

  updateText(text) {
    this.setState({
      text
    })
    this.korok.dispatch()
  }

  render() {
    return (
      <Card width={this.korok.getProp('width')}>
        <div className="foo">
          <h3 style={{ textAlign: 'left', padding: 0, margin: 0 }}>Foo</h3>
          <h2>Hello {this.korok.getProp('target')}!</h2>
          <p>{this.korok.getParam('message')}</p>

          <input
            style={{ width: 400 }}
            value={this.state.text}
            onChange={evt => this.updateText(evt.target.value)}
          />
        </div>
      </Card>
    )
  }
}

export default Foo