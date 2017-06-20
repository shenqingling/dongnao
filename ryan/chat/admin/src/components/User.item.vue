<template>
  <div class="user_item">
    <h1>{{username}}</h1>
    <h3>说说列表</h3>
    <el-form :inline="true">
    	<el-form-item>
    		<el-button @click="addPost.visible = true">增加文章</el-button>
    	</el-form-item>
    	<!-- todo -->
    	<el-form-item>
    		<el-button>编辑文章</el-button>
    	</el-form-item>
    	<!-- todo -->
    	<el-form-item>
    		<el-button type="danger">删除文章</el-button>
    	</el-form-item>
    </el-form>
    <el-dialog title="增加文章" :visible.sync="addPost.visible">
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
		    <el-button type="primary" @click="handleAddPost">确 定</el-button>
	  	</span>
    </el-dialog>
    <el-table
    :data="posts"
    stripe
    style="width: 100%">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容">
    </el-table-column>
    <el-table-column
      prop="createdAt"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="updatedAt"
      label="更新时间">
    </el-table-column>
  </el-table>
  <h3>好友列表</h3>
    <el-form :inline="true">
    	<el-form-item v-if="!addFriend.visible">
    		<el-button @click="addFriend.visible = true">增加好友</el-button>
    	</el-form-item>

    	<el-form-item v-if="addFriend.visible">
    		<el-select v-model="addFriend.friendId">
    			<el-option 
    			v-for="u in allUser" 
    			:label="u.username" 
    			:value="u.id"
    			v-if="!isFriend(u.id) && id != u.id"></el-option>
    		</el-select>
    	</el-form-item>
    	<el-form-item v-if="addFriend.visible">
    		<el-button @click="handleAddFriend">确定</el-button>
    	</el-form-item>
    </el-form>
    <el-table
    :data="friends"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="好友id">
    </el-table-column>
    <el-table-column
      prop="username"
      label="好友名字">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { detail, addPost, addFriend } from './user.item.api.js';
import { get_all_user } from './user.api.js';

export default {
  name: 'user-item',
  data(){
  	return {
  		// 增加文章
  		addPost:{
  			visible:false,
  			title:'',
  			content:''
  		},
  		// 添加好友
  		addFriend:{
  			visible:false,
  			friendId:''
  		},
  		// 用户信息
  		"id":"-1",
	    "username": "",
	    "nickname": "",
	    "logo": null,
	    "createdAt": "",
	    "updatedAt": "",
	    "posts": [],
	    "friends": []
  	}
  },
  methods:{
  	fetch(){
  		detail(this.id,(item)=>{
  			Object.assign(this, item);
  		})
  	},
  	handleAddPost(){
  		addPost(this.id,{...this.addPost},(item)=>{
  			this.posts.push(item);
  			this.addPost.visible = false;
  		})
  	},
  	handleAddFriend(){
  		addFriend(this.id, {...this.addFriend},(item)=>{
  			this.friends.push(item)
  		})
  	},
  	isFriend(id){
  		return !!this.friends.find((user)=>{
  			return user.id == id;
  		})
  	}
  },
  mounted(){
  	this.id = this.$route.params.id;
  	this.fetch();
  	get_all_user((list)=>{
  		this.allUser = list;
  	})
  }
}
</script>