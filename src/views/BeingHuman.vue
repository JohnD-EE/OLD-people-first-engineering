<template>
  <div class="being-human">
    <navigationInner :color="color" :flat="flat" />
    <h1>This is a BEING HUMAN</h1>
    <foot />
  </div>
</template>

<script>
import navigationInner from "./../components/NavigationInner"
import foot from "./../components/Footer";

export default {
  name: 'BeingHuman',
  components: {
    navigationInner,
    foot
  },

  data: () => ({
    color: "",
    flat: null
  })
}

</script>

