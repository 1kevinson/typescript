import { describe, it, expect } from "vitest";

// =========================
// Production code
// =========================

type UserRole = "editor" | "viewer" | "admin";
type UserId = string | number;

const userId: UserId = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const username: string = "alice.martin";
const role: UserRole = "viewer";

function formatUserLabel(id: UserId, name: string, userRole: UserRole): string {
  // typeof permet de gérer le union type string | number
  const formattedId = typeof id === "string" ? id.substring(0, 8) : id;
  return `[${userRole.toUpperCase()}] ${name} (id: ${formattedId}...)`;
}

console.log(formatUserLabel(userId, username, role));

let rawApiResponse: unknown;

rawApiResponse = {
  verified: true,
  lastlogin: "2026-06-17",
};

if (
  rawApiResponse !== null &&
  typeof rawApiResponse === "object" &&
  "lastlogin" in rawApiResponse
) {
  console.log("derniere connexion " + rawApiResponse.lastlogin);
}

// =========================
// Testing code
// =========================

describe("Test practice for use case", () => {
  it("tronque un UUID string à 8 caractères dans le label", () => {
    const label = formatUserLabel(
      "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "alice.martin",
      "editor",
    );
    expect(label).toBe("[EDITOR] alice.martin (id: f47ac10b...)");
  });
});
