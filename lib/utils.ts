export function currency(n: number): string {
  return `$${n.toFixed(2).replace(/\.00$/, "")}`;
}

export function formatPhone(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}
