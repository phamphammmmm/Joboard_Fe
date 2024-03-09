<script>
// import '@/styles/Auth/Login.css';
import { TrashIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';

export default {
    components: { TrashIcon, Cog6ToothIcon },
    name: "RegisterPage"
};
</script>

<template>
    <div>
        <trash-icon class="icon" />
        <cog-6-tooth-icon class="icon" />
    </div>
</template>

<style>
.icon {
    width: 36px;
    height: 36px;
    color: #222;
    margin-left: 12px;
}
</style>
