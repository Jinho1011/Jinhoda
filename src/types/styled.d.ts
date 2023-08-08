// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        color: import('../../assets/styles/theme').ColorType;
        device: import('../../assets/styles/theme').DeviceType;
    }
}
