import { render, screen } from "@testing-library/react"
import Header from "./Header"
import "@testing-library/jest-dom"


test("should render header component",()=>{
    render(<Header/>);
    var headetElement=screen.getByText("Header");
    expect(headetElement).toBeInTheDocument();
})