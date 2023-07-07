<template>

    <v-layout row wrap>
            <v-card>
                <v-card-text>

                    <v-row>

                    <v-col cols="12">
                        <JRBasic :data="<JsonResumeBasics>resume.basics" />
                    </v-col>
                    <v-divider />

                    <v-col cols="4">
                        <JRContact :data="<JsonResumeBasics>resume.basics" />
                        <JRSkill :data="<Array<JsonResumeSkill>>resume.skills" />
                        <JRLanguage :data="<Array<JsonResumeLanguage>>resume.languages" />
                    </v-col>

                    <v-col cols="8">
                        <JRWork :data="<Array<JsonResumeWork>>resume.work" />

<!--                        <JRProject :data="<Array<JsonResumeProject>>resume.projects" class="mt-5" />-->
                    </v-col>

                    </v-row>
                </v-card-text>
            </v-card>
    </v-layout>

</template>

<script setup lang="ts">

// @ts-ignore
import data from '~/static/resume.json';

import {
    JsonResumeBasics, JsonResumeLanguage, JsonResumeProject,
    JsonResumeSchema, JsonResumeSkill, JsonResumeWork
} from "../../types";

const resume: JsonResumeSchema = <JsonResumeSchema>ref(data);

</script>