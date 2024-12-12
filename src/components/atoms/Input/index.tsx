import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Input({
  id,
  label,
  helperText,
  type,
  actionButton,
  value,
  setValue,
  handleActionClick,
}: {
  id?: string
  label?: string,
  helperText?: string,
  type: string,
  actionButton?: string,
  handleActionClick?: () => void
  value: string,
  setValue: (value: string) => void,
}) {
  return (
    <>
      <Form.Label htmlFor={id ? id : "input"}>{label}</Form.Label>
      <div className='d-flex gap-2'>
        <Form.Control
          type={type}
          id={id ? id : "input"}
          aria-describedby={id ? id : "input"}
          className=''
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {actionButton && <Button onClick={handleActionClick}>{actionButton}</Button>}
      </div>
      

      <Form.Text id={`helperText-${id ? id : "input"}`} muted>
        {helperText}
      </Form.Text>
    </>
  );
}