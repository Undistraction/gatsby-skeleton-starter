import { css } from 'styled-components';
import { propsApi } from '../utils/api';

export default values => props => css`
  & > * + * {
    ${propsApi(props).marginLeft(values)};
  }
`;
