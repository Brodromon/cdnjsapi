<template>
  <div class="home">
    <div class="container-fluid">
      <ul id="featured">
        <li class="featured__lib" @click="onLoadLib(lib.name)" :key="lib.name" v-for="lib in rand">
          <span>{{lib.name}}</span>
        </li>
    </ul>
    </div>
    <input placeholder="Find library..." id="search" type="text" v-model="libSearch">
     <ul v-if="libSearch">
      <li class="search__lib" :key="lib.name"  v-for="lib in filteredLibs">
        <h4 @click="onLoadLib(lib.name)">
          {{lib.name}}
        </h4>
        <a v-bind:href="lib.latest">{{lib.latest}}</a>
      </li>
    </ul>
    <h4 v-if="filteredLibs == 0 && libSearch">
      <strong>Sorry, nothing was found :(</strong>
    </h4>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      libraries: [],
      rand: [],
      libSearch: '',
      libName: ''
    }
  },
  computed: {
    filteredLibs() {
      return this.libraries.filter((lib) => {
        if(lib.name.toLowerCase().includes(this.libSearch.toLowerCase())) 
          return lib.name
      })
    },
  },
  methods: {
    onLoadLib(name) {
        this.$store.commit('increment', {
          name: name
        })
      this.$router.push('/' + name);
    }
  },
  created() {
    this.libName = this.$store.getters.getLibName
            axios
            .get("https://api.cdnjs.com/libraries")
            .then(response => {
                this.libraries = response.data.results;
                const shuffled = this.libraries.sort(() => 0.5 - Math.random());
                this.rand =  shuffled.slice(0, 10);
            });
        }
        
        
}
</script>

<style lang="sass">
  #featured
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    background: #fff
    box-shadow: 0 0 5px #888
    border-radius: 4px
    margin: 0
    margin-bottom: 50px
    .featured__lib
      list-style: none
      display: inline-block
      width: 100%
      background: #f9f9f9
      height: 100px
      vertical-align: middle
      font-weight: bold
      color: #444
      box-shadow: 0 0 6px #999
      margin: 20px 8px 
      border-radius: 10px
      transition: .1s ease
      position: relative
      &:hover
        cursor: pointer
        background: #e1e1e1
        span
          font-size: 17px
          transition: .1s ease
      span
        font-size: 15px
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);


  #search
    width: 50%
    font-size: 18px
    border: 2px #e8e8e8 solid
    border-radius: 5px
    padding: 5px
    margin-bottom: 50px

  .search__lib
      width: 80%
      margin-left: 10%
      list-style: none
      display: inline-block
      vertical-align: middle
      font-weight: bold
      color: #444
      margin: 10px 0
      transition: .1s ease
      padding: 10px
      margin: 6px
      border-bottom: 1px #f7a809 solid
      text-align: left
      h4
        display: inline-block
        &:hover
          cursor: pointer
          color: #888
      a
        font-size: 15px
        color: #777
        display: block
</style>
