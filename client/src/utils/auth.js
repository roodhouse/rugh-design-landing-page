import jwt_decode from 'jwt-decode';

class AuthService {

    getToken() {
        const token = localStorage.getItem('token');
        const decode = jwt_decode(token)
        return decode;
    }
}

export default new AuthService();

