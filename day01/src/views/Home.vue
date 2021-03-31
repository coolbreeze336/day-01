<template>
  <div class="home">
    <div class="home-top">
      <div class="top">
        <input type="text" v-model="text" />
        <button @click="Click">添加</button>
      </div>
      <div class="center">
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="index == app ? 'add' : ''"
          @click="onClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="bottom" :class="app == app ? 'dvs' : ''">
        <p>
          <b>正在看的{{ arr[app] }}</b>
        </p>
        <div
          v-for="(item, index) in this.$store.state.obj"
          :key="index"
          :class="index == pdd ? 'add' : ''"
          @mouseenter="enter(index)"
          @mouseleave="leave"
          v-show="item.num == app"
        >
          <span
            :class="index == pdd ? 'appd' : ''"
            @dblclick="dblclick(index, item.name)"
            v-show="index == show ? false : true"
            >{{ item.name }}</span
          >
          <input
            type="text"
            v-model="nam"
            @keydown.enter="dbenter(index)"
            v-show="index == show ? true : false"
          />
          <button
            class="btn"
            :class="index == pdd ? 'add' : ''"
            @click="remove(index)"
          >
            删除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["书籍", "电影", "游戏", "综艺", "体育"],
      text: "",
      app: 0,
      pdd: -1,
      show: -1,
      nam: "",
    };
  },
  methods: {
    onClick(index) {
      this.app = index;
    },
    Click() {
      if (this.text != "") {
        let obj = {
          num: this.app,
          name: this.text,
        };
        this.$store.commit("add", obj);
        console.log(obj);
      }
      this.text = "";
    },
    remove(index) {
      this.$store.commit("remove", index);
    },
    enter(index) {
      this.pdd = index;
    },
    leave() {
      this.pdd = -1;
    },
    dblclick(index, name) {
      this.show = index;
      this.nam = name;
    },
    dbenter(index) {
      var nam = {
        index: index,
        nam: this.nam,
      };
      this.$store.commit("dbenter", nam);
      this.nam = "";
      this.show = -1;
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
.home-top {
  width: 600px;
  height: 450px;
  margin: 100px auto;
  background-color: rgb(245, 245, 245);
  box-sizing: border-box;
  padding-top: 10px;
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 100px;
    input {
      width: 300px;
      height: 80%;
    }
    button {
      width: 80px;
      height: 90%;
    }
  }
}
.center {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  div {
    width: 20%;
    height: 100%;
    background-color: green;
    color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .add {
    z-index: 9999;
    background-color: blue;
  }
}
.bottom {
  width: 100%;
  height: 360px;
  box-sizing: border-box;
  border: 1px solid rgb(219, 219, 219);
  overflow: auto;
  -webkit-transition: all 0.5s ease-in 0.3s;
  transition: all 0.5s ease-in 0.3s;
  p {
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
  }
  div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
  }
}
.btn {
  border: none;
  background-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
  outline: none;
}
.add {
  z-index: 9999;
  background-color: blue;
  -webkit-transition: all 0.4s ease-in 0.2s;
  transition: all 0.4s ease-in 0.2s;
  transform: scale(0.9) rotate(0deg) skew(0deg);
}
.appd {
  z-index: 9999;
  color: wheat;
}
.dvs {
  -webkit-transition: all 0.5s ease-in 0.5s;
  transition: all 0.5s ease-in 0.5s;
  transform: scale(0.96) rotate(0deg) skew(0deg);
}
</style>