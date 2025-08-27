export type ChildItem = { label?: string; labelKey?: string; href: string };
export type NavItem = {
label?: string;
labelKey?: string;
href?: string;
children?: ChildItem[];
};


export type CTA = { label?: string; labelKey?: string; href: string };