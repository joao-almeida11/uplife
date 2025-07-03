import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>{" "}
        <Link className="[&.active]:font-bold" to="/request-help">
          Request Help
        </Link>
        <Link className="[&.active]:font-bold" to="/offer-help">
          Offer Help
        </Link>
        <Link className="[&.active]:font-bold" to="/u">
          Profile
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
