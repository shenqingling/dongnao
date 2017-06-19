<template>
  <div class="hello">
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID" >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题" >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容" >
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="创建时间" >
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="作者" >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {get_all_post} from './post.api.js';

export default {
  name: 'hello',
  data () {
    return {
      list: [],
    }
  },
  methods:{
    fetch(){
      get_all_post((list)=>this.list=list);
    }
  },
  mounted(){
    this.fetch();
  }
}
</script>