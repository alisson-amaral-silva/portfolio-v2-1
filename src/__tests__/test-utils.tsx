import { render } from "@testing-library/react";
import ThemeProvider from "@/components/providers/ThemeProvider";
import I18nProvider from "@/components/providers/I18nProvider";
import { ReactElement } from "react";

export function renderWithProviders(ui: ReactElement) {
  return render(
    <ThemeProvider>
      <I18nProvider>{ui}</I18nProvider>
    </ThemeProvider>
  );
}
