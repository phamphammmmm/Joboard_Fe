<template>
    <div class="dashboard-layout">
        <HeaderPartial />
        <div class="body">
            <NavbarPage />
            <div class="content">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
import NavbarPage from '@/components/NavbarPage.vue';
import HeaderPartial from '@/components/Partials/HeaderPartial.vue';
export default {
    components: {
        NavbarPage,
        HeaderPartial
    }
}
</script>

<style scoped>
.body {
    height: 100vh;
    display: flex;
}

.content {
    flex: 1;
}


.navbar {
    width: 20%;
    background-color: #3C4B64;
    padding: 20px;
}

.content {
    width: 80%;
    padding: 20px;
}
</style>./DashBoard.vue