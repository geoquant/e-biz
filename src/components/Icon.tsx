import React from "react"
import styled from "styled-components"

type Props = {
  name: string
  style?: object
  color?: string
  onClick?: () => void
}

const facebook = {
  paths: [
    "M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z",
  ],
  name: "facebook",
}

const twitter = {
  paths: [
    "M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z",
  ],
  name: "twitter",
}

const cart = {
  paths: [
    "M863.147 645.973l159.36-402.347c0.958-2.338 1.514-5.051 1.514-7.893 0-11.782-9.551-21.333-21.333-21.333-0.007 0-0.015 0-0.022 0l-687.146-0c-3.531 0.093-6.824 1.030-9.711 2.616l0.111-0.056-16.213-55.68c-14.933-48.213-40.107-93.013-120.747-93.013h-147.627c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333v0h147.627c51.627 0 66.347 19.413 79.787 62.933l161.067 554.667c4.997 22.584 13.252 42.554 24.373 60.568l-0.48-0.835c-34.717 10.957-59.557 42.605-60.159 80.143l-0.001 0.070c2.371 46.643 40.767 83.564 87.787 83.564s85.416-36.921 87.778-83.353l0.009-0.211c-0.093-14.346-3.878-27.787-10.451-39.448l0.211 0.408h210.56c-7.595 12.134-12.116 26.868-12.16 42.655l-0 0.012c2.371 46.643 40.767 83.564 87.787 83.564s85.416-36.921 87.778-83.353l0.009-0.211c-0.158-22.262-9.081-42.41-23.484-57.191l0.017 0.018c0.693-1.823 1.152-3.932 1.277-6.13l0.003-0.057c0-11.782-9.551-21.333-21.333-21.333v0h-338.56c-60.587 0-66.987-23.253-79.787-69.76l-16.427-56.96h408.747c9.239-0.198 17.016-6.241 19.796-14.569l0.044-0.151zM461.44 909.867c-22.436-1.39-40.107-19.926-40.107-42.59 0-23.564 19.103-42.667 42.667-42.667 23.537 0 42.623 19.059 42.667 42.586l0 0.004c-0.582 23.701-19.934 42.693-43.721 42.693-0.529 0-1.057-0.009-1.582-0.028l0.076 0.002zM825.387 913.067c-22.436-1.39-40.107-19.926-40.107-42.59 0-23.564 19.103-42.667 42.667-42.667 23.537 0 42.623 19.059 42.667 42.586l0 0.004c-0.582 23.701-19.934 42.693-43.721 42.693-0.529 0-1.057-0.009-1.582-0.028l0.076 0.002zM422.187 616.747l-104.533-359.68h653.653l-142.507 359.68z",
  ],
  name: "cart",
}

const Icon = ({
  name,
  color = "var(--textColor)",
  style = {},
  onClick,
}: Props) => {
  // TODO Clean up
  const icon =
    name === "facebook" ? facebook : name === "twitter" ? twitter : cart
  return (
    <Svg
      onClick={onClick}
      style={style}
      color={color}
      viewBox="0 0 1024 1024"
      aria-labelledby={icon.name}
    >
      <title id={`icon-${icon.name}`}>{icon.name}</title>
      {icon.paths.map((path, i) => (
        <path d={path} key={`path-${i}`} />
      ))}
    </Svg>
  )
}

export default Icon

const Svg = styled("svg")`
  fill: ${({ color }: { color: string }) => color};
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
`
