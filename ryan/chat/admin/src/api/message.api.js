import { host } from '../config';
import request from 'superagent';

export const get_all_message = function(user, frined, cb) {
    request
        .get(host + 'message/' + user + '/' + frined)
        // .send(obj)
        // .query(obj)
        .end((err, res) => {
            cb(res.body)
        })
}
