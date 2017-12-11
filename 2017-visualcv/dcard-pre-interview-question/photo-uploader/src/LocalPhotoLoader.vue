<template lang="jade">
  input(type="file", @change="handleFileSelect")
</template>

<script>
  export default {
    props: {
      onLoad: Function,
    },
    methods: {
      handleFileSelect(e) {
          const files = e.target.files;
          if (files.length === 0) return;
          const file = files[0];
          console.warn(file)

          var reader = new FileReader();
          reader.onload = this.onLoad || function(){};
          reader.readAsDataURL(file);
      }
    },
  };
</script>
