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
  interface BalDropdown {}
  interface BalSpinner {}
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Closes this toast
    */
    'close': () => Promise<void>;
    /**
    * Closes the toast after the given duration in ms
    */
    'closeIn': (duration: number) => Promise<void>;
    /**
    * Message text
    */
    'message': string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }
}

declare global {


  interface HTMLBalButtonElement extends Components.BalButton, HTMLStencilElement {}
  var HTMLBalButtonElement: {
    prototype: HTMLBalButtonElement;
    new (): HTMLBalButtonElement;
  };

  interface HTMLBalDropdownElement extends Components.BalDropdown, HTMLStencilElement {}
  var HTMLBalDropdownElement: {
    prototype: HTMLBalDropdownElement;
    new (): HTMLBalDropdownElement;
  };

  interface HTMLBalSpinnerElement extends Components.BalSpinner, HTMLStencilElement {}
  var HTMLBalSpinnerElement: {
    prototype: HTMLBalSpinnerElement;
    new (): HTMLBalSpinnerElement;
  };

  interface HTMLBalTagElement extends Components.BalTag, HTMLStencilElement {}
  var HTMLBalTagElement: {
    prototype: HTMLBalTagElement;
    new (): HTMLBalTagElement;
  };

  interface HTMLBalToastElement extends Components.BalToast, HTMLStencilElement {}
  var HTMLBalToastElement: {
    prototype: HTMLBalToastElement;
    new (): HTMLBalToastElement;
  };
  interface HTMLElementTagNameMap {
    'bal-button': HTMLBalButtonElement;
    'bal-dropdown': HTMLBalDropdownElement;
    'bal-spinner': HTMLBalSpinnerElement;
    'bal-tag': HTMLBalTagElement;
    'bal-toast': HTMLBalToastElement;
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
  interface BalDropdown {}
  interface BalSpinner {}
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Message text
    */
    'message'?: string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }

  interface IntrinsicElements {
    'bal-button': BalButton;
    'bal-dropdown': BalDropdown;
    'bal-spinner': BalSpinner;
    'bal-tag': BalTag;
    'bal-toast': BalToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bal-button': LocalJSX.BalButton & JSXBase.HTMLAttributes<HTMLBalButtonElement>;
      'bal-dropdown': LocalJSX.BalDropdown & JSXBase.HTMLAttributes<HTMLBalDropdownElement>;
      'bal-spinner': LocalJSX.BalSpinner & JSXBase.HTMLAttributes<HTMLBalSpinnerElement>;
      'bal-tag': LocalJSX.BalTag & JSXBase.HTMLAttributes<HTMLBalTagElement>;
      'bal-toast': LocalJSX.BalToast & JSXBase.HTMLAttributes<HTMLBalToastElement>;
    }
  }
}


