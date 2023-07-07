<template>

    <v-card flat>
        <v-card-title>Work Experience</v-card-title>
        <v-divider />
        <v-card-text>
            <v-timeline side="end">
                <v-timeline-item
                    v-for="experience in data"
                    dot-color="blue"
                    size="small"
                >
                    <v-card flat>
                        <v-card-title>{{ experience.position }}</v-card-title>
                        <v-card-subtitle>
                            <span class="text-blue">{{ experience.name }}</span>
                            <v-spacer />
                            <v-date-time from="yyyy-MM-dd" to="MMMM yyyy" :datetime="<string>experience.startDate" />
                            -
                            <v-date-time from="yyyy-MM-dd" to="MMMM yyyy" :datetime="<string>experience.endDate" />
                        </v-card-subtitle>

                        <v-card-text class="text-subtitle-1">
                            {{ experience.summary }}
                        </v-card-text>

                        <v-card flat>
                            <v-card-text class="pl-5">
                                <ul>
                                    <li v-for="highlight in experience.highlights">
                                        {{ highlight }}
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-card>

                    <v-divider />

                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

import { JsonResumeWork } from "../types";

defineProps<{data: Array<JsonResumeWork>}>();

</script>