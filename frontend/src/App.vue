<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark"
             style="background-color: #000;">
            <a class="navbar-brand"
               href="#">
                <img src="./assets/logo-auracar-01.png"
                     width="200"
                     height="35"
                     alt="">
            </a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href="/cars"
                       class="nav-link">Listado</a>
                </li>
                <li class="nav-item">
                    <a href="/add"
                       class="nav-link">Añadir</a>
                </li>
            </div>
        </nav>

        <div class="container mt-3">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
}
</script>
