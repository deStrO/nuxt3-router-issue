<template>
  <div>
      auth page with params {{$route.params.test}}
  </div>
</template>

<script setup>
definePageMeta({
    auth: true
})
console.log("#### 2");
</script>
