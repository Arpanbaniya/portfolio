function publicUrl(value: string | undefined) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      !["localhost", "127.0.0.1"].includes(url.hostname)
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}
export const links = {
  github: "https://github.com/Arpanbaniya",
  email: "mailto:arpanbaniya1@gmail.com",
  linkedin: publicUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  digipaila: "https://digipaila.com",
  financialAutomation: publicUrl(
    process.env.NEXT_PUBLIC_FINANCIAL_AUTOMATION_URL,
  ),
};
export const siteUrl =
  publicUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
