import { host } from '../config';
import request from 'superagent';

// 用户详情信息
export function detail(id, cb) {
    request
        .get(`${host}user/${id}/detail`)
        .end((err, res) => {
            cb(res.body)
        })
}

// 用户添加新文章
export function addPost(id, obj, cb) {
    request
        .post(`${host}user/${id}/post`)
        .send(obj)
        .end((err, res) => {
            cb(res.body)
        })
}

// 用户添加新好友
export function addFriend(id, obj, cb) {
    request
        .post(`${host}user/${id}/friend`)
        .send(obj)
        .end((err, res) => {
        	console.log(err);
            cb(res.body)
        })
}
