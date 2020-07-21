<template>
  <div class="navBar-cantainer">
    <div class="container-headline">
      <h1>Лифтстрой</h1>
    </div>
    <div class="container-nav">
      <router-link tag="div" :to="'/task'"><div class="line"></div> <div class="link"><span>ЗАДАЧИ</span></div></router-link>
      <router-link tag="div" :to="'/contract'"><div class="line"></div> <div class="link"><span>ДОГОВОРА</span></div></router-link>
      <router-link tag="div" :to="'/customers'"><div class="line"></div> <div class="link"><span>КЛИЕНТЫ</span></div></router-link>
      <router-link tag="div" :to="'/tenders'"><div class="line"></div> <div class="link"><span>ТЕНДЕРЫ</span></div></router-link>
      <router-link tag="div" :to="'/equipment'"><div class="line"></div> <div class="link"><span>ОБОРУДОВАНИЕ</span></div></router-link>
      <router-link tag="div" :to="'/insurance'"><div class="line"></div> <div class="link"><span>СТРАХОВАНИЕ</span></div></router-link>
    </div>
    <div class="container-footer">
      <span>краткая информация об организации</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menu: false
    }
  }
  
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.router-link-exact-active {
 .line {
   background: $colorTur;
 }
 .link {
   background: linear-gradient(90deg, #31BEC5 4.66%, rgba(49, 190, 197, 0) 102.7%);
 }
}

.navBar-cantainer {
  width: 290px;
  height: 100%;
  background: $colorBlack;
  color: $colorWhite;
  .container-headline {
    height: 80px;
    @include flex();
    h1 {
      font-weight: bold;
    }
    
  }
  .container-nav {
    height: calc(100% - 230px);
    overflow: auto;
    padding: 0 30px;
    div {
      height: 50px;
      display: flex;
      margin: 20px 0;
      cursor: pointer;
      .link {
        height: 50px;
        width: 100%;
        @include flex();
        justify-content: flex-start;
        border-radius: 1px;
        span {
          width: 100%;
          padding-left: 40px;
        }
        
      }
      .line {
        height: 50px;
        width: 5px;
        margin-right: 5px;
        border-radius: 1px;
      }
    }
  }
  .container-footer {
    height: 150px;
    border-top: 1px solid rgba(229, 229, 229, 0.5);
    @include flex();
    span {
      font-size: 14px;
    }
  }
}
</style>