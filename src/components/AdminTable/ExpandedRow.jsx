import React from "react";

export default function ExpandedRow({ user }) {
  if (!user) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-100">
      <div>
        <p><strong>Role:</strong> {user.role ?? "—"}</p>         {/* <- this is correct */}
      </div>
      <div>
        <p><strong>Location:</strong> {user.location ?? "—"}</p>
      </div>
      <div>
        <p><strong>Created At:</strong> {user.createdAt ?? "—"}</p>
      </div>
      <div>
        <p><strong>Email:</strong> {user.email ?? "—"}</p>
      </div>
    </div>
  );
}
