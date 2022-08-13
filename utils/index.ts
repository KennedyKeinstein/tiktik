import axios from 'axios';
import jwt_decode from 'jwt-decode';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const createOrGetUser = async (response: any, addUser: any) => {
  const decoded : {name: string; picture: string; sub:string } = jwt_decode(response.credential);
  const {name, picture, sub} = decoded;

  const user= {
    _id: sub,
    _type: 'user',
    name: name,
    image: picture
  }

  addUser(user);
    
  await axios.post(`${BASE_URL}/api/auth`, user)
};

export {
  BASE_URL,
  createOrGetUser
}