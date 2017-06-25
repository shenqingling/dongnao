<template>
    <div class="user_item">
        <h1>{{username}}</h1>
        <h3>说说列表</h3>
        <el-form :inline="true">
            <el-form-item>
                <el-button @click="postEditShow(true)">增加文章</el-button>
            </el-form-item>
            <!-- todo -->
            <el-form-item>
                <el-button @click="postEditShow(true,true)">编辑文章</el-button>
            </el-form-item>
            <!-- todo -->
            <el-form-item>
                <el-button type="danger" @click="handleRemovePost">删除文章</el-button>
            </el-form-item>
        </el-form>
        <el-dialog :title="dialogTitle[addPost.edit]" :visible.sync="addPost.visible">
            <el-form>
                <el-form-item label="标题" label-width="80px">
                    <el-input v-model="addPost.title"></el-input>
                </el-form-item>
                <el-form-item label="内容" label-width="80px">
                    <el-input v-model="addPost.content"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-button @click="addPost.visible = false">取 消</el-button>
        <el-button type="primary" @click="postEditConfirm">确 定</el-button>
      </span>
        </el-dialog>
        <el-table :data="posts" @selection-change="handlePostsChange" stripe style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="content" label="内容">
            </el-table-column>
            <el-table-column prop="createdAt" label="创建时间">
            </el-table-column>
            <el-table-column prop="updatedAt" label="更新时间">
            </el-table-column>
        </el-table>
        <h3>好友列表</h3>
        <el-form :inline="true">
            <el-form-item v-if="!addFriend.visible">
                <el-button @click="addFriend.visible = true">增加好友</el-button>
            </el-form-item>
            <el-form-item v-if="addFriend.visible">
                <el-select v-model="addFriend.friendId">
                    <el-option v-for="u in allUser" :label="u.username" :value="u.id" v-if="!isFriend(u.id) && id != u.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-if="addFriend.visible">
                <el-button @click="handleAddFriend">确定</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleRemoveFriend" type="danger">删除好友</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="friends" @selection-change="handleFriendsChange" stripe style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="好友id">
            </el-table-column>
            <el-table-column prop="username" label="好友名字">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {
    detail,
    addPost,
    addFriend,
    removeFriend,
    removePost,
    updatePost
} from './user.item.api.js';

import {
    get_all_user
} from './user.api.js';

export default {
    data() {
            return {
                // 增加文章
                addPost: {
                    visible: false,
                    edit: false,
                    title: '',
                    content: ''
                },
                // 删除说说
                removePost: {
                    postId: ''
                },
                // 添加好友
                addFriend: {
                    visible: false,
                    friendId: ''
                },
                // 移除好友
                removeFriend: {
                    friendId: ''
                },
                // 用户信息
                "id": "-1",
                "username": "",
                "nickname": "",
                "logo": null,
                "createdAt": "",
                "updatedAt": "",
                "posts": [],
                "friends": [],
                "dialogTitle": {
                    'true': '编辑文章',
                    'false': '新增文章'
                },
            }
        },
        methods: {
            fetch() {
                detail(this.id, (item) => {
                    Object.assign(this, item);
                })
            },
            postEditShow(visible, edit) {
                if (!!edit && !this.removePost.postId.length) {
                    alert('请选中编辑文章');
                    return;
                } else if (!!edit && this.removePost.postId.split(',').length > 1) {
                    alert('只能同时编辑一篇文章哦');
                    return;
                }
                this.addPost.visible = !!visible;
                this.addPost.edit = !!edit;
            },
            postEditConfirm() {
                if (this.addPost.edit) {
                    this.handleChangePost();
                } else {
                    this.handleAddPost();
                }
            },
            handleAddPost() {
                addPost(this.id, {...this.addPost
                }, (item) => {
                    this.posts.push(item);
                    this.addPost.visible = false;
                })
            },
            handlePostsChange(val) {
                let valStr = '';
                for (let i = 0; i < val.length; i++) {
                    valStr = valStr.length ? `${valStr},${val[i].id}` : `${val[i].id}`;
                }
                this.removePost.postId = valStr;
                this.addPost.postId = valStr;
            },
            // 编辑说说
            handleChangePost() {
                updatePost(this.id, {...this.addPost
                }, (item) => {
                    this.addPost.visible = false;
                    this.posts = this.posts.map((post, i) => {
                        if (post.id == this.addPost.postId) {
                            return post = item;
                        }
                        return post;
                    })
                })
            },
            handleRemovePost() {
                if (!this.removePost.postId.length) {
                    alert('没有选中删除说说');
                    return;
                }
                removePost(this.id, {...this.removePost
                }, (item) => {
                    let deletes = removeFriend.split(',');
                    for (let i = 0; i < deletes.length; i++) {
                        this.posts = this.posts.find(post => {
                            return post.id !== deletes[i];
                        })
                    }
                })
            },
            // table多选回调
            handleFriendsChange(val) {
                let valStr = '';
                for (let i = 0; i < val.length; i++) {
                    valStr = valStr.length ? `${valStr},${val[i].id}` : `${val[i].id}`;
                }
                this.removeFriend.friendId = valStr;
            },
            // 移除好友
            handleRemoveFriend() {
                if (!this.removeFriend.friendId.length) {
                    alert('没有选中删除好友');
                    return;
                }
                removeFriend(this.id, {...this.removeFriend
                }, (item) => {
                    let deletes = removeFriend.split(',');
                    for (let i = 0; i < deletes.length; i++) {
                        this.friends = this.friends.find(user => {
                            return user.id !== deletes[i];
                        })
                    }
                })
            },
            // 添加好友
            handleAddFriend() {
                addFriend(this.id, {...this.addFriend
                }, (item) => {
                    let newFriend = this.allUser.filter((user) => {
                        return user.id === this.addFriend.friendId;
                    })
                    this.friends.push(newFriend[0])
                })
            },
            isFriend(id) {
                return !!this.friends.find((user) => {
                    return user.id == id;
                })
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.fetch();
            get_all_user((list) => {
                this.allUser = list;
            })
        }
}
</script>
