<template>
    <div id="app" :class="{'font-roboto': this.$i18n.locale === 'en', 'font-tajawal': this.$i18n.locale === 'ar'}" :style="direction">

        <navbar></navbar>

        <main>
            <router-view></router-view>
        </main>

    </div>
</template>

<script>
    export default {
        methods: {
            checkLocal(local) {
                return this.$i18n.locale === local;
            },
        },
        computed: {
            direction() {
                return this.checkLocal('en')? { direction: 'ltr'} : { direction: 'rtl'};
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/app.css";
</style>
