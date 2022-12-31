import { ColorType, DeviceType } from "./styles/theme"

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorType
    device: DeviceType
  }
}
