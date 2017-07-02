<template>
  <div class="message">
    {{ username }} 和 {{ friendname }} 的聊天记录
    <ul>
      <li v-for="m in list">
        {{ m }}
      </li>
    </ul>
  </div>
</template>

<script>
import {get_all_message} from './../api/message.api.js';

export default {
  data () {
    return {
      username:'',
      friendname:'',
      list: [],
    }
  },
  methods:{
    fetch(user, friend){
      get_all_message(user, friend, (list)=>this.list=list);
    }
  },
  mounted(){
    this.username = this.$route.query.from;
    this.friendname = this.$route.query.to;
    
    this.fetch(this.username, this.friendname);
  }
}
</script>