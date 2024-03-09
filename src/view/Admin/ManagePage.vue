<template>
    <div class="overview">
        <div class="statistics-user">
            <div class="new-user">
                <h3>New members:</h3>
                <h1>{{ $newUsers }}</h1>
            </div>
            <div class="total-user">
                <h3>Total members:</h3>
                <h1>{{ $totalUsers }}</h1>
            </div>
        </div>

        <div class="chart">
            <canvas id="lineChart" style="display: block;height: 290px;width: 860px;"></canvas>
        </div>
    </div>
    <div v-if="loading">Loading....</div>
    <div class="container" v-else>
        <div class="user-container" v-if="items.length > 0">
            <div
                style="padding: 0px 15px;display: flex;justify-content: space-between;align-items: flex-end;align-items: center;">
                <div class="member">
                    <h3>Members</h3>
                    <button id="addUserBtn" class="add-btn">+</button>
                </div>
                <button class="export-user-btn">
                    <a href="{{route('manage.export')}}" style="color:white;">Export to PDF</a>
                </button>
            </div>
            <div class="search-group">
                <div class="filter">

                </div>
                <form class="search-section" action="" method="GET" id="search-form">
                    <input type="text" name="search" placeholder="Start searching">
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button type="button" id="show-all-button"><i class="fa-solid fa-rotate-right"></i></button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>User</th>
                        <th>Name</th>
                        <th>Major</th>
                        <th>Type</th>
                        <th>Role</th>
                        <th class="actions">Actions</th>
                    </tr>
                </thead>
                <tbody class="info_user">
                    <tr v-for="item in  items    " :key="item.id">
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="preview">
                            <img :src="getImageUrl(item.imagePath)" alt="User image">
                        </td>
                        <td>
                            <div class="account-information">
                                <div class="name" data-id="{{item.id }}">{{ item.fullName }}</div>
                                <div class="email" data-id="{{item.id }}">{{ item.email }}</div>
                            </div>
                        </td>
                        <td>
                            <div class="created_at" data-id="{{item.id }}">{{ item.create_at }}
                            </div>
                        </td>
                        <td>
                            <div class="phone" data-id="{{item.id }}">{{ item.phone }}
                            </div>
                        </td>
                        <td class="action-buttons">
                            <button class="open-popup-button" data-id="{{ item.id }}">
                                <pencil-square-icon class="icon" />
                            </button>
                            <form method="POST" action="{{ route('manage.delete', ['id' => item.id]) }}">
                                <button type="submit" onclick="return confirm('Are you sure to delete?')">
                                    <trash-icon class="icon" />
                                </button>
                            </form>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/solid';
import '@/styles/Admin/Manage.css';

export default {
    name: 'ManagePage',
    components: { TrashIcon, PencilSquareIcon },
    data() {
        return {
            loading: true,
            items: []
        };
    },
    mounted() {
        this.fetchUser();
    },
    methods: {
        fetchUser() {
            axios.get('http://localhost:5213/api/users/index')
                .then(response => {
                    this.loading = false;
                    this.items = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },

        getImageUrl(imagePath) {
            const basePath = 'http://localhost:5213/';
            return `${basePath}${imagePath}`;
        }
    }
}
</script>

<style scoped>
.icon {
    width: 24px;
    height: 24px;
    color: #222;
    margin-left: 12px;
}
</style>
