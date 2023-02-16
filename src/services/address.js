const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAddressBy(value) {
  try {
    const response = await fetch(`${API_URL}/address/${value}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}