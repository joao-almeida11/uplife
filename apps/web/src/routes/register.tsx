import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Register</h1>
      <p>Create a new account to get started.</p>
      {/* TODO: Add registration form with validation */}
    </div>
  );
}
