import axios from 'axios';

axios.defaults.withCredentials = true;

// For Laravel apps
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// If you're using Laravel Sanctum, you might need this:
// axios.defaults.baseURL = 'http://your-laravel-api-domain.com';

export default axios;