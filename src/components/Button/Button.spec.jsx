import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text 'Load More'", () => {
    render(<Button text="Load More" />);
    expect.assertions(1); //nesse teste, espero pelo menos uma asserção

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeInTheDocument(); //quero saber se esse botão está na tela
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);
    /* fireEvent.click(button); */

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button text="Load More" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);
    /* fireEvent.click(button); */ //userEvent e fireEvent fazem a mesma coisa

    expect(button).toBeDisabled();

    /*   expect(
    screen.getByRole("button", { name: /load more/i })
  ).toHaveBeenCalledTimes(1); // Essa é uma maneira mais curta de fazer */
  });

  it("should be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <Button text="Load More" disabled={false} onClick={fn} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
