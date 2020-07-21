<template>
  <div class="home">
    <div class="home-container">
      <div class="container-header">
        <span>Лифтстрой</span>
        <button @click="logIn = !logIn">ВОЙТИ</button>
      </div>
      <div class="container-content">
        <div class="content-headline">
          <h1>ООО СМУ "Лифтстрой"</h1>
        </div>
        <span>
          услуги по монтажу, обслуживанию и ремонту <br> лифтов, эскалаторов, траволаторов, <br> подъемных платформ
        </span>
      </div>
    </div>
    <div class="logIn" v-show="logIn">
      <div class="logIn-headline">
        <span>Вход</span>
      </div>
      <div class="logIn-content">
        <form action="">
          <input type="email" name="email" id="email" placeholder="Логин" v-model="email">
          <input type="password" name="password" id="password" placeholder="Пароль" v-model="password">
          <input class="button" type="button" value="ВОЙТИ" @click="sign_in(),logIn = !logIn">
        </form>
      </div>
    </div>
    <div class="filter" v-show="logIn"></div>
  </div>
</template>

<script>

export default {
    name: 'Main',
    data(){
        return{
            email: '',
            password: '',
            logIn: false
        }       
    },
    methods:{
        async sign_in(){
            await this.$store.dispatch('sing_in', {
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch(() => {
                this.$toast.error('Неправильный логин или пароль', {
                    position: 'bottom-right'
                });
            })
        }   
    },
    mounted(){
        if(this.$route.query.message == 'sign_out'){
            this.$toast.default('Вы вышли из системы', {
                position: 'top'
            });
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.home {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: url(../assets/image/fon.png) no-repeat;
  background-size: cover;
  @include flex();
  .home-container {
    width: 80%;
    height: 100%;
    .container-header {
      height: 80px;
      width: 100%;
      @include flex();
      justify-content: space-between;
      span{
        color: $colorWhite;
        font-size: 28px;
        font-weight: bold;
      }
      button {
        outline: none;
        border: none;
        background: $colorWhite;
        height: 35px;
        width: 150px;
        border-radius: 5px;
        color: rgb(134, 134, 134);
        letter-spacing: 1px;
        cursor: pointer;
      }
      button:hover {
        background: $colorGreyL;
      }
    }
    .container-content {
      width: 100%;
      height: calc(100% - 80px);
      @include flex();
      flex-direction: column;
      align-items: flex-start;
      color: $colorWhite;
      .content-headline {
        h1 {
          font-size: 45px;
          font-weight: bold;
        }
      }
      span {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}

.logIn {
  position: absolute;
  z-index: 110;
  width: 20%;
  height: 350px;
  box-shadow: 0px 8px 30px #040404;
  .logIn-headline {
    width: 100%;
    height: 70px;
    background: $colorBlack;
    @include flex();
    span {
      color: $colorWhite;
      font-size: 20px;
    }
  }
  .logIn-content {
    width: 100%;
    height: calc(100% - 70px);
    background: $colorGreyL;
    form {
      width: 90%;
      padding-top: 20px;
      margin: 0 auto;
      @include flex();
      flex-direction: column;
      input {
        font-family: inherit;
        outline: none;
        border: none;
        //border: 1px solor rgb(61, 61, 61);
        border-radius: 10px;
        height: 50px;
        width: calc(100% - 20px);
        color: $colorBlack;
        font-weight: bolder;
        font-size: 15px;
        margin: 10px auto;
        padding: 0 10px;
      }
      .button {
        background: $colorTur;
        padding: 0;
        margin: 20px 0;
        width: 100%;
        cursor: pointer;
        letter-spacing: 1px;
        color: $colorWhite;
      }
    }
    
  }
}

.filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  filter: blur(5px);
}
</style>
