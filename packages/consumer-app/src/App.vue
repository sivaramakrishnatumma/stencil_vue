<script setup lang="ts"></script>

<template>
  <header>Stencil + Vue Demo</header>

  <main>
    <div class="title">Below are web components</div>
    <my-component first="Nagi Reddy" last="Kovvuri"></my-component>
    <my-button color="primary" text="Primary"></my-button>
    <my-button color="secondary" text="Secondary"></my-button>
    <my-button color="success" text="Success"></my-button>
    <my-button color="danger" text="Danger"></my-button>
    <my-button color="warning" text="Warning"></my-button>
  </main>
</template>

<style scoped>
header {
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1em;
  margin-bottom: 1em;
}

main {
  text-align: center;
}

.title {
  color: #fff;
  margin-bottom: 1em;
}

my-component {
  margin: 1em;
}

my-button {
  margin: 1em;
}
</style>
