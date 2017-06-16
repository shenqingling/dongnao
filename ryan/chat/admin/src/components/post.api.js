import { host } from '../config';
import request from 'superagent';

export const get_all_post = function(cb) {
    request
        .get(host + 'post/detail')
        .end((err, res) => {
            cb(res.body)
        })
}
