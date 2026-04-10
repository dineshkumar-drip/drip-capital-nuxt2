<template>
  <div>
    <AppTopBar />
    <AppNav />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import scrollReveal from '~/mixins/scrollReveal'

export default {
  mixins: [scrollReveal]
}
</script>
