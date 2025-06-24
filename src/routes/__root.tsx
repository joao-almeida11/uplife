import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/request-help" className="[&.active]:font-bold">
          request-help
        </Link>
        <Link to="/offer-help" className="[&.active]:font-bold">
          offer-help
        </Link>
        <Link to="/u" className="[&.active]:font-bold">
          u
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
