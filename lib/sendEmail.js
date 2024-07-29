export async function sendEmail({ to, subject, text }) {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to, subject, text }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error sending email');
  }

  return data;
}
