<template>
    <div class="navbar">
        <ul class="menu-item">
            <li><router-link class="nav-link" to="/dashboard">Dashboard</router-link></li>
            <li><router-link class="nav-link" to="/dashboard/company">Company</router-link></li>
            <li><router-link class="nav-link" to="/dashboard/category">Category</router-link></li>
            <li><router-link class="nav-link" to="/dashboard/manage">Manage</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavbarPage',
}
</script>

<style scoped>
.menu-item .nav-link {
    text-decoration: none;
    color: white;
}

.menu-item li {
    list-style-type: none;
    margin: 10px;
}
</style>
