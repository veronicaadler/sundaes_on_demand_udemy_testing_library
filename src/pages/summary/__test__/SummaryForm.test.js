import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

    describe('initial conditions', () => {
        test('that the checkbox is unchecked by default', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i})
            expect(checkbox).toBeEnabled()
        })
        test('that the button starts off disabled', () => {
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
        })
    })

    describe('functionality of the summary form checkbox', () => {
        it('should enable the button when checked', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i})
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
            fireEvent.click(checkbox)
            expect(button).toBeEnabled()
        })
        it('should disable the button upon unchecking', () => {
            render(<SummaryForm />)
            const checkbox = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i})
            const button = screen.getByRole('button', { name: /confirm order/i})
            expect(button).toBeDisabled()
            fireEvent.click(checkbox)
            expect(button).toBeEnabled()
            fireEvent.click(checkbox)
            expect(button).toBeDisabled()
        })
    })