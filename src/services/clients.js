const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function createClients(body) {
    const payload = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(`${API_URL}/clients`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  