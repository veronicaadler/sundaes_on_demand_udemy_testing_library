import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('displays image for each scoop from server', async () => {
    render(<Options optionType="scoops"/>)

    //find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images as well
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']) //arrays and objects need to use toEqual rather than toBe

})

test('displays image for each topping from server', async () => {
    render(<Options optionType="toppings"/>)

    //find images
    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    //confirm alt text of images as well
    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual(['Hot fudge topping', 'Rainbow sprinkles topping', 'Cherry topping']) //arrays and objects need to use toEqual rather than toBe

})