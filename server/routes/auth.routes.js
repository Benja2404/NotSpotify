import express from 'express';

const router = express.Router()

router.get('/login', (req, res) => {
    const scopes = 'user-read-private user-read-email playlist-read-private user-library-read streaming';
    const user_id = process.env.SPOTIFY_CLIENT_ID;
    const redirect = process.env.SPOTIFY_REDIRECT_URI;
    const authURL = `https://accounts.spotify.com/authorize?client_id=${user_id}&response_type=code&redirect_uri=${redirect}&scope=${scopes}`;
    res.redirect(authURL);
});

export default router;