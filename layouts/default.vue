<template>
    <div>
        <div v-if="$nuxt.isOffline" class="fixed top-0 w-full text-white text-center py-2 text-xs">
            Tidak terhubung, Periksa Jaringan Anda.
        </div>
        <slot />
    </div>
</template>
