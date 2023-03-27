<template>
  <main class="flex justify-center items-center h-screen w-full bg-zinc-900">
    <section>
      <SignInForm />
    </section>

    <FooterCopyright />
  </main>
</template>

<script>
import FooterCopyright from '@/components/FooterCopyright.vue';
import SignInForm from '@/components/SignInForm.vue';
export default {
  components: {
    FooterCopyright,
    SignInForm
  }
}
</script>
