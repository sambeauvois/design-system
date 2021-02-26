// generated file by .scripts/icons.script.js

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bal-icon-call',
  styleUrl: '../bal-icon-svg.scss',
  shadow: false,
  scoped: true,
})
export class IconCall {
  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  render() {
    return (
      <Host class={{ [`is-size-${this.size}`]: !!this.size }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g clip-path="url(#clip0)"><path d="M23.074 29.685c-.99 0-1.98-.198-2.969-.792C12.585 23.946 5.857 17.217.91 9.697-.476 7.52-.278 4.75 1.503 2.968l1.78-1.78c1.584-1.584 3.959-1.584 5.542 0l3.166 3.166c1.584 1.583 1.584 3.958 0 5.54l-.396.397c2.375 2.968 5.146 5.54 8.114 8.113l.396-.395c1.385-1.386 3.958-1.386 5.541 0l3.167 3.166c.791.792 1.187 1.781 1.187 2.77 0 .99-.396 1.98-1.187 2.771l-1.781 1.781c-1.386.594-2.573 1.188-3.958 1.188zM5.857 1.979c-.396 0-.99.198-1.386.594L2.888 4.156c-1.187 1.187-1.385 2.968-.396 4.156 4.948 7.322 11.28 13.853 18.603 18.602 1.385.792 3.166.792 4.155-.396l1.782-1.78c.395-.397.593-.792.593-1.386 0-.594-.198-.99-.593-1.385L23.864 18.8c-.791-.791-1.979-.791-2.77 0l-.99.99a.956.956 0 01-1.385 0c-3.364-2.77-6.729-6.135-9.5-9.697-.395-.396-.197-.99 0-1.386l.99-.989c.792-.792.792-1.979 0-2.77L7.044 1.78c-.198.396-.594.198-1.187.198z"/></g><defs><clipPath id="clip0"><path d="M0 0h30v30H0z"/></clipPath></defs></svg>
      </Host>
    );
  }
}
