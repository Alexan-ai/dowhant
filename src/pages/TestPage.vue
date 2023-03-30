<template>
  <navBar></navBar>
  <q-layout>
    <div class="q-pa-md q-gutter-sm">
      <q-toolbar elevated class="text-dark navbar-class q-mt-md q-mb-xl">
        <q-avatar>
          <img src="src/assets/img/logo.png" alt="" />
        </q-avatar>
        <q-btn class="desktop-only" flat label="Do-Producer" />
        <q-space />

        <router-link class="q-ma-sm buttonRegister__" to="/registerVue">
          <q-btn outline style="color: #fa534b" label="Registrarse" />
        </router-link>
        <div class="row">
          <router-link class="q-ma-sm buttonRegister__" to="/loginVue">
            <q-btn
              class="q-ma-sm"
              style="background: #fa534b; color: white"
              label="Entrar"
              id="login"
            />
          </router-link>
        </div>

        <router-view />
      </q-toolbar>
    </div>

    <section class="Hero">
      <div class="row wrapper">
        <div class="col-12 col-md-4 cols cols0 flex-center">
          <div class="hero_text">
            <span class="topline">Hola</span>
            <h1>Soy <span class="multi-text">Productor</span></h1>
            <p class="parrafo-hero">
              Joven, talentoso, y versátil, ofrece un paquete completo de
              habilidades, siendo programador, diseñador gráfico, diseñador web,
              y cantante. Con una pasión por la tecnología, la calidad, y la
              música, está bien posicionado para producir proyectos
              impresionantes en una variedad de áreas.
            </p>
          </div>
          <div class="col-2 flex-center q-pa-md q-gutter-sm btns">
            <q-btn style="background: #fa534b; color: white" label="Ver más" />
            <q-btn style="background: #fa534b; color: white" label="Añadir" />
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-6 text-center">
          <div class="imgBox">
            <img src="~assets/img/soto.png" alt="soto" />
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="row wrap text-left flex-center text-dark">
        <div class="col-12 col-md-6 col-lg-4 info-text flex-center">
          <h5 class="text-bold">
            <q-avatar
              style="width: 35px; height: 35px"
              color="red"
              text-color="white"
              class="q-ma-sm shadow-1"
              >1</q-avatar
            >Visibilidad y posicionamiento web
          </h5>
          <p class="t-1 q-pa-md">
            Una página web te permite tener una presencia en línea constante y
            visible para tu audiencia meta.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 info-text">
          <h5 class="text-bold">
            <q-avatar
              style="width: 35px; height: 35px"
              color="red"
              text-color="white"
              class="q-ma-sm shadow-1"
              >2</q-avatar
            >Promocion y comercializacion
          </h5>
          <p class="q-pa-md">
            Puede ayudarte a promover y commercializar tu música más fácilmente,
            ya que puedes incluir enlaces a tus redes sociales, channels de
            musica y tiendas online.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 info-text">
          <h5 class="text-bold">
            <q-avatar
              style="width: 35px; height: 35px"
              color="red"
              text-color="white"
              class="q-ma-sm shadow-1"
              >3</q-avatar
            >Comunidad
          </h5>
          <p class="q-pa-md">
            Una página web te permite crear una comunidad en línea alrededor de
            tu música, lo que puede ayudar a construir conexiones con tu
            audiencia y crear una base de fans leal.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 info-text">
          <h5 class="text-bold">
            <q-avatar
              style="width: 35px; height: 35px"
              color="red"
              text-color="white"
              class="q-ma-sm shadow-1"
              >4</q-avatar
            >Datos y análisis
          </h5>
          <p class="q-pa-md">
            Una página web puede ayudarte a recopilar datos sobre tu audiencia y
            su comportamiento en tu sitio.
          </p>
        </div>
      </div>

      <div class="row flex-center content_">
        <div class="col-6 col-xs-12 text-rigth">
          <h4 class="text-bold text-dark">
            La clave para mejorar tu productividad: Conoce cómo funciona un
            dashboard
          </h4>
        </div>
        <div class="col-6 col-xs-12 text-left">
          <div>
            <p class="p_2">
              Te permite monitorear en tiempo real el rendimiento de tu negocio
              y el trabajo de tu equipo, lo que te ayuda a tomar decisiones
              informadas y a reaccionar rápidamente a cualquier situación.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="secciones">
      <div class="row">
        <div class="col-12 flex-center text-center">
          <div class="imgDashbord shadow-3">
            <img style="height;: 100%" src="~assets/img/wtf.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="row flex-center q-mt-xl info-dash">
        <div class="col-12 col-sm-4 shadow-3 img_order1">
          <img src="~assets/img/asd.png" alt="" />
        </div>
        <div class="col-12 col-md-7 offset-1 text-dark text-left tx_order1">
          <span class="text-bold">MAS INFO</span>
          <h4 class="text-bold">Overview</h4>
          <p>
            La sección de Overview del dashboard muestra una visión general de
            la producción musical y del progreso de la banda. Esta sección
            muestra gráficos que representan las diferentes etapas del proceso,
            como la grabación, la mezcla, la masterización, etc. además de una
            descripción breve de su estado.
          </p>
        </div>
      </div>
      <div class="row flex-center q-mt-xl info-dash">
        <div class="col-12 col-md-7 offset-1 text-dark text-left omg_order3">
          <span class="text-bold">MAS INFO</span>
          <h4 class="text-bold">Progress Tracking</h4>
          <p>
            La sección de Progress Tracking muestra el progreso actual de la
            producción musical de la banda, incluyendo la cantidad de tiempo que
            se ha dedicado a cada tarea, el porcentaje de completado y el estado
            actual de cada tarea. Además, se pueden ver gráficos que muestran el
            progreso a lo largo del tiempo y comparar el progreso actual con el
            de otras bandas o proyectos anteriores.
          </p>
        </div>
        <div class="col-12 shadow-3 col-sm-4">
          <img src="~assets/img/asd.png" alt="" />
        </div>
      </div>
      <div class="row flex-center q-mt-xl info-dash">
        <div class="col-12 col-sm-4 shadow-3 img_order3">
          <img src="~assets/img/asd.png" alt="" />
        </div>
        <div class="col-12 col-md-7 offset-1 text-dark text-left">
          <span class="text-bold">MAS INFO</span>
          <h4 class="text-bold">Task Management:</h4>
          <p>
            La sección de Task Management ayuda a los miembros de la banda a
            gestionar y organized las tareas que se están realizando en el
            proceso de producción musical. Esta sección se puede personalizar
            para que se adapte a la necesidad y a las tareas específicas de la
            banda y se puede utilizar para asignar tareas a los miembros,
            establecer líneas de tiempo y monitorear el progreso.
          </p>
          <q-btn
            class="q-ma-sm"
            style="background: #fa534b; color: white"
            label="Registrarse"
            id="login"
          />
        </div>
      </div>
    </section>
    <section
      class="caracter"
      style="background: linear-gradient(45deg, #fa534b, orange)"
    >
      <div
        class="fit q-pa-md row wrap justify-center items-center content-start caracter_"
      >
        <div class="col-6 self-center content_img">
          <img
            src="~assets/img/macbook.png"
            alt=""
            style="width: 100%; height: 100%"
            class="q-pa-md flex-start"
          />
        </div>

        <div class="col-3 col-sm-2 q-ma-sm self-start offset-1 so-much">
          <div>
            <h6>Contenido</h6>
            <p>
              Una de las características más importantes en una web de
              producción musical es el contenido diverso que ofrece, incluyendo
              artículos, tutoriales, entrevistas, reviews, y mucho más. El
              contenido debe ser útil, atractivo y de alta calidad para manter a
              los lectores interesados e informados.
            </p>
          </div>

          <div>
            <h6>Redes Sociales</h6>
            <p>
              Una web de producción musical también debe incluir la opción de
              compartir el contenido a través de redes sociales, lo que ayuda a
              la web a llegar a una audiencia más amplia y a promover la
              interacción entre los usuarios.
            </p>
          </div>
        </div>

        <div class="col-3 col-sm-2 q-ma-sm self-end so-much">
          <div>
            <h6>Tienda online</h6>
            <p>
              Para una web de producción musical, tener una tienda online es una
              característica importante para venta de productos relacionados con
              la producción musical, como plugins, sample packs, equipos, etc.
              La tienda debe ser fácil de usar y ofrecer diferentes métodos de
              pago seguro.
            </p>
          </div>

          <div>
            <h6>Forum y comunidad:</h6>
            <p>
              Una comunidad en línea es una característica muy importante para
              una web de producción musical. Los usuarios pueden interactuar
              entre sí, intercambiar conocimientos y compartir ideas, lo que
              ayuda a crear un ambiente de aprendizaje y crecimiento mutuo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="coment q-mb-xl q-mt-xl">
      <div class="q-pa-md">
        <div class="row visualizer flex-center">
          <div class="col-12 text-center">
            <div>
              <h3 class="text-dark">Opiniones</h3>
              <span class="text-bold">Buying</span>
            </div>
          </div>
          <div class="col-12 text-center"></div>
        </div>

        <div class="q-pa-md">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            padding
            arrows
            height="300px"
            class="text-dark shadow-1 rounded-borders"
            style="background: linear-gradient(45deg, #fa534b, orange)"
          >
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
              <q-btn
                v-if="active"
                size="lg"
                icon="home"
                color="yellow"
                flat
                round
                dense
                @click="onClick"
              />
              <q-btn
                v-else
                size="sm"
                :icon="btnProps.icon"
                color="white"
                flat
                round
                dense
                @click="onClick"
              />
            </template>

            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-avatar size="70px">
                <img style="object-fit: cover" src="~assets/img/sho.jpeg" />
              </q-avatar>
              <b class="q-mt-sm">Alé Xan</b>
              <div class="q-mt-md text-center">
                {{ Mary }}
                <div class="col-12 col-md-6 q-mt-md">
                  <q-rating
                    v-model="model"
                    max="5"
                    size="3em"
                    color="white"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    no-dimming
                  />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-avatar size="70px">
                <img style="object-fit: cover" src="~assets/img/gordo.jpg" />
              </q-avatar>
              <b class="q-mt-sm">Efrenyer C.</b>
              <div class="q-mt-md text-center">
                {{ Gordo }}
                <div class="col-12 col-md-6 q-mt-md">
                  <q-rating
                    v-model="model"
                    max="5"
                    size="3em"
                    color="white"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    no-dimming
                  />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-avatar size="70px">
                <img style="object-fit: cover" src="~assets/img/compaye.jpg" />
              </q-avatar>
              <b class="q-mt-sm">Jeremy Vivas</b>
              <div class="q-mt-md text-center">
                {{ Compaye }}
                <div class="col-12 col-md-6 q-mt-md">
                  <q-rating
                    v-model="model"
                    max="5"
                    size="3em"
                    color="white"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    no-dimming
                  />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-avatar size="70px">
                <img style="object-fit: cover" src="~assets/img/karo.jpeg" />
              </q-avatar>
              <b class="q-mt-sm">Karolain Valera</b>
              <div class="q-mt-md text-center">
                {{ karo }}
                <div class="col-12 col-md-6 q-mt-md">
                  <q-rating
                    v-model="model"
                    max="5"
                    size="3em"
                    color="white"
                    icon="star_border"
                    icon-selected="star"
                    icon-half="star_half"
                    no-dimming
                  />
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </section>

    <footer class="q-pa-md bg-primary shadow-3">
      <div class="row">
        <div class="logo flex-center text-left q-pa-md col-6">
          <q-img
            src="~assets/img/logo.png"
            spinner-color="dark"
            style="height: 50px; max-width: 50px"
            class="q-mb-lg"
          />
          <p class="text-dark">
            ©2023 <span class="text-bold">Do-Prodducer</span> Todos los derechos
            reservados
          </p>
          <div class="">
            <h5 class="text-bold">Más sobre nosotros...</h5>
            <p class="">¿Como trabajamos?</p>
            <p class="q-mt-lg">¿Nuestros servicios?</p>
          </div>
        </div>
        <div class="contactar q-mt-lg text-center col-6 text-dark">
          <div class="mini-form">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your age',
                  (val) => (val > 0 && val < 100) || 'Please type a real age',
                ]"
              />

              <div>
                <q-btn label="Submit" type="submit" color="dark" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </footer>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import "animate.css";

export default {
  setup() {
    return {
      slide: ref("style"),
      model: ref(2.3),
      parentMessage: "Contenido",
      karo: '"Una web de producción musical es que tener una página web puede ser una herramienta muy útil para cualquier productor musical que quiera ampliar su alcance y llegar a más personas. Una página web de producción musical puede ser utilizada como un portafolio online, donde se pueden presentar y vender álbumes, mostrar las fechas de eventos y simplemente contar la historia del productor."',
      Compaye:
        '" Tener página web de música puede ser utilizada para recopilar los contactos de la audiencia y mantenerlos actualizados mediante boletines por correo electrónico, lo que puede ser una estrategia efectiva de marketing musical."',
      Gordo:
        '"Una web de música es que tener una página web es imprescindible para cualquier músico, artista, grupo o productor que quiera tener presencia en un medio que es parte del día a día de millones de personas."',
      Mary: '"La web de producción musical es un recurso valioso para cualquier amante de la música que desea aprender más sobre la producción y crear su propia música. La web debe ser fácil de usar y ofrecer una variedad de contenido relevante, incluyendo tutoriales, interviews y reseñas de equipos"',
    };
  },
};
</script>

<style lang="scss" scoped>
.Circles_ {
  background: $secondary;
  color: $primary;
}

.absolute-full {
  right: 30%;
}

.secciones {
  margin-left: 10px;
  margin-right: 10px;
}
.hero_text {
  position: relative;
}
.coment {
  margin-bottom: 90px;
}
.contactar h5 {
  margin: 20px 0px 20px 0px;
}

.contactar p {
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
}

.contactar p:hover {
  opacity: 0.5;
}
.wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0 10%;
  overflow: hidden;
}

.wrapper::before {
  position: absolute;
  content: "";
  height: 320px;
  width: 320px;
  border-radius: 50%;
  left: -12%;
  top: 5%;
  background: linear-gradient(45deg, #fa534b, orange);
  animation: object1 6s linear infinite;
}

.wrapper::after {
  position: absolute;
  content: "";
  height: 150px;
  width: 150px;
  border-radius: 50%;
  left: 40%;
  top: 9%;
  background: linear-gradient(45deg, #fa534b, orange);
  animation: object2 6s linear infinite;
  z-index: -1;
}

@keyframes object1 {
  50% {
    left: -13%;
    top: 6%;
  }
}

@keyframes object2 {
  50% {
    left: 35%;
    top: 10%;
  }
}

.Hero .cols {
  width: 50%;
}

.Hero .cols0 {
  z-index: 5;
}

.topline {
  display: block;
  position: relative;
  font-size: 35px;
  letter-spacing: 5px;
  color: $dark;
  top: 60px;
}

.topline::after {
  position: absolute;
  content: "";
  height: 4px;
  width: 45px;
  bottom: 10px;
  background-color: #fa534b;
}

h1 {
  display: block;
  font-size: 6em;
  font-weight: 900;
  color: $dark;
}

.multi-text {
  color: #fa534b;
  text-transform: capitalize;
}
p {
  display: block;
  width: 90%;
  font-size: 1.2em;
  color: $dark;
}
.imgBox {
  position: relative;
  width: 100%;
  height: 100%;
}
.imgBox img {
  z-index: 999;
  transform: rotateY(180deg);
}

.imgBox #splash {
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-35deg);
  filter: saturate(200%);
  width: 650px;
  height: 650px;
}

.info-text {
  z-index: 5;
}
.secciones {
  padding-left: 48px;
  margin-top: 130px;
}
.content {
  margin-top: 130px;
  padding-left: 48px;
  padding-right: 48px;
}

.content::after {
  position: relative;
}

.content h5 {
  font-size: 28px;
}
.content_ {
  margin-top: 100px;
}

.imgDashbord {
  padding-right: 48px;
}

.imgDashbord img {
  width: 100%;
  height: 100%;
}

.img-dashbord2 {
  position: relative;
}

.img-dashbord2 img {
  width: 80%;
}

.img-dashbord3 img {
  width: 80%;
}

.info-dash img {
  width: 100%;
}

.img-dashbord2::after {
  position: absolute;
  content: "";
  height: 520px;
  width: 550px;
  right: 59%;
  top: -7%;
  background: linear-gradient(45deg, #fa534b, orange);
  z-index: -5;
}

.img-dashbord3::after {
  position: absolute;
  content: "";
  height: 520px;
  width: 550px;
  left: 49%;
  top: -7%;
  background: linear-gradient(45deg, #fa534b, orange);
  z-index: -5;
}
.info-dash span {
  position: relative;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  top: 35px;
  color: #fa534b;
}

.caracter {
  margin-top: 100px;
}
.cont-macbok {
  position: relative;
}

p {
  font-size: 15px;
}

.macbok img {
  width: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
}
</style>
