import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '@/view/Admin/CategoryPage.vue';
import CompanyPage from '@/view/Admin/CompanyPage.vue';
import ManagePage from '@/view/Admin/ManagePage.vue';
import DashboardPage from '@/view/Admin/DashboardPage.vue';
import LoginPage from '@/view/Auth/LoginPage.vue';
import RegisterPage from '@/view/Auth/RegisterPage.vue';// Thêm vào import

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        children: [
            {
                path: 'company',
                name: 'CompanyPage',
                component: CompanyPage
            },
            {
                path: 'category',
                name: 'CategoryPage',
                component: CategoryPage
            },
            {
                path: 'manage',
                name: 'ManagePage',
                component: ManagePage
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
