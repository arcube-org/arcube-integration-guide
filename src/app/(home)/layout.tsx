import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/logo-sidebar.png" alt="Arcube" height={22} width={100} style={{ objectFit: 'contain' }} />
        ),
      }}
      themeSwitch={{ enabled: true }}
      searchToggle={{ enabled: false }}
    >
      {children}
    </HomeLayout>
  );
}
