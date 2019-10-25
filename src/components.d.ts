/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled': boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading': boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-link";
  }
  interface BalSpinner {}
}

declare global {


  interface HTMLBalButtonElement extends Components.BalButton, HTMLStencilElement {}
  var HTMLBalButtonElement: {
    prototype: HTMLBalButtonElement;
    new (): HTMLBalButtonElement;
  };

  interface HTMLBalSpinnerElement extends Components.BalSpinner, HTMLStencilElement {}
  var HTMLBalSpinnerElement: {
    prototype: HTMLBalSpinnerElement;
    new (): HTMLBalSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'bal-button': HTMLBalButtonElement;
    'bal-spinner': HTMLBalSpinnerElement;
  }
}

declare namespace LocalJSX {
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled'?: boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading'?: boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-link";
  }
  interface BalSpinner {}

  interface IntrinsicElements {
    'bal-button': BalButton;
    'bal-spinner': BalSpinner;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bal-button': LocalJSX.BalButton & JSXBase.HTMLAttributes<HTMLBalButtonElement>;
      'bal-spinner': LocalJSX.BalSpinner & JSXBase.HTMLAttributes<HTMLBalSpinnerElement>;
    }
  }
}


