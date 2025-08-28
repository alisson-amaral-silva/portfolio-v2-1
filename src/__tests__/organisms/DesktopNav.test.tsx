import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DesktopNav from "@/components/organisms/DesktopNav";
import { type NavItem } from "@/lib/nav/types";
import { renderWithProviders } from "@/__tests__/test-utils";

const items: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  {
    labelKey: "nav.products",
  },
];

function t(k: string) {
  const map: Record<string, string> = {
    "nav.home": "Início",
    "nav.products": "Produtos",
    "nav.launches": "Lançamentos",
    "nav.offers": "Ofertas",
  };
  return map[k] ?? k;
}

test("abre o dropdown e lista subitens", async () => {
  renderWithProviders(
    <div className="md:flex">
      <DesktopNav items={items} t={t} />
    </div>
  );

  const trigger = screen.getByRole("button", { name: /produtos/i });
  await userEvent.click(trigger);

  expect(
    await screen.findByRole("link", { name: /lançamentos/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /ofertas/i })).toBeInTheDocument();
});
