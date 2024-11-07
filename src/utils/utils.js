async function getToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa('111259debf2f48c8836015e62d55d368' + ':' + '40193a91de884ae49a5ab0b7db5d06a1')}`
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
