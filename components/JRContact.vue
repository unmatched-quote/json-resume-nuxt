<template>
    <v-card flat>
        <v-card-title>Contact</v-card-title>
        <v-divider />
        <v-list>

            <v-list-item>
                <template v-slot:prepend>
                    <v-icon icon="mdi-map-marker-outline"></v-icon>
                </template>
                {{ data.location.city }}, {{ data.location.country }}
            </v-list-item>

            <v-list-item>
                <template v-slot:prepend>
                    <v-icon icon="mdi-map-clock"></v-icon>
                </template>
                {{ data.location.timeZone }} ({{ data.location.timeZoneGMT }})
            </v-list-item>

            <v-list-item>
                <template v-slot:prepend>
                    <v-icon icon="mdi-email"></v-icon>
                </template>
                <a :href="`mailto:${ data.email }`">{{ data.email }}</a>
            </v-list-item>

            <v-list-item>
                <template v-slot:prepend>
                    <v-icon icon="mdi-cellphone-basic"></v-icon>
                </template>
                {{ data.phone }}
            </v-list-item>

            <v-list-item v-for="profile in data.profiles">
                <template v-slot:prepend>
                    <v-icon :icon="profile.icon"></v-icon>
                </template>
                <a :href="profile.url">{{ profile.network }}</a>
            </v-list-item>

        </v-list>
    </v-card>
</template>

<script lang="ts" setup>
import { JsonResumeBasics } from "../types";

defineProps<{data: JsonResumeBasics}>();

</script>