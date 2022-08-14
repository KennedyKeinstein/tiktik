import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import {uuid} from 'uuidv4'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'PUT') {
        const {userId, postId, like} = req.body
        
        const likePut = await client.patch(postId)
        .setIfMissing({likes: []})
        .insert(
          'after', 
          'likes[-1]', 
          [{
            _key: uuid(), 
            _ref: userId
          }]).commit();

        const dislikePut = await client.patch(postId)
        .unset([`likes[_ref=="${userId}"]`])
        .commit();

        const data = like ? likePut : dislikePut

        res.status(200).json(data)
    }
}