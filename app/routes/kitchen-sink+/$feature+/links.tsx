import { useParams } from 'react-router-dom';
import { Link, NavLink } from '#components/ui/link/link';

export default function LinksRoute() {
  const { feature } = useParams() as { feature: string };

  return (
    <div className="space-y-8 text-center">
      <div className="space-y-2">
        <h3>Default Link</h3>
        <Link href={`/kitchen-sink/${feature}/icons`}>Icons</Link>
      </div>
      <div className="space-y-2">
        <h3>Link to 404</h3>
        <Link href={`/kitchen-sink/${feature}/wont-fix`}>404</Link>
      </div>
      <div className="space-y-2">
        <h3>NavLink to current page</h3>
        <NavLink href={`/kitchen-sink/${feature}/links`}>Links</NavLink>
      </div>
      <div className="space-y-2">
        <h3>NavLink to buttons page</h3>
        <NavLink href={`/kitchen-sink/${feature}/buttons`}>Buttons</NavLink>
      </div>
    </div>
  );
}
