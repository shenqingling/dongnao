<template>
  <div class="user">
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID" >
        <template scope="scope">
         <router-link :to="`/user/${scope.row.id}`">{{scope.row.username}}</router-link>
          <!-- <el-button @click="$router.push('/user/scope.row.id')">{{scope.row.username}}</el-button> -->
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户ID" >
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="用户昵称" >
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="创建时间" >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {get_all_user} from './user.api.js';

export default {
  name: 'hello',
  data(){
    return {
      list:[]
    }
  },
  methods: {
    fetch(){
      get_all_user((list)=>{
        this.list = list;
      });
    }
  },
  mounted(){
    this.fetch()   
  }
}
</script>