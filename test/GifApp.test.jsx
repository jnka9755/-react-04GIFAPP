import { render, screen, fireEvent } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe('GifApp Test', () => {

    test('should first', () => {

        const { container } = render(
            <GifApp />
        )
        
        expect( container ).toMatchSnapshot();
    });

    test('AddCategory test', () => {

        const category = 'Halo'

        const { container } = render( <GifApp /> );
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
 
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );
 
        fireEvent.input( input, { target: { value: category + '2' } } );
        fireEvent.submit( form );
 
         expect( container.getElementsByClassName('card-grid').length ).toBe(3) ;
    });

    test('NoAddCategory test', () => {

        const category = 'Diablo'

        const { container } = render( <GifApp /> );
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
  
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form ); 
 
        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );
 
        expect( container.getElementsByClassName('card-grid').length ).toBe(1);
    });
});