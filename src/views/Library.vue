<template>
    <div id="library_wrapper" class="container">
            <div class="row">
                <div id="lib_hdr" class="col-12">
                    <h3 id="lib_name">{{library.name}}</h3>
                    <a v-bind:href="'https://cdnjs.cloudflare.com/ajax/libs/' + library.name + '/' + library.version + '/' + library.filename" id="lib__filename">{{library.filename}}</a>
                    <p id="lib__cur_ver">{{library.version}}</p>
                    <p v-if="library.homepage">Website: <a v-bind:href="library.homepage">{{library.homepage}}</a></p>
                    <p id="lib_description">{{library.description}}</p>
                </div>
                <div v-if="library" id="lib" class="container-fluid">
                    <div class="row">
                    <div id="lib_versions" class="col-12">
                        <select v-model="selectedVers" id="select_version">
                            <option value="" disabled>Select version</option>
                            <option v-for="version in library.assets" v-bind:value="version">{{version.version}}</option>
                        </select>
                    </div>
                    <div id="files" class="col-12">
                        <ul>
                            <li class="version_file" v-for="item in selectedVers.files">
                                <a v-bind:href="'https://cdnjs.cloudflare.com/ajax/libs/' + '/' + library.name + '/' + selectedVers.version + '/' + item">https://cdnjs.cloudflare.com/ajax/libs/{{library.name}}/{{selectedVers.version}}/{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'lib',
    data() {
        return {
            library: '',
            libName: '',
            selectedVers: ''
        }
    },
    created() {
        this.libName = !this.$store.getters.getLibName ? this.$router.currentRoute.path.split('/')[1] : this.$store.getters.getLibName
        axios
            .get("https://api.cdnjs.com/libraries/" + this.libName)
            .then(response => {
                this.library = response.data;
        }); 
    }
}
</script>


<style lang="sass">
#library_wrapper
    background: #fff
    padding: 10px 10px 30px
    box-shadow: 0 0 5px #888
    border-bottom: 40px #777 solid
#lib_hdr
    text-align: left
    margin-bottom: 40px
    #lib_name
        font-weight: bold
        margin-bottom: 10px
    #lib__filename
        font-size: 14px
        color: #555
        margin: 0
    #lib__cur_ver
        font-size: 13px
        color: #666
        margin: 0
    #lib_description
        font-size: 15px
        margin: 0
#lib_versions
    ul
        margin: 0
        padding: 10px 0
        border-right: 1px #444 solid
        li
            list-style: none
    #select_version
        padding: 5px 10px
        border: 1px #888 solid
        border-radius: 5px
        width: 200px
        text-align: center
        margin-bottom: 30px
#files
    .version_file
        list-style: none
        width: 100%
        text-align: left
        border-bottom: 1px #f7a809 solid
        padding: 5px
        margin-bottom: 10px
        a
            color: #777
            font-weight: bold
</style>