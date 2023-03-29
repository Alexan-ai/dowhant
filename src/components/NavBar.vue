<template>
  <div class="">
    <q-toolbar class="text-dark navbar-class q-mb-xl">
      <q-avatar>
        <img src="public/logo.png" alt="" />
      </q-avatar>
      <q-btn flat label="Do-Producer" />
      <q-space />

      <q-tabs v-model="tab" shrink class="">
        <q-tab name="FAQ" label="FAQ" />
        <q-tab name="Registrarse" label="Registrarse" />
        <q-tab name="Entrar" label="Entrar" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script setup></script>

<style></style>
