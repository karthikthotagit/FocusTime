export const startSession = async (userId, duration) => {
  const res = await fetch('/api/session/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, duration })
  });
  return res.json();
};
