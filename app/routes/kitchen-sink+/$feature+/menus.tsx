import { type Key, useState } from 'react';
import { Button } from '#components/ui/button/button';
import { Icon, type IconName } from '#components/ui/icon/icon';
import { Menu, MenuItem, MenuItems } from '#components/ui/menu/menu';

const colorSchemes: {
  name: string;
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

  const [colorScheme, setColorScheme] = useState(() => {
    const documentColorScheme = document.documentElement.dataset.colorScheme;
    return new Set([documentColorScheme || 'system']);
  });

  function changeColorScheme(key: Key) {
    document.documentElement.dataset.colorScheme = String(key);
    setColorScheme(new Set([document.documentElement.dataset.colorScheme]));
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
            selectedKeys={colorScheme}
            onAction={changeColorScheme}
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
