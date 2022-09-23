import { render, screen } from "@testing-library/react"
import App from "./App"

test('kuvab teksti "väärtus"', () => {
  render(<App />)
  expect(screen.getByText("Väärtus:")).toBeInTheDocument()
})

describe("App", () => {
  test("renders App component", () => {
    render(<App />)
    screen.getAllByRole("button")
  })
})
