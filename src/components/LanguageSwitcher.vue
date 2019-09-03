<template>
    <div class="relative">

        <a href="#" class="flex items-center" v-on-clickaway="hideDropdown" @click="toggleVisibility">
            <img :src="require(`../assets/images/flag_${this.$i18n.locale}.svg`)" alt="" class="w-8 h-8" style="max-width: none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-600"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
        </a>

        <transition name="dropdown-fade">
            <ul class="absolute normal-case font-normal right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 z-20" v-if="isVisible">
                <li>
                    <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200" @click.prevent="setLocal('en')">
                        <img :src="require(`../assets/images/flag_en.svg`)" alt="" class="w-8 h-8">
                        <span class="ml-2 text-gray-600 text-sm">{{ $t('nav.dropdown.item1') }}</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200" @click.prevent="setLocal('ar')">
                        <img :src="require('../assets/images/flag_ar.svg')" alt="" class="w-8 h-8">
                        <span class="ml-2 text-gray-600 text-sm">{{ $t('nav.dropdown.item2') }}</span>
                    </a>
                </li>
            </ul>
        </transition>

    </div>
</template>

<script>

    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],
        data() {
            return {
                isVisible: false,
                langs: ['en', 'ar']
            }
        },
        methods: {
            toggleVisibility() {
                this.isVisible = !this.isVisible;
            },

            hideDropdown() {
                this.isVisible = false;
            },

            setLocal(local) {
                this.$i18n.locale = local;
                this.$router.push({
                    params: { lang: local }
                })
            }
        }
    };
</script>

<style scoped>

    .dropdown-fade-enter-active, .dropdown-fade-leave-active {
        transition: all .1s ease-in-out;
    }

    .dropdown-fade-enter, .dropdown-fade-leave-to {
        opacity: 0;
        transform: translateY(-12px);
    }

</style>
