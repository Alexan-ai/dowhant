<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-accent text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar> </q-avatar> -->
          Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-white text-dark"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <!-- drawer content -->
      <div class="row q-gutter-sm text-center flex-center q-ma-sm">
        <div class="col-12 text-center">
          <h3>Produccer</h3>
          <q-avatar class="avatar">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <h5>Jesus Villegas</h5>
        </div>
        <span>Diseñador Web</span>
      </div>

      <div class="q-pa-md text-dark">
        <q-list dark style="max-width: 318px">
          <q-item clickable v-ripple>
            <q-item-section>
              <router-link class="OptionDashboards" to="/home">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-icon color="dark" name="home" />
                  </q-item-section>
                  <q-item-section>Dashboard</q-item-section>
                </q-item>
              </router-link>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <router-link class="OptionDashboards" to="/Registro">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-icon color="dark" name="group" />
                  </q-item-section>

                  <q-item-section>Registro Users</q-item-section>
                </q-item>
              </router-link>
            </q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple>
            <q-item-section>
              <router-link class="OptionDashboards" to="/Lista">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-icon color="dark" name="sort" />
                  </q-item-section>

                  <q-item-section>Lista Users</q-item-section>
                </q-item>
              </router-link>
            </q-item-section>
          </q-item> -->

          <div class="row logout">
            <router-link class="OptionDashboards" to="/testpage">
              <q-item v-ripple>
                <q-item-section avatar>
                  <q-icon class="iconos" color="dark-page" name="logout" />
                </q-item-section>

                <q-item-section class="text-logout" color="dark-page"
                  >Salir</q-item-section
                >
              </q-item>
            </router-link>
          </div>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.logout {
  position: absolute;
  top: 92%;
  right: 65%;
}

.iconos {
  position: relative;
  left: 27px;
  margin: 0;
  padding: 0;
  color: #696969;
}
.text-logout {
  font-size: 15px;
}
span {
  font-size: 13px;
  color: $dark;
}
h3 {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-size: 25px;
  font-weight: 500;
}
h5 {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-size: 20px;
}
.avatar {
  width: 75px;
  height: 75px;
  margin-top: 65px;
}
.buttonLogin {
  position: absolute;
  top: 90%;
  width: 100px;
}

.OptionDashboards {
  color: rgb(4, 4, 4);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
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
    };
  },
};
</script>
