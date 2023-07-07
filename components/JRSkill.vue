<template>
    <v-card flat>
        <v-card-title>Skills</v-card-title>
        <v-divider />

        <v-card-text>
            <v-card class="mt-2 mb-2" flat v-for="skill in data">
                <v-card-title class="text-subtitle-1">{{ skill.name }}</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item v-for="keyword in skill.keywords">
                            <v-chip label class="ma-1">
                                {{ keyword }}
                            </v-chip>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-card-text>

    </v-card>
</template>

<script setup lang="ts">

import { JsonResumeSkill } from "../types";

defineProps<{data: Array<JsonResumeSkill>}>();

</script>