import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/logo-sidebar.png" alt="Arcube" height={22} width={100} style={{ objectFit: 'contain' }} />
      ),
    },
  };
}
