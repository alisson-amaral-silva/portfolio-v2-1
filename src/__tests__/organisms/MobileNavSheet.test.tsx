import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobileNavSheet from "@/components/organisms/MobileNavSheet";
import { type NavItem } from "@/lib/nav/types";
import { renderWithProviders } from "@/__tests__/test-utils";

const items: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  {
    labelKey: "nav.products",
    children: [
      { labelKey: "nav.launches", href: "/produtos/lancamentos" },
      { labelKey: "nav.offers", href: "/ofertas" },
    ],
  },
];

function t(k: string) {
  const map: Record<string, string> = {
    "nav.open": "Abrir menu",
    "nav.close": "Fechar menu",
    "nav.menu": "Menu",
    "nav.mobileLabel": "Navegação móvel",
    "nav.home": "Início",
    "nav.products": "Produtos",
    "nav.launches": "Lançamentos",
    "nav.offers": "Ofertas",
  };
  return map[k] ?? k;
}

test("abre o sheet e exibe título e links", async () => {
  renderWithProviders(<MobileNavSheet items={items} t={t} />);

  const trigger = screen.getByRole("button", { name: /abrir menu/i });
  await userEvent.click(trigger);

  expect(await screen.findByText(/menu/i)).toBeInTheDocument();
  expect(
    screen.getByRole("navigation", { name: /navegação móvel/i })
  ).toBeInTheDocument();

  // fecha ao clicar em um link simples
  const home = screen.getAllByRole("link", { name: /início/i })[0];
  await userEvent.click(home);
  expect(screen.queryByText(/menu/i)).not.toBeInTheDocument();
});
