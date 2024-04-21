import './matchMedia';
import { render, fireEvent, screen, act } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Solution from './components/Solution/Solution';
import '@testing-library/jest-dom'

// Test Description:
// 1. This is an end-to-end test, also referred to as integrated testing.
// 2. This test integrates multiple components (Navbar, Home, and Solution) to simulate a complete user interaction flow.
// 3. Purpose: This end-to-end test ensures that the user interaction flow from entering characters into the input field, selecting coverage criteria, clicking the submit button, and displaying the solution is working as expected.
test('end to end', async () => {
    // Render Navbar, Home, and Solution components
    render(
        <>
            <Navbar />
            <Home />
            <Solution />
        </>
    );

    // Find the input element by its placeholder text
    let inputElement = screen.getByPlaceholderText('Enter characters(A-Z) or symbols ex: A | B');

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B' } });

    // Find and interact with elements related to selecting coverage criteria
    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");
    const activeRadio = screen.getByLabelText('Active Clause Coverage');
    fireEvent.click(activeRadio);

    // Verify that the selected radio button corresponds to Active Clause Coverage
    const checkedRadioButton = screen.getByLabelText('Active Clause Coverage', { selector: 'input:checked' });
    expect(checkedRadioButton).toBe(activeRadio);

    // Find and interact with the submit button
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
    act(() => {
        fireEvent.click(buttonElement);
    });

    // Verify that the solution div is rendered and contains the expected content
    const activeSolutionDiv = screen.getByTestId("acive-div-solution");
    expect(activeSolutionDiv).toBeInTheDocument();
    expect(activeSolutionDiv.textContent).toBe('A : 1, B : 1No.ABP1FFF2FTF3TFF4TTT');
});


// Test Description:
// 1. This is an end-to-end test, also referred to as integrated testing.
// 2. This test integrates multiple components (Navbar, Home, and Solution) to simulate a complete user interaction flow.
// 3. Purpose: This end-to-end test ensures that the user interaction flow from entering characters into the input field, selecting Combinatorial Coverage criteria, clicking the submit button, and displaying the solution is working as expected.
test('end to end', async () => {
    // Render Navbar, Home, and Solution components
    render(
        <>
            <Navbar />
            <Home />
            <Solution />
        </>
    );

    // Find the input element by its placeholder text
    let inputElement = screen.getByPlaceholderText('Enter characters(A-Z) or symbols ex: A | B');

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B' } });

    // Find and interact with elements related to selecting coverage criteria
    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");
    const combinationalRadio = screen.getByLabelText('Combinatorial Coverage');
    fireEvent.click(combinationalRadio);

    // Verify that the selected radio button corresponds to Combinatorial Coverage
    const checkedRadioButton = screen.getByLabelText('Combinatorial Coverage', { selector: 'input:checked' });
    expect(checkedRadioButton).toBe(combinationalRadio);

    // Find and interact with the submit button
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
    act(() => {
        fireEvent.click(buttonElement);
    });

    // Verify that the solution div is rendered and contains the expected content
    const activeSolutionDiv = screen.getByTestId("acive-div-solution");
    expect(activeSolutionDiv).toBeInTheDocument();
    expect(activeSolutionDiv.textContent).toBe('No.ABP1FFF2FTF3TFF4TTT');
});


// Test Description:
// 1. This is an end-to-end test, also referred to as integrated testing.
// 2. This test integrates multiple components (Navbar, Home, and Solution) to simulate a complete user interaction flow.
// 3. Purpose: This end-to-end test ensures that the user interaction flow from entering characters into the input field, selecting Predicate Coverage criteria, clicking the submit button, and displaying the solution is working as expected.
test('end to end', async () => {
    // Render Navbar, Home, and Solution components
    render(
        <>
            <Navbar />
            <Home />
            <Solution />
        </>
    );

    // Find the input element by its placeholder text
    let inputElement = screen.getByPlaceholderText('Enter characters(A-Z) or symbols ex: A | B');

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B' } });

    // Find and interact with elements related to selecting coverage criteria
    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");
    const predicateRadio = screen.getByLabelText('Predicate Coverage');
    fireEvent.click(predicateRadio);

    // Verify that the selected radio button corresponds to Predicate Coverage
    const checkedRadioButton = screen.getByLabelText('Predicate Coverage', { selector: 'input:checked' });
    expect(checkedRadioButton).toBe(predicateRadio);

    // Find and interact with the submit button
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
    act(() => {
        fireEvent.click(buttonElement);
    });

    // Verify that the solution div is rendered and contains the expected content
    const activeSolutionDiv = screen.getByTestId("acive-div-solution");
    expect(activeSolutionDiv).toBeInTheDocument();
    expect(activeSolutionDiv.textContent).toBe('No.ABP1TTT2FFF');
});


// Test Description:
// 1. This is an end-to-end test, also referred to as integrated testing.
// 2. This test integrates multiple components (Navbar, Home, and Solution) to simulate a complete user interaction flow.
// 3. Purpose: This end-to-end test ensures that the user interaction flow from entering characters into the input field ('A&B|C'), selecting Predicate Coverage criteria, clicking the submit button, and displaying the solution is working as expected.
test('end to end', async () => {
    // Render Navbar, Home, and Solution components
    render(
        <>
            <Navbar />
            <Home />
            <Solution />
        </>
    );

    // Find the input element by its placeholder text
    let inputElement = screen.getByPlaceholderText('Enter characters(A-Z) or symbols ex: A | B');

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B|C' } });

    // Find and interact with elements related to selecting coverage criteria
    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");
    const predicateRadio = screen.getByLabelText('Predicate Coverage');
    fireEvent.click(predicateRadio);

    // Verify that the selected radio button corresponds to Predicate Coverage
    const checkedRadioButton = screen.getByLabelText('Predicate Coverage', { selector: 'input:checked' });
    expect(checkedRadioButton).toBe(predicateRadio);

    // Find and interact with the submit button
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
    act(() => {
        fireEvent.click(buttonElement);
    });

    // Verify that the solution div is rendered and contains the expected content
    const activeSolutionDiv = screen.getByTestId("acive-div-solution");
    expect(activeSolutionDiv).toBeInTheDocument();
    expect(activeSolutionDiv.textContent).toBe('No.ABCP1FFTT2FFFF');
});


// Test Description:
// 1. This is an end-to-end test, also referred to as integrated testing.
// 2. This test integrates multiple components (Navbar, Home, and Solution) to simulate a complete user interaction flow.
// 3. Purpose: This end-to-end test ensures that the user interaction flow from entering characters into the input field ('A&B&C'), selecting Predicate Coverage criteria, clicking the submit button, and displaying the solution is working as expected.
test('end to end', async () => {
    // Render Navbar, Home, and Solution components
    render(
        <>
            <Navbar />
            <Home />
            <Solution />
        </>
    );

    // Find the input element by its placeholder text
    let inputElement = screen.getByPlaceholderText('Enter characters(A-Z) or symbols ex: A | B');

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B&C' } });

    // Find and interact with elements related to selecting coverage criteria
    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");
    const predicateRadio = screen.getByLabelText('Predicate Coverage');
    fireEvent.click(predicateRadio);

    // Verify that the selected radio button corresponds to Predicate Coverage
    const checkedRadioButton = screen.getByLabelText('Predicate Coverage', { selector: 'input:checked' });
    expect(checkedRadioButton).toBe(predicateRadio);

    // Find and interact with the submit button
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
    act(() => {
        fireEvent.click(buttonElement);
    });

    // Verify that the solution div is rendered and contains the expected content
    const activeSolutionDiv = screen.getByTestId("acive-div-solution");
    expect(activeSolutionDiv).toBeInTheDocument();
    expect(activeSolutionDiv.textContent).toBe('No.ABCP1TTTT2FFFF');
});
