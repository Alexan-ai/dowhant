<template>
  <router-link
    icon="keyboard_arrow_left"
    class="buttonRegister q-ma-lg desktop-only"
    to="/testPage"
    >Volver</router-link
  >
  <section>
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <form>
          <h3 class="">Registrarse</h3>

          <input type="text" placeholder="Email or Phone" id="username" />

          <input type="text" placeholder="Password" id="username" />

          <input type="password" placeholder="Confirm Password" id="username" />

          <input type="date" placeholder="Date Birthday" id="username" />

          <router-link to="/dashboard"
            ><button>Registrarse</button></router-link
          >
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
body {
  // overflow: hidden;
  background-color: #100e24;
}
.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#ff512f, #f09819);
  left: -80px;
  top: -80px;
  animation: object1 6s linear infinite;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -55px;
  animation: object2 6s linear infinite;
}

@keyframes object1 {
  50% {
    left: 23%;
    bottom: 31%;
  }
}

@keyframes object2 {
  50% {
    right: -35%;
    bottom: 10%;
  }
}
form {
  height: 520px;
  width: 400px;
  background: linear-gradient(45deg, #fa534b, orange);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
  margin: 0;
  margin-top: 9px;
}
form h3 {
  font-size: 35px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  margin: 0;
}

label {
  display: block;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}
.social {
  margin-top: 15px;
  display: flex;
}
.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}

@media (max-width: $breakpoint-xs-max) {
  form {
    width: 293px;
  }
}
</style>
