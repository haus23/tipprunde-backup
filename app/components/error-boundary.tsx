import {
  type ErrorResponse,
  isRouteErrorResponse,
  useLocation,
  useParams,
  useRouteError,
} from 'react-router-dom';
import { Icon } from './ui/icon/icon';
import { Link } from './ui/link/link';

type StatusHandler = (info: {
  error: ErrorResponse;
  params: Record<string, string | undefined>;
}) => JSX.Element | null;

function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error;
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  }
  return 'Unbekannter Fehler';
}

/*
 * TODO: Link in Line 69ff will do full page load. Will be fixed with remix.
 */

export function ErrorBoundary({
  defaultStatusHandler = ({ error }) => (
    <div>
      <Icon name="frown" className="size-40 text-error" />
      <p className="mt-4 text-xl">
        {error.status} {error.data}
      </p>
    </div>
  ),
  statusHandlers,
  unexpectedErrorHandler = (error) => (
    <div>
      <Icon name="angry" className="size-40 text-error" />
      <p className="mt-4 text-xl">{getErrorMessage(error)}</p>
    </div>
  ),
}: {
  defaultStatusHandler?: StatusHandler;
  statusHandlers?: Record<number, StatusHandler>;
  unexpectedErrorHandler?: (error: unknown) => JSX.Element | null;
}) {
  const error = useRouteError();
  const params = useParams();
  const { pathname } = useLocation();

  return (
    <div className="flex h-svh flex-col items-center justify-center gap-8 text-center">
      {isRouteErrorResponse(error)
        ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
            error,
            params,
          })
        : unexpectedErrorHandler(error)}
      {pathname === '/' ? (
        <p className="block text-xl">Bitte Micha informieren!</p>
      ) : (
        <Link
          href="/"
          className="block px-4 py-1.5 text-xl underline underline-offset-4"
        >
          Zur Startseite
        </Link>
      )}
    </div>
  );
}
