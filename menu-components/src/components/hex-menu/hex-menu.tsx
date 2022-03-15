import { Component, h } from '@stencil/core';

@Component({
  tag: 'ws-hex-menu',
  styleUrl: './hex-menu.css',
  shadow: true,
})
export class SideDrawer {
  render() {
    return [
      <input id="menu-control" type="checkbox" />,
      <nav>
        <label htmlfor="menu-control">
          <ul>
            <li id="menu">menu</li>
            <li id="people">
              People
              <ul>
                <li>bob</li>
                <li>frank</li>
                <li>gwen</li>
                <li>sarah</li>
                <li>james</li>
              </ul>
            </li>
            <li id="places">
              Places
              <ul>
                <li>home</li>
                <li>work</li>
                <li>school</li>
                <li>store</li>
                <li>bank</li>
              </ul>
            </li>
            <li id="things">
              Things
              <ul>
                <li>ball</li>
                <li>knife</li>
                <li>apple</li>
                <li>grill</li>
                <li>shoe</li>
              </ul>
            </li>
            <li id="actions">
              Actions
              <ul>
                <li>walk</li>
                <li>run</li>
                <li>jump</li>
                <li>roll</li>
                <li>hop</li>
              </ul>
            </li>
            <li id="ideas">
              Ideas
              <ul>
                <li>this</li>
                <li>pen</li>
                <li>is</li>
                <li>an</li>
                <li>idea</li>
              </ul>
            </li>
          </ul>
        </label>
      </nav>,
    ];
  }
}
