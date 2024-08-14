import { useParams } from 'react-router-dom';
import { Link } from '#components/ui/link/link';

export default function LinksRoute() {
  const { feature } = useParams() as { feature: string };

  return (
    <div className="flex flex-col items-center gap-y-8 text-center">
      <div className="flex flex-col gap-y-2">
        <h3>Default Link</h3>
        <Link href={`/kitchen-sink/${feature}/icons`}>Icons</Link>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3>Link to 404</h3>
        <Link href={`/kitchen-sink/${feature}/wont-fix`}>404</Link>
      </div>
    </div>
  );
}
