// base-styles.js
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset}
  * {
    font-family: 'Nunito Sans', sans-serif !important;
    font-size: 15px !important;
  }
`;

export default baseStyles;
