/*
 * @Author: Yanc
 * @Date: 2022-11-06 20:18:20
 * @LastEditTime: 2022-11-06 22:48:10
 */
import { defineCustomElement } from "vue";
import testElement from "./index.ce.vue";

// Vue generates a new HTML element class from the component definition.
export const TestElement = defineCustomElement(testElement);

// Register the custom element so that it can be used as <dark-mode-switch>.
export function register(tagName: string = "test-element") {
  customElements.define(tagName, TestElement);
}
