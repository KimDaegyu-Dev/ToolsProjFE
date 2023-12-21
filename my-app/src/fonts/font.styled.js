import { css } from '@emotion/react';
import styled from '@emotion/styled';

const textVariantCSS = ({ variant }) => {
  switch (variant) {
    case 'Title':
      return css`
        font-family: 'Plaster', Georgia, 'Times New Roman', Times, serif;
        font-size: 18em;
        line-height: 2rem;
      `;
    case 'Body1':
      return css`
        font-family: 'Medium', Arial, Helvetica, sans-serif;
        font-size: 32px;
        line-height: 1.7rem;
      `;
    case 'Body2':
      return css`
        font-family: 'Medium', Arial, Helvetica, sans-serif;
        font-size: 20px;
        line-height: 1.5rem;
      `;
    case 'Body3':
      return css`
        font-family: 'Regular', Arial, Helvetica, sans-serif;
        font-size: 18px;
        line-height: 1.2rem;
      `;
    case 'Body4':
      return css`
        font-family: 'Regular', Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        line-height: 1.1rem;
      `;
    case 'Body5':
      return css`
        font-size: 0.75rem;
        line-height: 1rem;
      `;
    case 'Body6':
      return css`
        font-size: 0.7rem;
        line-height: 1rem;
      `;
    case 'Body7':
      return css`
        font-family: 'Medium', Arial, Helvetica, sans-serif;
        font-size: 20px;
        line-height: 1.5rem;
        padding-left: 60px;
      `;
    case 'caption':
    default:
      return css`
        font-size: 0.65rem;
        line-height: 0.9rem;
      `;
  }
};
const textWeightCSS = ({ weight }) => {
  switch (weight) {
    case 'ExtraBold':
      return css`
        font-weight: 800;
      `;
    case 'Bold':
      return css`
        font-weight: 700;
      `;
    case 'SemiBold':
      return css`
        font-weight: 600;
      `;
    case 'Regular':
    default:
      return css`
        font-weight: 400;
      `;
  }
};
const textFontCSS = ({ font }) => {
  switch (font) {
    case 'ExtraBold':
      return css`
        font-family: 'ExtraBold';
      `;
    case 'Bold':
      return css`
        font-family: 'ExtraBold';
      `;
    case 'ExtraLight':
      return css`
        font-family: 'ExtraLight';
      `;
    case 'Light':
      return css`
        font-family: 'Light';
      `;
    case 'Medium':
      return css`
        font-family: 'Medium';
      `;

    case 'SemiBold':
      return css`
        font-family: 'SemiBold';
      `;
    case 'Regular':
    default:
      return css`
        font-family: 'Regular';
      `;
  }
};

export const TextSpan = styled.span`
  color: ${({ color }) => color || '#000'};
  word-break: keep-all;
  ${textVariantCSS};
  ${textFontCSS};
  ${textWeightCSS}
`;
