import { Button, FormGroup, Label, Input, Form } from 'reactstrap'
import { useState } from 'react'

const SummaryForm = () => {

    const [disabled, setDisabled ] = useState(true)

    return (
        <div>
            <Form>
                <FormGroup>
                    <Input 
                        id="termsandcons" 
                        type="checkbox" 
                        onClick={() => setDisabled((prevState) => !prevState)}
                    >
                    </Input>
                    <Label check for="termsandcons">I agree to Terms and Conditions</Label>
                </FormGroup>
                <Button type="submit" disabled={disabled}>Confirm Order</Button>
            </Form>
        </div>
      );
}
 
export default SummaryForm;