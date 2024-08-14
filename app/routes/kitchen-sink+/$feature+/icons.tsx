import { Icon } from '#components/ui/icon/icon';

export default function IconsRoute() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex flex-col gap-y-2">
        <h3>Default Icon</h3>
        <Icon name="folder-sync" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Increased Size</h3>
        <Icon name="user" className="size-7" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Colored Icon</h3>
        <Icon name="check" className="text-success" />
      </div>
      <div className="flex flex-col gap-y-2 text-error">
        <h3>Inherited Color</h3>
        <Icon name="frown" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>With Text</h3>
        <Icon name="dices">Tipps</Icon>
      </div>
    </div>
  );
}
