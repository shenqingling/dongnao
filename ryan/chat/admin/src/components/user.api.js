import {host} from '../config';
import request from 'superagent';

export const get_all_user = function(cb) {
    request
        .get(host + 'user')
        .end((err, res) => {
            cb(res.body)
        })
}
