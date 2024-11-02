async function getToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa('1c086cb2418542dbb5889e5170ac2582' + ':' + '9349f520e7314bffad0a77a2393f95a7')}`
            },
            body: 'grant_type=client_credentials'
        });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const auth = await response.json();
        localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
    } catch (error) {
        console.log('Error fetching token:', error);
    }
}

export { getToken };
