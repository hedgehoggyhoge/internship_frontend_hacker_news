import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./reducer";
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('renders react link', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );;
    const titleElem = screen.getByText(/Обновить новости/i)
    expect(titleElem).toBeInTheDocument();

    screen.debug();
});
