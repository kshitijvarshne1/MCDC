import '../../matchMedia';
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./Home";
import '@testing-library/jest-dom'


// Test Description:
// 1. This is a unit-level test.
// 2. Designed to test the rendering of the Home component.
// 3. Purpose: This test checks if the Home component renders correctly and if the text "Enter the predicate" is present in the rendered output.
test("checking Home rendering1", async () => {
    render(<Home />);
    const linkELement = screen.getByText(/Enter the predicate/i);
    expect(linkELement).toBeInTheDocument();
})

// Test Description:
// 1. This is a unit-level test.
// 2. Designed to test the rendering and functionality of the selectCriteriaDiv within the Home component.
// 3. Purpose: This test verifies that the selectCriteriaDiv renders correctly within the Home component, and ensures that the radio buttons for selecting different coverage criteria (Predicate, Combinatorial, and Active Clause) are present and functional. It specifically tests the functionality of selecting the Combinatorial Coverage radio button and ensures that it becomes checked after clicking it.
test("checking selectCriteriaDiv rendering", () => {
    render(<Home />);

    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");

    expect(selectCriteriaDiv).toBeInTheDocument();

    const predicateRadio = screen.getByLabelText('Predicate Coverage');
    const combinationalRadio = screen.getByLabelText('Combinatorial Coverage');
    const activeRadio = screen.getByLabelText('Active Clause Coverage');

    expect(predicateRadio).toBeInTheDocument();
    expect(combinationalRadio).toBeInTheDocument();
    expect(activeRadio).toBeInTheDocument();

    fireEvent.click(combinationalRadio);

    const checkedRadioButton = screen.getByLabelText('Combinatorial Coverage', { selector: 'input:checked' });

    expect(checkedRadioButton).toBe(combinationalRadio);
});


// Test Description:
// 1. This is a unit-level test.
// 2. Designed to test the rendering and functionality of the selectCriteriaDiv within the Home component.
// 3. Purpose: This test verifies that the selectCriteriaDiv renders correctly within the Home component and ensures that the radio buttons for selecting different coverage criteria (Predicate, Combinatorial, and Active Clause) are present and functional. It specifically tests the functionality of selecting the Predicate Coverage radio button and ensures that it becomes checked after clicking it.
test("checking selectCriteriaDiv rendering", () => {
    render(<Home />);

    const selectCriteriaDiv = screen.getByTestId("select-criteria-div");

    expect(selectCriteriaDiv).toBeInTheDocument();

    const predicateRadio = screen.getByLabelText('Predicate Coverage');
    const combinationalRadio = screen.getByLabelText('Combinatorial Coverage');
    const activeRadio = screen.getByLabelText('Active Clause Coverage');

    expect(predicateRadio).toBeInTheDocument();
    expect(combinationalRadio).toBeInTheDocument();
    expect(activeRadio).toBeInTheDocument();

    fireEvent.click(predicateRadio);

    const checkedRadioButton = screen.getByLabelText('Predicate Coverage', { selector: 'input:checked' });

    expect(checkedRadioButton).toBe(predicateRadio);
});


// Test Description:
// 1. This is a unit-level test.
// 2. Designed to test the rendering and state update functionality of the Input component within the Home component.
// 3. Purpose: This test verifies that the Input component renders correctly within the Home component, and ensures that it updates its state correctly when characters are entered into the input field.
test("checking Input component rendering and state update", () => {
    render(<Home />);

    // Find the input element by its placeholder text
    const inputElement = screen.getByPlaceholderText("Enter characters(A-Z) or symbols ex: A | B");

    // Ensure that the input element is present in the rendered output
    expect(inputElement).toBeInTheDocument();

    // Simulate a change event by entering characters into the input field
    fireEvent.change(inputElement, { target: { value: 'A&B' } });

    // Verify that the value of the input element has been updated correctly
    expect(inputElement.value).toBe('A&B');
});
