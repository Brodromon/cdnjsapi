<template>
  <div class="about">
    <div id="about_site">
      <h5>О приложении:</h5>
      <p>Одностаничное веб-приложение (SPA) для поиска библиотек <a href="https://cdnjs.com/">cdnjs.com</a> по средствам API созданое с использованием Vue.js, Vuex. При создании использовались так же Axios и Bootstrap.</p>
    </div>
    <div id="about_author">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
          <img src="../assets/author.jpg" alt="">
          <p id="author_name">Святослав Павелко</p>
          <a id="author_git" href="https://github.com/Brodromon">https://github.com/Brodromon</a>
        </div>
        <div class="col-auto">
          <div class="about_author_section">
            <h5>Обо мне</h5>
            <p>Увлекаюсь версткой и frontend'ом в целом</p>
            <p>Владение иностранными языками: Английский(B1-B2), Польский(B2), Немецкий(low lvl &#x1f625)</p>
            <p>Самоорганизация и умение работы в команде</p>
            <p>Обожаю учить все самому здесь и сейчас, не люблю нудные лекции</p>
          </div>
          <div class="about_author_section">
            <h5>Профессиональные навыки</h5>
            <ul>
              <li>Html(HTML5)</li>
              <li>Css(CSS3)</li>
              <li>JavaScript</li>
              <li>Less/Sass/Scss</li>
              <li>Bootstrap</li>
              <li>Gulp</li>
              <li>Git</li>
              <li>Npm</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  #about_site
    background: #fff
    padding: 20px
    box-shadow: 0 0 5px #888
    border-radius: 4px
    margin-bottom: 40px
    h5
      font-weight: bold
      font-size: 19px
      margin-top: 0
      margin-bottom: 10px
      color: #333
    p
      margin: 0
      font-size: 16px

  #about_author
    .col-auto
      margin: 0 10px
      background: #fff
      padding: 20px 10px
      box-shadow: 0 0 5px #888
      border-radius: 4px
      img
        border-radius: 50%
        border: 1px #888 solid
        margin-bottom: 20px
      #author_name
        font-size: 17px
        font-weight: bold
      #author_git
        color: #888
        font-size: 14px
        font-weight: bold
      .about_author_section
        margin: 0 0 40px
        h5
          font-weight: bold
          font-size: 19px
          margin-bottom: 10px
          color: #333
        p
          text-align: left
          margin: 3px 0
          font-size: 15px
          font-weight: bold
          color: #444
        &:last-child
          margin: 0
          h5
            margin-top: 20px
          ul
            display: flex
            margin: 0
            padding: 0
            li
              font-size: 14px
              list-style: none
              display: inline-block
              width: 100%
              margin: 0 5px
              background: #f9f9f9
              border: 2px #999 solid
              padding: 5px
              font-weight: bold
              color: #444
              border-radius: 10px
              
</style>
