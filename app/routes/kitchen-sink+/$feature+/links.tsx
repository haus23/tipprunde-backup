import { Link } from '#components/ui/link/link';

export default function LinksRoute() {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <div className="flex flex-col gap-y-2">
        <h3>Default Link</h3>
        <Link href="icons">Icons</Link>
      </div>
    </div>
  );
}
