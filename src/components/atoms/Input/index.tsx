import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Input({
  id,
  label,
  helperText,
  type,
  actionButton
}: {
  id?: string
  label?: string,
  helperText?: string,
  type: string,
  actionButton?: string,
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
        />
        {actionButton && <Button className='-2'>{actionButton}</Button>}
      </div>
      

      <Form.Text id={`helperText-${id ? id : "input"}`} muted>
        {helperText}
      </Form.Text>
    </>
  );
}