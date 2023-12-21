import { TextSpan } from '../../src/fonts/font.styled';

export default function Checkbox({ children, disabled, checked, ...props }) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        style={{
          cursor: 'pointer',
        }}
        {...props}
        readOnly
      />
      <TextSpan variant={'Body3'} font={'Regular'}>
        {children}
      </TextSpan>
    </label>
  );
}
