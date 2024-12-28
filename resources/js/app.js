import './bootstrap';
import '../css/app.css'
import '../css/prime.scss'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import PrimeVue from 'primevue/config';
import MyPreset from './plugins/theme'

import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';

import appState from './plugins/appState';
import ThemeSwitcher from './components/ThemeSwitcher.vue'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        return pages[`./pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                ripple: true,
                theme: {
                    preset: MyPreset,
                    options: {
                        prefix: 'p',
                        darkModeSelector: '.p-dark',
                        cssLayer: false,
                    }
                },
            })
            .use(ConfirmationService)
            .use(ToastService)
            .use(DialogService)
            .use(appState)
            .component('ThemeSwitcher', ThemeSwitcher)
            .mount(el)
    },
})
