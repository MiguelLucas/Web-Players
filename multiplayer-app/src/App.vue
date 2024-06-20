<script setup lang="ts">
import logger from '@/plugins/logger';
import HelloWorld from './components/HelloWorld.vue'

logger.info('Initializing Web Multiplayer App')

</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Quasar in Existing Vue Project
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-btn label="Hello Quasar" color="primary" />
        <HelloWorld msg="Vite + Vue" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
