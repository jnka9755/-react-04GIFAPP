import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid Test', () => { 

    const category = 'Tets'

    test('loading test', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render (
            <GifGrid 
                category={ category } 
            />
        );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('show images test', () => {

        const gifs = [
            {
                id: 'test1',
                title: 'Test1',
                url: 'http://localhost/test1.jpg'
            },
            {
                id: 'test2',
                title: 'Test2',
                url: 'http://localhost/test2.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render (
            <GifGrid 
                category={ category } 
            />
        );
        
        expect( screen.getAllByRole('img').length ).toBe(2)
    });
});