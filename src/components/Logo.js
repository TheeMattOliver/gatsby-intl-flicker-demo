import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export function Logo() {
  return (
    <StaticImage
      src="../assets/images/logo.png"
      loading="eager"
      alt="Logo"
      placeholder="blurred" />
  );
}