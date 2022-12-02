// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    color: import("./theme").ColorType
    device: import("./theme").DeviceType
  }
}
