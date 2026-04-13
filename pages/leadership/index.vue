<template><div></div></template>
<script>
export default {
  middleware({ redirect }) {
    return redirect(301, '/en-us/about')
  }
}
</script>
