<template>
    <div>
        <nav class="flex flex-col px-8 py-6 container text-xl md:px-0 md:mx-auto md:flex-row" :class="{'border-b border-gray-100 shadow': isOpen }">
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                    <svg class="fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="30" height="30">
                        <path class="heroicon-ui"
                              d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/>
                    </svg>
                    <span class="mx-2">Null<span class="text-purple-600">able</span></span>
                </div>
                <button class="md:hidden" @click="toggle">
                    <svg class="fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path v-if="!isOpen" fill-rule="evenodd"
                              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

            <div class="flex flex-col items-center mt-6 md:flex-row md:mt-0" :class="{'visible': isOpen, 'hidden md:flex': !isOpen}">
                <div>
                    <a class="text-gray-600 font-light" href="#">{{ $t('nav.item1') }}</a>
                </div>
                <div class="mt-2 md:mt-0 md:mx-2">
                    <a class="text-gray-600 font-light" href="#">{{ $t('nav.item2')}}</a>
                </div>
                <div class="mt-2 md:mt-0 md:mx-2">
                    <language-switcher/>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

    import LanguageSwitcher from "./LanguageSwitcher";

    export default {
        components: { LanguageSwitcher },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    };
</script>

<style scoped></style>
