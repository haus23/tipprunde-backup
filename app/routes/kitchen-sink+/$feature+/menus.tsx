import { type Key, useState } from 'react';
import { Button } from '#components/ui/button/button';
import { Icon, type IconName } from '#components/ui/icon/icon';
import { Menu, MenuItem, MenuItems } from '#components/ui/menu/menu';
import { includes } from '#utils/misc';
import { type Theme, useTheme } from '#utils/theme/theme.client';

const colorSchemes: {
  name: Theme['colorScheme'];
  label: string;
  icon: IconName;
}[] = [
  { name: 'light', label: 'Hell', icon: 'sun' },
  { name: 'dark', label: 'Dunkel', icon: 'moon' },
  { name: 'system', label: 'System', icon: 'laptop' },
];

export default function MenusRoute() {
  const [framework, setFramework] = useState('');
  function handleAction(key: Key) {
    typeof key === 'string' && setFramework(key);
  }

  const { setTheme, theme } = useTheme();

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
    <div className="flex flex-col items-center gap-y-8 text-center">
      <div className="space-y-2">
        <h3 className="flex items-center gap-x-4">
          <span>Menu with Actions</span>
        </h3>
        <Menu>
          <Button>Framework</Button>
          <MenuItems onAction={handleAction}>
            <MenuItem id="React">React</MenuItem>
            <MenuItem id="Vue">Vue</MenuItem>
            <MenuItem id="Angular">Angular</MenuItem>
          </MenuItems>
        </Menu>
        <p>Your favorite framework: {framework}</p>
      </div>

      <div className="space-y-2">
        <h3 className="flex items-center gap-x-4">
          <span>Menu with Selected State</span>
        </h3>
        <Menu>
          <Button>Color Scheme</Button>
          <MenuItems
            className="w-44"
            selectionMode="single"
            selectedKeys={selectedColorScheme}
            onAction={onThemeSelect}
          >
            {colorSchemes.map((cs) => (
              <MenuItem key={cs.name} id={cs.name} className="pl-2">
                <Icon name={cs.icon}>{cs.label}</Icon>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
        <p>Your favorite framework: {framework}</p>
      </div>
    </div>
  );
}
