import { Component, h, Prop, Host } from '@stencil/core'

@Component({
  tag: 'bal-button',
  styleUrl: 'bal-button.scss',
  shadow: false,
  scoped: true,
})
export class Button {
  /**
   * The theme type of the button. Given by bulma our css framework.
   */
  @Prop() type: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'link' = 'primary'

  /**
   * Size of the button
   */
  @Prop() size: 'small' | '' = ''

  /**
   * Size of the button
   */
  @Prop() iconPosition: 'left' | 'right' = 'left'

  /**
   * If `true` the width of the buttons is limited
   */
  @Prop() isSquare: boolean

  /**
   * If `true` the button is disabled
   */
  @Prop() disabled: boolean

  /**
   * If `true` the button has a light color
   */
  @Prop() light: boolean

  /**
   * If `true` the button has a active theme
   */
  @Prop() isActive: boolean = false

  /**
   * If `true` the button has a full width
   */
  @Prop() expanded: boolean

  /**
   * If `true` the button is outlined
   */
  @Prop() outlined: boolean

  /**
   * If `true` the button is inverted
   */
  @Prop() inverted: boolean

  /**
   * If `true` the label is hidden and a loading spinner is shown instead.
   */
  @Prop() loading: boolean

  /**
   * If `true` the bottom corners get rounded
   */
  @Prop() bottomRounded = false

  /**
   * Name of the left button icon
   */
  @Prop() icon = ''

  /**
   * Name of the right button icon
   */
  @Prop() iconRight = ''

  render() {
    if (this.isSquare) {
      return this.renderSquareButton()
    }
    return this.renderButton()
  }

  renderButton() {
    return (
      <Host class={[this.expanded ? 'is-fullwidth' : ''].join(' ')}>
        <button
          class={[
            'button',
            `is-${this.type}`,
            this.size ? 'is-small' : '',
            this.light ? 'is-light' : '',
            this.inverted ? 'is-inverted' : '',
            this.isActive ? 'is-active' : '',
            this.outlined ? 'is-outlined' : '',
            this.expanded ? 'is-fullwidth' : '',
            this.loading ? 'is-loading' : '',
            this.bottomRounded ? 'has-round-bottom-corners' : '',
          ].join(' ')}
          disabled={this.disabled}>
          <span>{/* Empty span to get the correct text height */}</span>
          {this.loading ? <bal-spinner class="is-small is-inverted" /> : ''}
          {this.icon ? (
            <bal-icon class="icon-left" name={this.icon} size={this.size} type={this.type} inverted={this.inverted} />
          ) : (
            ''
          )}
          <bal-text style={{ display: this.loading ? 'none' : 'inline' }}>
            <slot />
          </bal-text>
          {this.iconRight ? (
            <bal-icon
              class="icon-right"
              name={this.iconRight}
              size={this.size}
              type={this.type}
              inverted={this.inverted}
            />
          ) : (
            ''
          )}
        </button>
      </Host>
    )
  }

  renderSquareButton() {
    return (
      <Host>
        <button
          class={[
            'button',
            'is-square',
            `is-${this.type}`,
            this.size ? 'is-small' : '',
            this.light ? 'is-light' : '',
            this.inverted ? 'is-inverted' : '',
            this.isActive ? 'is-active' : '',
            this.outlined ? 'is-outlined' : '',
            this.isSquare ? 'is-square' : '',
            this.bottomRounded ? 'has-round-bottom-corners' : '',
          ].join(' ')}
          disabled={this.disabled}>
          <bal-icon name={this.icon} size={this.size} type={this.type} inverted={this.inverted} />
        </button>
      </Host>
    )
  }
}
