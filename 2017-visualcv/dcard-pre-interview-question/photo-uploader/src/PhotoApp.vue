<template lang="jade">
  .app
    photo-loader
</template>

<script>
  import PhotoLoader from './PhotoLoader.vue';

  export default {
    components: {
      'photo-loader': PhotoLoader,
    }
  };
</script>
