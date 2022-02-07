import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('displays image for each scoop from server', async () => {
    render(<Options optionType="scoops"/>)

    //find images
    const scoopImages = await screen.findAllByTestId('hello')
    console.log(scoopImages)
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images as well
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']) //arrays and objects need to use toEqual rather than toBe

})