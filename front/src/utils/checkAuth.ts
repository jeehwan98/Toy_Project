export async function checkAuth() {
  const response = await fetch('/api/protected', {
    method: 'GET',
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Unauthorized');
  }
}