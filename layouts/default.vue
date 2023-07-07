<template>
    <v-app class="bg-grey-lighten-4">
        <v-main>
            <v-container fluid class="container-width-1024">
                <slot />
            </v-container>
        </v-main>
    </v-app>

</template>

<script setup lang="ts">
</script>

<style>
.container-width-1280 {
    width: 1280px;
}

.container-width-1024 {
    width: 1024px;
}
</style>