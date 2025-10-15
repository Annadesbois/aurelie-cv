// src/pages/Contact.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  type MockedFunction,
} from "vitest";
import Contact from "./Contact";

// Minimal types that match what Contact uses from Formspree
type FormState = {
  submitting?: boolean;
  succeeded?: boolean;
  errors?: unknown;
};
type SubmitHandler = (e: unknown) => void;
type UseFormReturn = [FormState, SubmitHandler];
type UseFormFn = () => UseFormReturn;

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(),
  ValidationError: () => null,
}));

import { useForm } from "@formspree/react";

const useFormMock = useForm as unknown as MockedFunction<UseFormFn>;

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

const setUseFormState = (state: FormState) => {
  const handler: SubmitHandler = vi.fn();
  useFormMock.mockReturnValue([state, handler]);
};

describe("Contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders form (idle state)", () => {
    setUseFormState({ submitting: false });

    renderWithRouter(<Contact />);

    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole("button", { name: /^send$/i });
    expect(submitBtn).toBeEnabled();
  });

  test("disables submit button while submitting", () => {
    setUseFormState({ submitting: true });

    renderWithRouter(<Contact />);

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeDisabled();
    expect(submitBtn).toHaveTextContent(/sending/i);
  });

  test("renders thank-you view when succeeded", () => {
    setUseFormState({ succeeded: true });

    renderWithRouter(<Contact />);

    expect(
      screen.getByRole("heading", { name: /thanks!/i })
    ).toBeInTheDocument();
    const backLink = screen.getByRole("link", { name: /back to homepage/i });
    expect(backLink).toHaveAttribute("href", "/");
  });
});
