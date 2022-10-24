import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import NavBar from '../../src/components/NavBar';

describe('NavBar', function () {
    test('Should render and verify NavBar contains brand text', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <NavBar brandTitle="Ricky and Monty" />
            </MemoryRouter>
        );

        const navBar = screen.getByTestId('page-title');
        expect(navBar).toHaveTextContent('Monty');
    });
});
