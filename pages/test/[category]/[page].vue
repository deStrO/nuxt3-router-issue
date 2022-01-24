<template>
  <div>
      page with params {{$route.params.page}}
  </div>
</template>

<script setup>
definePageMeta({
    auth: true
})
console.log("#### 2");
</script>
