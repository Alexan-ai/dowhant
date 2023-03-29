<template>
  <div class="row">
    <div class="content q-ma-md bg-negative">
      <div class="col-6">
        <q-item v-ripple>
          <q-item-section class="texto text-bold">ENTRADAS</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="more_vert" />
          </q-item-section>
        </q-item>
      </div>
      <div class="col-12 q-mt-md text-center">
        <span class="q-ma-md porcentajes">76%</span>
        <hr />
        <span class="q-ma-md porcentajes">44%</span>
      </div>

      <div class="q-mt-lg text-white text-left select">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="public" />
          </q-item-section>

          <q-item-section>Barquisimeto</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="public" />
          </q-item-section>

          <q-item-section>Valencia</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="public" />
          </q-item-section>

          <q-item-section>Caracas</q-item-section>
        </q-item>
        <q-item clickable v-ripple text-grey-8>
          <q-item-section avatar>
            <q-icon color="primary" name="public" />
          </q-item-section>

          <q-item-section>Merida</q-item-section>
        </q-item>
      </div>
    </div>
    <div class="col-12 col-md-7">
      <div class="q-ma-md text-center text-white">
        <q-carousel
          style="border-radius: 10px"
          arrows
          animated
          v-model="slide"
          height="350px"
        >
          <q-carousel-slide name="first" img-src="src/assets/img/micro.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Barquisimeto</div>
              <div class="text-subtitle1">10/5/2023</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" img-src="src/assets/img/micro2.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Valencia</div>
              <div class="text-subtitle1">20/6/2023</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" img-src="src/assets/img/micro3.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2">Caracas</div>
              <div class="text-subtitle1">30/8/2023</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div class="row wrap flex-center content_3">
      <div class="col-12 col-md-4 justify-start">
        <h4>Ultimos Hits</h4>
        <p>
          General statistic of <br />
          user Engagement <br />
          processes.
        </p>
      </div>
      <div class="col-12 col-md-6 lanzamientos">
        <img class="shadow-3" src="src/assets/img/9.jpg" alt="" />
      </div>
      <div class="col-12 col-md-6 lanzamientos">
        <img class="shadow-3" src="src/assets/img/vuelve.png" alt="" />
      </div>
      <div class="col-12 col-md-6 lanzamientos">
        <img class="shadow-3" src="src/assets/img/amate.jpg" alt="" />
      </div>
      <div class="col-12 col-md-6 lanzamientos">
        <img class="shadow-3" src="src/assets/img/dont.jpg" alt="" />
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.lanzamientos {
  width: 150px;
  border-radius: 10px;
  margin: 5px;
  padding-top: 10px;
  transition: transform 0.2s; /* Animation */
  cursor: pointer;
}

.lanzamientos:hover {
  transform: scale(1.2);
}

.lanzamientos img {
  width: 100%;
  border-radius: 10px;
}

h6 {
  font-size: 30px;
  font-weight: 900;
}

.content_3 h4 {
  font-size: 30px;
  font-weight: 500;
  margin-left: 25px;
}

.content_3 p {
  font-size: 15px;
  margin-left: 25px;
}
.content_3 {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #d9bda8;
}
.updates_text {
  position: absolute;
  top: 35%;
  left: 6%;
}
.content_2 {
  position: relative;

  height: 350px;
  border-radius: 10px;
  // min-width: 300px;
}
.span__ {
  width: auto;
  margin: 0;
  padding: 0;
}

.texto {
  font-size: 25px;
  color: $primary;
}
hr {
  position: absolute;
  border-left: #000;
  height: 15%;
  left: 50%;
  top: 18%;
  text-decoration: none;
}
.content {
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 10px;
}
.porcentajes {
  font-size: 35px;
  font-weight: 800;
  color: $primary;
}

@media (max-width: $breakpoint-xs-max) {
  .content_3 {
    text-align: center;
    p {
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
  }
}

@media (max-width: $breakpoint-sm-max) {
  .content_3 {
    text-align: center;
    p {
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
  }
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("mails"),
      slide: ref("first"),
    };
  },
};
</script>
