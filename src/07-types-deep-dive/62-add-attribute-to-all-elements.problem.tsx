/**
 * Let's say we wanted to add a new optional attribute to all React
 * elements. How would we do that?
 *
 * 1. Make use of declaration merging in the global scope to add
 * a new attribute to all React elements.
 */

import { AriaAttributes, DOMAttributes } from "react";

declare global {
  namespace React {
    //type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;
    interface HTMLAttributes<T>  {
      testId: string
    }
  }
}

<>
  <div testId="123" />
  <audio testId="123" />
  <video testId="123" />
  <a testId="123" />
  <abbr testId="123" />
  <address testId="123" />
</>;
