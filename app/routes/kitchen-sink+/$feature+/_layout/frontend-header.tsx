import { Logo } from '#components/logo';
import { ThemeMenu } from '#components/theme-menu';
import { Link, NavLink } from '#components/ui/link/link';

export function FrontendHeader() {
  return (
    <header className="sticky top-0 mx-auto grid h-14 max-w-6xl px-2 sm:px-4">
      <div className="hidden grid-cols-[auto_1fr_auto] items-center gap-x-4 sm:grid">
        <Link href="/" className="pl-2 text-app">
          <Logo />
        </Link>
        <nav>
          <NavLink href="/kitchen-sink/frontend">Kitchen Sink</NavLink>
          <NavLink href="/kitchen-sink/frontend/buttons">Buttons</NavLink>
          <NavLink href="/kitchen-sink/frontend/links">Links</NavLink>
        </nav>
        <div className="flex items-center gap-x-2">
          <ThemeMenu />
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 sm:hidden">
        <div />
        <h1 className="font-medium text-xl">Kitchen Sink</h1>
        <div className="flex gap-x-2">
          <ThemeMenu />
        </div>
      </div>
    </header>
  );
}
