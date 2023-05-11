import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe('GifCard Test', () => { 

    const title = 'Test title';
    const url = 'http://localhost/Test';

    test('Test snapshot', () => { 

        const { container } = render (
            <GifCard
                title={ title }
                url={ url }
            />
        );
        
        expect( container ).toMatchSnapshot();

     });

     test('Test show image', () => { 

        render (
            <GifCard 
                title={ title }
                url={ url }
            />
        );

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src , alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt ); 
      });

      test('Test title', () => {

        render (
            <GifCard 
                title={ title }
                url={ url }
            />
        );

        expect( screen.getByText( title )).toBeTruthy();
      });
 });