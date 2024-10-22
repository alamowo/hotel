<template>
    <div class="relative h-screen bg-black">
        <nuxt-picture src="/images/hotel.jpg" format="avif,webp" class="flex w-full h-full inset-0 absolute"
            :imgAttrs="{ class: 'max-w-none w-full h-auto object-cover' }">
        </nuxt-picture>
        <div
            class="mix-blend-difference  text-white absolute z-10 inset-0 flex flex-col gap-6 items-center justify-center text-center">
            <h1 class="font-serif text-5xl lg:text-[128px] mix-blend-multiply pt-10">Hotel Deutschland</h1>
            <p class="font-serif text-xl lg:text-[64px]">- keine Kartenzahlung -</p>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // Adding a class to the root element after the component is fully initialized
        this.$el.classList.add('fade-in');
    }
};
</script>
