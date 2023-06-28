import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';

  render() {
    return <button class={this.color}>{this.text}</button>;
  }
}
