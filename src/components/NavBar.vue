<template>
    <header :class="[
      'fixed w-full flex flex-row items-center text-primary px-12 py-4 transition-all duration-300',
      isScrolled ? 'backdrop-blur-sm' : 'bg-transparent '
    ]">  
      <div class="flex-grow align-middle">
        <p class="text-6xl font-semibold font-kode">Fb</p>
      </div>

      <!-- Desktop bar -->
      <div class="hidden md:flex flex-row space-x-4">
        <button class="bg-primary rounded-full px-4 py-2 text-white text-sm">Button to be defined</button>
        <button class="bg-primary rounded-full px-4 py-2 text-white text-sm">Button to be defined</button>
        <button class="bg-primary rounded-full px-4 py-2 text-white text-sm" >Button to be defined</button>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false, // Tracks if the user has scrolled
    };
  },
  methods: {
    handleScroll() {
      // Toggle the isScrolled state based on the scroll position
      this.isScrolled = window.scrollY > 1;
    },
  },
  mounted() {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>