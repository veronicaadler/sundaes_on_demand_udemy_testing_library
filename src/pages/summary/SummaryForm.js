import { Button, FormGroup, Form, Popover, OverlayTrigger} from 'react-bootstrap'
import { useState } from 'react'

const SummaryForm = () => {

    const [disabled, setDisabled ] = useState(true)
    const [togglepopover, setToggle ] = useState(false)

    const popover = (
        <Popover>
            <Popover.Body>
                No ice cream will actually be delivered
            </Popover.Body>
        </Popover>
    )

    const TermsAndConditions = (
        <span>
        I agree to
        <OverlayTrigger placement="right" overlay={popover}>
          <span style={{ color: "blue" }}> Terms and Conditions</span>
        </OverlayTrigger>
      </span>
    )

    return (
        <div>
            <Form>
                <FormGroup>
                    <Form.Check
                        type="checkbox" 
                        onClick={() => setDisabled((prevState) => !prevState)}
                        label={TermsAndConditions}
                    />
                </FormGroup>
                <Button type="submit" disabled={disabled}>Confirm Order</Button>
            </Form>
        </div>
      );
}
 
export default SummaryForm;