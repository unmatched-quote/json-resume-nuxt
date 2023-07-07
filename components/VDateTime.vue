<template>
    <span>{{ date }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { parse, isValid } from 'date-fns';
import { format } from 'date-fns-tz';

const props = withDefaults(defineProps<{
    datetime: string,
    from?: string,
    to?: string,
    timezone?: string
}>(), {
    from: 'yyyy-MM-dd HH:mm:ss',
    to: 'dd.MM.yyyy, HH:mm',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Zagreb'
})

const date = computed(() => {
    const { datetime, to, from, timezone } = props;

    // check for validity of formats
    try {
        format(new Date(), from);
        format(new Date(), to);
    } catch(e) {
        return 'Invalid format'
    }

    const parsedDate = parse(datetime, from, new Date());

    if (isValid(parsedDate)) {
        return format(parsedDate, to, { timeZone: timezone });
    }

    return 'Invalid input';
});

</script>


