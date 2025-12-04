// Simple API helper for car endpoints so components stay lean.
const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export async function createCar(payload) {
  // POST JSON to the Django /api/cars endpoint.
  const res = await fetch(`${API_BASE}/api/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // Surface server validation messages when available.
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.detail || 'Failed to create car');
  }

  return res.json();
}
