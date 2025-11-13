type NavLink = {
  label: string;
};

type FooterLink = {
  label: string;
  link: string;
};

type PerformanceImgPosition = {
  id: string;
  left?: number;
  right?: number;
  bottom: number;
  transform?: string;
};

export type { NavLink, FooterLink, PerformanceImgPosition };
