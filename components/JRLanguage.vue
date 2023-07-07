<template>
    <v-card flat>
        <v-card-title>Languages</v-card-title>
        <v-divider />

        <v-card-text>
            <v-list>
                <v-list v-for="language in data">
                    <v-list-item>
                        <v-list-item-title>{{ language.language }}</v-list-item-title>
                        <v-list-item-subtitle>{{ language.fluency }}</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-list>

        </v-card-text>

    </v-card>
</template>

<script setup lang="ts">

import { JsonResumeLanguage } from "../types";

defineProps<{data: Array<JsonResumeLanguage>}>();

</script>