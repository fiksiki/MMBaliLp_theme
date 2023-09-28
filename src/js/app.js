import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import {WOW} from 'wowjs/dist/wow.js';

import Header from '../blocks/modules/header/header.js';
import MainCases from '../blocks/modules/main_cases/main_cases.js';
import BlockSteps from '../blocks/modules/block_steps/block_steps.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        mainCases: new MainCases(),
        blockSteps: new BlockSteps(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.mainCases.init();
        this.blockSteps.init();
        this.modals.init();
        document.addEventListener('DOMContentLoaded', () => {
            var wow = new WOW(
                {
                  boxClass: 'wow',    
                  animateClass: 'animated',
                  mobile: false,
                  live: true,
                  scrollContainer: null,
                  resetAnimation: true,
                }
              );
            wow.init();
        });
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});