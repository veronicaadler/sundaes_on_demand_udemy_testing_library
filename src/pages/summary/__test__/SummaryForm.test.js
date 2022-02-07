import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

    describe('initial conditions', () => {
        test('that the checkbox is unchecked by default', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox')
            expect(checkbox).not.toBeChecked()
        })
        test('that the button starts off disabled', () => {
            render(<SummaryForm />)
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
        })
    })

    describe('functionality of the summary form checkbox', () => {
        it('should enable the button when checked', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox')
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
            userEvent.click(checkbox)
            expect(button).toBeEnabled()
        })
        it('should disable the button upon unchecking', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox')
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
            userEvent.click(checkbox)
            expect(button).toBeEnabled()
            userEvent.click(checkbox)
            expect(button).toBeDisabled()
        })
    })

    test('popover responds to hover', async () => {
        render(<SummaryForm />)
        //popover starts off hidden
        const nopopover = screen.queryByText(/no ice cream will actually be delivered/i)
        expect(nopopover).not.toBeInTheDocument();
        //popover appears when we mouse over the checkbox label
        const termsAndConditions = screen.getByText(/terms and conditions/i)
        userEvent.hover(termsAndConditions)

        const popover = screen.getByText(/no ice cream will actually be delivered/i)
        expect(popover).toBeInTheDocument() //while the preceding line will fail if the element is not there,
        //and thus this line doesn't serve a functional purpose, Bonnie recommends that it is best practice
        //to keep it for readibility and clarity
        userEvent.unhover(termsAndConditions)
        await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
      );

        //popover disappears after mousing off of the checkbox label
    })