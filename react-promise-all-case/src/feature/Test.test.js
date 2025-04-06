import {render, screen } from "@testing-library/react"
import App from "../App"
import jest from "jest";

descibe("Testing",()=> {
    test("Test1",()=> {
        render(<App/>)
        expect(screen.getByTestId("container")).toBeInDocument()
    })
})