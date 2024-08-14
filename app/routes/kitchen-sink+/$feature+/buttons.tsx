import { Button } from '#components/ui/button/button';
import { Icon } from '#components/ui/icon/icon';

export default function ButtonsRoute() {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <div className="space-y-2 text-center">
        <h3>Default Button</h3>
        <Button type="button">Click me!</Button>
      </div>
      <div className="space-y-2 text-center">
        <h3>Primary Button</h3>
        <Button type="button" color="primary">
          Click me!
        </Button>
      </div>
      <div className="space-y-2 text-center">
        <h3>Ghost Button</h3>
        <Button type="button" variant="ghost">
          Click me!
        </Button>
      </div>
      <div className="space-y-2 text-center">
        <h3>Primary with Icon</h3>
        <Button type="button" color="primary" className="pl-3">
          <Icon name="loader-circle">Loading</Icon>
        </Button>
      </div>
      <div className="space-y-2 text-center">
        <h3>Ghost Icon Only</h3>
        <Button type="button" variant="ghost" className="p-2 h-auto min-w-0">
          <Icon name="menu" />
        </Button>
      </div>
    </div>
  );
}
