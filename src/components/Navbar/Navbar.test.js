import '../../matchMedia';
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import '@testing-library/jest-dom'


// UNIT TESTING
// Test Description:
// 1. This is a unit-level test.
// 2. Designed to test the rendering of the Navbar component.
// 3. Purpose: This test checks if the Navbar component renders correctly and if the "home" link is present in the rendered output.
test("checking Navbar rendering1", async () => {
    // Render the Navbar component
    render(<Navbar />);

    // Find the link element with the text "home"
    const linkELement = screen.getByText(/home/i);

    // Ensure that the link element is present in the rendered output
    expect(linkELement).toBeInTheDocument();
})