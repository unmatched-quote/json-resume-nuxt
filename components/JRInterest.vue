<template>

    <v-card flat>
        <v-card-title>Interests</v-card-title>
    </v-card>

</template>

<script setup lang="ts">

import {JsonResumeInterest, JsonResumeLanguage} from "../types";

defineProps<{data: Array<JsonResumeInterest>}>();

</script>