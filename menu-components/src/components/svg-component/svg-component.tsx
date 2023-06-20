// import { Component, h, Prop } from '@stencil/core';

// @Component({
//   tag: 'svg-component',
//   styleUrl: 'svg-component.css',
//   shadow: true,
// })
// export class SvgComponent {
//   @Prop() svg: string;

//   render() {
//     return (
//       <div>
//         <div innerHTML={this.svg}></div>
//       </div>
//     );
//   }
// }

// import { Component, h, Prop } from '@stencil/core';

// @Component({
//   tag: 'svg-component',
//   styleUrl: 'svg-component.css',
//   shadow: true,
// })
// export class SvgComponent {
//   @Prop() svg: string;
//   @Prop() width: string;
//   @Prop() height: string;
//   @Prop() color: string;

//   render() {
//     const svgStyle = {
//       width: this.width,
//       height: this.height,
//       fill: this.color,
//     };

//     return (
//       <div>
//         <div style={svgStyle} innerHTML={this.svg}></div>
//       </div>
//     );
//   }
// }

// import { Component, h, Prop } from '@stencil/core';

// @Component({
//   tag: 'svg-component',
//   styleUrl: 'svg-component.css',
//   shadow: true,
// })
// export class SvgComponent {
//   @Prop() svg: string;
//   @Prop() width: string;
//   @Prop() height: string;
//   @Prop() color: string;
//   @Prop() stroke: string;
//   @Prop() count: number;

//   render() {
//     const svgStyle = {
//       width: this.width,
//       height: this.height,
//       fill: this.color,
//       stroke: this.stroke,
//     };

//     console.log(svgStyle);

//     return (
//       // <div
//       //   class={`hexagon color-tile-${index} ${this.setShift(index)} ${
//       //     this.count % 2
//       //   }`}
//       // >
//       //   <div style={svgStyle} innerHTML={this.svg}></div>
//       // </div>
//     // );
//   }
// }
