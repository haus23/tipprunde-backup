import type { Key } from 'react';
import { includes } from '#utils/misc';
import { type Theme, useTheme } from '#utils/theme/theme.client';
import { twMerge } from '#utils/tv';
import { Button } from './ui/button/button';
import { Icon, type IconName } from './ui/icon/icon';
import { Menu, MenuItem, MenuItems } from './ui/menu/menu';

const colorSchemes: {
  name: Theme['colorScheme'];
  label: string;
  icon: IconName;
}[] = [
  { name: 'light', label: 'Hell', icon: 'sun' },
  { name: 'dark', label: 'Dunkel', icon: 'moon' },
  { name: 'system', label: 'System', icon: 'laptop' },
];

export function ThemeMenu() {
  const { effectiveColorScheme, setTheme, theme } = useTheme();

  const selectedColorScheme = new Set([theme.colorScheme]);

  function onThemeSelect(key: Key) {
    if (
      includes(
        colorSchemes.map((cs) => cs.name),
        key,
      )
    ) {
      !selectedColorScheme.has(key) && setTheme({ ...theme, colorScheme: key });
    }
  }

  return (
    <Menu>
      <Button
        className={twMerge(
          'h-auto min-w-0 overflow-clip p-2 data-[pressed=true]:scale-none',
          theme.colorScheme === 'system' && 'opacity-70',
        )}
        variant="ghost"
        aria-label="Öffne Farbschema Menu"
      >
        <div className="relative size-5">
          <Icon
            name="moon"
            className={twMerge(
              'absolute inset-0 origin-[50%_100px] rotate-90 transform transition-transform duration-300',
              effectiveColorScheme === 'dark' && 'rotate-0',
            )}
          />
          <Icon
            name="sun"
            className={twMerge(
              '-rotate-90 absolute inset-0 origin-[50%_100px] transform transition-transform duration-300',
              effectiveColorScheme === 'light' && 'rotate-0',
            )}
          />
        </div>
      </Button>
      <MenuItems
        selectionMode="single"
        selectedKeys={selectedColorScheme}
        onAction={onThemeSelect}
        aria-label="Liste der Farbschemata"
        items={colorSchemes}
        className="w-44"
      >
        {(item) => (
          <MenuItem key={item.name} id={item.name} className="pl-2">
            <Icon name={item.icon}>{item.label}</Icon>
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
  );
}
