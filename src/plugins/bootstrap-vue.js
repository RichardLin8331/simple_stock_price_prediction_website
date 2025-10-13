import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

// 引用<b-form-input> 搜尋欄位
import { FormInputPlugin } from "bootstrap-vue";
Vue.use(FormInputPlugin);

// 單獨引用 <b-button> 搜尋按鈕，因為目前不會用到 <b-button-close>
import { BButton } from "bootstrap-vue";
Vue.component("b-button", BButton);

import { FormPlugin } from 'bootstrap-vue';
Vue.use(FormPlugin);

import { FormSelectPlugin } from 'bootstrap-vue'
Vue.use(FormSelectPlugin)

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

import { TablePlugin } from 'bootstrap-vue'
Vue.use(TablePlugin)

import { ImagePlugin } from 'bootstrap-vue'
Vue.use(ImagePlugin)