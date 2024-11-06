<script setup lang="ts">
  import CoursListVue from "@/components/cours/coursList.vue";
  import CoursForm from "@/components/cours/coursForm.vue"
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" md="6">
        <CoursForm/>
      </VCol>
      <VCol cols="12" md="6">
        <CoursListVue/>
      </VCol>
    </VRow>
  </div>
</template>
