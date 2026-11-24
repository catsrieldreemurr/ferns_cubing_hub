import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "twisty-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          alg?: string;
          puzzle?: string;
          visualization?: "3D" | "2D" | "PG3D" | "experimental-2D-LL" | "experimental-2D-LL-face";
          "control-panel"?: "bottom-row" | "none";
          background?: "checkered" | "none";
          "hint-facelets"?: "floating" | "none";
        },
        HTMLElement
      >;
    }
  }
}