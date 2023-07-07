<template>
    <v-card class="bg-white" flat>
        <v-card-text>
            <v-row>
                <v-col cols="9">
                    <v-card flat>
                        <v-card-title class="text-h2">{{ data.name }}</v-card-title>
                        <v-divider />
                        <!-- Render titles array if present -->
                        <v-card-text class="text-h6">
                            <template v-for="(title, i) in data?.titles">
                                <span>{{ title }}</span>
                                <!-- don't render bulletpoint for the last element -->
                                <template v-if="i !== data?.titles?.length - 1">
                                    &bull;
                                </template>
                            </template>
                        </v-card-text>

                        <v-card-text class="text-subtitle-1">{{ data.summary }}</v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="3" class="text-right">
                    <v-img :src="data.image" width="200" aspect-ratio="1/1" class="image-border-5" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

import { JsonResumeBasics } from "../types";

defineProps<{data: JsonResumeBasics}>();

</script>

<style>
.image-border-5 {
    border: 5px solid orange;
    border-radius: 5px;
}
</style>