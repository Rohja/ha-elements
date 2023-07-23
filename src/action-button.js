import { html, css, LitElement } from "lit";
import { mdiHelpRhombusOutline } from "@mdi/js";

export class ActionIcon extends LitElement {
  static get properties() {
    return {
      hide: { type: Boolean, attribute: "hide" },
      scale: { type: Number, attribute: "scale" },
      backgroundColor: { type: String, attribute: "background-color" },
      backgroundOpacity: { type: Number, attribute: "background-opacity" },
      outline: { type: String, attribute: "outline" },
      fill: { type: String, attribute: "fill" },
      mdiIcon: { type: String, attribute: "mdi-icon" },
      rotate: { type: Boolean, attribute: "rotate" },
      rotateDuration: { type: Number, attribute: "rotate-duration" },
      viewbox: { type: String, attribute: "viewbox" },
    };
  }

  constructor() {
    super();
    this.hide = false;
    this.scale = 60;
    this.backgroundColor = "var(--primary-color)";
    this.backgroundOpacity = 1;
    this.outline = "0.2em solid var(--primary-text-color)";
    this.fill = "var(--primary-text-color)";
    this.mdiIcon = mdiHelpRhombusOutline;
    this.rotate = false;
    this.rotateDuration = 2;
    this.viewbox = "0 0 24 24";
  }

  static styles = css`
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }

    .container {
      width: 100%;
      height: 100%;

      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <style>
        .container {
          display: ${this.hide ? "none" : "flex"};
        }
        .wrapper {
          display: block;
          width: ${this.scale}%;
          height: ${this.scale}%;
          position: relative;
        }
        .wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${this.backgroundColor};
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: ${this.backgroundOpacity};
        }

        svg {
          width: 100%;
          height: 100%;

          outline: ${this.outline};
          border-radius: 50%;

          opacity: 1;
        }
        path {
          fill: ${this.fill};
        }

        .rotate {
          animation: rotation ${this.rotateDuration}s infinite linear;
        }
      </style>
      <div class="container">
        <div class="wrapper">
          <svg viewBox="${this.viewbox}" class="${this.rotate ? "rotate" : ""}">
            <path d="${this.mdiIcon}"></path>
          </svg>
        </div>
      </div>
    `;
  }
}

customElements.define("action-icon", ActionIcon);

export class ActionButton extends LitElement {
  //   pump_speed_icons = [mdiNumeric0, mdiNumeric1, mdiNumeric2];

  static get properties() {
    return {
      name: { type: String, attribute: "name" },
      // Icons (String)
      buttonIcon: { type: String, attribute: "button-icon" },
      action1Icon: { type: String, attribute: "action1-icon" },
      action2Icon: { type: String, attribute: "action2-icon" },
      action3Icon: { type: String, attribute: "action3-icon" },
      action4Icon: { type: String, attribute: "action4-icon" },
      // Hide (Boolean)
      buttonHide: { type: Boolean, attribute: "button-hide" },
      action1Hide: { type: Boolean, attribute: "action1-hide" },
      action2Hide: { type: Boolean, attribute: "action2-hide" },
      action3Hide: { type: Boolean, attribute: "action3-hide" },
      action4Hide: { type: Boolean, attribute: "action4-hide" },
      // Background color (String)
      buttonBackgroundColor: {
        type: String,
        attribute: "button-background-color",
      },
      action1BackgroundColor: {
        type: String,
        attribute: "action1-background-color",
      },
      action2BackgroundColor: {
        type: String,
        attribute: "action2-background-color",
      },
      action3BackgroundColor: {
        type: String,
        attribute: "action3-background-color",
      },
      action4BackgroundColor: {
        type: String,
        attribute: "action4-background-color",
      },
      // Background Opacity (Number)
      buttonBackgroundOpacity: {
        type: Number,
        attribute: "button-background-opacity",
      },
      action1BackgroundOpacity: {
        type: Number,
        attribute: "action1-background-opacity",
      },
      action2BackgroundOpacity: {
        type: Number,
        attribute: "action2-background-opacity",
      },
      action3BackgroundOpacity: {
        type: Number,
        attribute: "action3-background-opacity",
      },
      action4BackgroundOpacity: {
        type: Number,
        attribute: "action4-background-opacity",
      },
      // Fill   (String)
      buttonFill: { type: String, attribute: "button-fill" },
      action1Fill: { type: String, attribute: "action1-fill" },
      action2Fill: { type: String, attribute: "action2-fill" },
      action3Fill: { type: String, attribute: "action3-fill" },
      action4Fill: { type: String, attribute: "action4-fill" },
      // Rotate (Boolean)
      buttonRotate: { type: Boolean, attribute: "button-rotate" },
      action1Rotate: { type: Boolean, attribute: "action1-rotate" },
      action2Rotate: { type: Boolean, attribute: "action2-rotate" },
      action3Rotate: { type: Boolean, attribute: "action3-rotate" },
      action4Rotate: { type: Boolean, attribute: "action4-rotate" },
      // Rotate Duration (Number)
      buttonRotateDuration: {
        type: Number,
        attribute: "button-rotate-duration",
      },
      action1RotateDuration: {
        type: Number,
        attribute: "action1-rotate-duration",
      },
      action2RotateDuration: {
        type: Number,
        attribute: "action2-rotate-duration",
      },
      action3RotateDuration: {
        type: Number,
        attribute: "action3-rotate-duration",
      },
      action4RotateDuration: {
        type: Number,
        attribute: "action4-rotate-duration",
      },
      // viewBox (String)
      buttonViewBox: { type: String, attribute: "button-viewbox" },
      action1ViewBox: { type: String, attribute: "action1-viewbox" },
      action2ViewBox: { type: String, attribute: "action2-viewbox" },
      action3ViewBox: { type: String, attribute: "action3-viewbox" },
      action4ViewBox: { type: String, attribute: "action4-viewbox" },
      // Outline (String)
      buttonOutline: { type: String, attribute: "button-outline" },
      action1Outline: { type: String, attribute: "action1-outline" },
      action2Outline: { type: String, attribute: "action2-outline" },
      action3Outline: { type: String, attribute: "action3-outline" },
      action4Outline: { type: String, attribute: "action4-outline" },
    };
  }

  constructor() {
    super();
    this.name = "action-button";
    // Hide
    this.buttonHide = false;
    this.action1Hide = false;
    this.action2Hide = false;
    this.action3Hide = false;
    this.action4Hide = false;
    // Background color
    this.buttonBackgroundColor = "var(--primary-color)";
    this.action1BackgroundColor = "var(--primary-color)";
    this.action2BackgroundColor = "var(--primary-color)";
    this.action3BackgroundColor = "var(--primary-color)";
    this.action4BackgroundColor = "var(--primary-color)";
    // Background Opacity
    this.buttonBackgroundOpacity = 1;
    this.action1BackgroundOpacity = 1;
    this.action2BackgroundOpacity = 1;
    this.action3BackgroundOpacity = 1;
    this.action4BackgroundOpacity = 1;
    // Fill
    this.buttonFill = "var(--primary-text-color)";
    this.action1Fill = "var(--primary-text-color)";
    this.action2Fill = "var(--primary-text-color)";
    this.action3Fill = "var(--primary-text-color)";
    this.action4Fill = "var(--primary-text-color)";
    // Rotate
    this.buttonRotate = false;
    this.action1Rotate = false;
    this.action2Rotate = false;
    this.action3Rotate = false;
    this.action4Rotate = false;
    // Rotate Duration
    this.buttonRotateDuration = 2;
    this.action1RotateDuration = 2;
    this.action2RotateDuration = 2;
    this.action3RotateDuration = 2;
    this.action4RotateDuration = 2;
    // viewBox
    this.buttonViewBox = "0 0 24 24";
    this.action1ViewBox = "0 0 24 24";
    this.action2ViewBox = "0 0 24 24";
    this.action3ViewBox = "0 0 24 24";
    this.action4ViewBox = "0 0 24 24";
    // Outline
    this.buttonOutline = "0.2em solid var(--primary-text-color)";
    this.action1Outline = "0.2em solid var(--primary-text-color)";
    this.action2Outline = "0.2em solid var(--primary-text-color)";
    this.action3Outline = "0.2em solid var(--primary-text-color)";
    this.action4Outline = "0.2em solid var(--primary-text-color)";
  }

  static styles = css`
    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    action-icon {
      width: 100%;
      height: 100%;
    }

    .action-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20% 20%;
      grid-template-areas:
        "action1 action2"
        "action3 action4";
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
    }
    .action1 {
      grid-area: action1;

      position: relative;
    }
    .action2 {
      grid-area: action2;

      position: relative;
    }
    .action3 {
      grid-area: action3;

      position: relative;
    }
    .action4 {
      grid-area: action4;

      position: relative;
    }

    .action {
      width: 80%;
      height: 80%;

      position: absolute;
    }
    .action.top-right {
      bottom: 0;
      left: 0;
    }
    .action.top-left {
      bottom: 0;
      right: 0;
    }
    .action.bottom-right {
      top: 0;
      left: 0;
    }
    .action.bottom-left {
      top: 0;
      right: 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <long-press event-prefix="${this.name}-button">
          <slot name="custom-button"
            ><action-icon
              class="main"
              mdi-icon="${this.buttonIcon}"
              background-color="${this.buttonBackgroundColor}"
              background-opacity="${this.buttonBackgroundOpacity}"
              fill="${this.buttonFill}"
              ?rotate="${this.buttonRotate}"
              rotate-duration="${this.buttonRotateDuration}"
              viewbox="${this.buttonViewBox}"
              outline="${this.buttonOutline}"
            ></action-icon
          ></slot>
        </long-press>
        <div class="action-grid">
          <div class="action1">
            <div class="action top-left">
              <action-icon
                ?hide="${this.action1Hide}"
                mdi-icon="${this.action1Icon}"
                background-color="${this.action1BackgroundColor}"
                background-opacity="${this.action1BackgroundOpacity}"
                fill="${this.action1Fill}"
                scale="80"
                ?rotate="${this.action1Rotate}"
                rotate-duration="${this.action1RotateDuration}"
                viewbox="${this.action1ViewBox}"
                outline="${this.action1Outline}"
              ></action-icon>
            </div>
          </div>
          <div class="action2">
            <div class="action top-right">
              <action-icon
                ?hide="${this.action2Hide}"
                mdi-icon="${this.action2Icon}"
                background-color="${this.action2BackgroundColor}"
                background-opacity="${this.action2BackgroundOpacity}"
                fill="${this.action2Fill}"
                scale="80"
                ?rotate="${this.action2Rotate}"
                rotate-duration="${this.action2RotateDuration}"
                viewbox="${this.action2ViewBox}"
                outline="${this.action2Outline}"
              ></action-icon>
            </div>
          </div>
          <div class="action3">
            <div class="action bottom-left">
              <action-icon
                ?hide="${this.action3Hide}"
                mdi-icon="${this.action3Icon}"
                background-color="${this.action3BackgroundColor}"
                background-opacity="${this.action3BackgroundOpacity}"
                fill="${this.action3Fill}"
                scale="80"
                ?rotate="${this.action3Rotate}"
                rotate-duration="${this.action3RotateDuration}"
                viewbox="${this.action3ViewBox}"
                outline="${this.action3Outline}"
              ></action-icon>
            </div>
          </div>
          <div class="action4">
            <div class="action bottom-right">
              <action-icon
                ?hide="${this.action4Hide}"
                mdi-icon="${this.action4Icon}"
                background-color="${this.action4BackgroundColor}"
                background-opacity="${this.action4BackgroundOpacity}"
                fill="${this.action4Fill}"
                scale="80"
                ?rotate="${this.action4Rotate}"
                rotate-duration="${this.action4RotateDuration}"
                viewbox="${this.action4ViewBox}"
                outline="${this.action4Outline}"
              ></action-icon>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
