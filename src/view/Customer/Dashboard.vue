<template>
    <div>
        <Header />
        <p>Main content of the page</p>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Partials/HeaderPartial.vue';
import Footer from '@/components/Partials/FooterPartial.vue';
export default {
    components: {
        Header,
        Footer
    }
}
</script>