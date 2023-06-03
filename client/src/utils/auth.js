import jwt_decode from 'jwt-decode';

class AuthService {

    getToken() {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('no token')
            const decode = '';
            return decode 
        } else {
            const decode = jwt_decode(token)
            console.log('token found')
            return decode;
        }
    }
}

export default new AuthService();

