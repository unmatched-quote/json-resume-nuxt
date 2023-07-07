<template>
    <v-card>
        <v-card-title>Projects</v-card-title>

        <v-card-text>
            <v-timeline side="end">
                <v-timeline-item
                    v-for="project in data"
                    dot-color="blue"
                    size="small"
                >
                    <v-card flat>
                        <v-card-title>{{ project.name }}</v-card-title>
                        <v-card-subtitle>
                            <v-date-time from="yyyy-MM-dd" to="MMMM yyyy" :datetime="<string>project.startDate" />
                            -
                            <v-date-time from="yyyy-MM-dd" to="MMMM yyyy" :datetime="<string>project.endDate" />
                        </v-card-subtitle>

                        <v-card-text class="text-subtitle-1">
                            {{ project.summary }}
                        </v-card-text>

                        <v-card-text>
                            <ul>
                                <li v-for="highlight in project.highlights">
                                    {{ highlight }}
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>

                    <v-divider />

                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

import { JsonResumeProject } from "../types";

defineProps<{data: Array<JsonResumeProject>}>();

</script>