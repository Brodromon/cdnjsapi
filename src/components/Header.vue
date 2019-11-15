<template>
    <div id="header_nav">
        <router-link class="header_nav__item" to="/">Главная</router-link>
        <router-link class="header_nav__item" to="/about">О Приложении</router-link>
    </div>
</template>

<style lang="sass">
    #header_nav
        height: 40px
        background: #353535
        margin-bottom: 50px
        .header_nav__item
            color: #fff
            font-weight: bold
            line-height: 40px
            margin: 0 10px
</style>