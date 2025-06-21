const BASE_URL = 'https://fakestoreapi.com';

export const loginUser = async (username, password) => {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
        console.error(response);
      throw new Error('Login failed');
     
    }
  
    const data = await response.json();
    return data.token;
  };
  