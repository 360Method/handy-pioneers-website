const BOOK_BASE_URL = "https://client.handypioneers.com/book";

export function bookUrl(source: string, path: "project" | "membership" = "project"): string {
  const params = new URLSearchParams({ source, path });
  return `${BOOK_BASE_URL}?${params.toString()}`;
}

export function openBooking(source: string, path: "project" | "membership" = "project"): void {
  window.location.href = bookUrl(source, path);
}
