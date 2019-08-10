<template>
    <v-app>
        <v-content>
            <v-container fill-height>
                <v-layout row wrap justify-space-around>

                    <v-flex xs3>
                        <Menu/>
                    </v-flex>

                    <v-flex xs8>
                        <v-layout column fill-height justify-space-between>
                            <v-flex xs7>
                                <Content/>
                            </v-flex>
                            <v-flex xs4>
                                <ExtraContent/>
                            </v-flex>
                        </v-layout>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Menu from './components/Menu.vue'
    import Content from "./components/Content";
    import ExtraContent from "./components/ExtraContent";

    export default {
        name: 'app',
        components: {
            ExtraContent,
            Content,
            Menu
        },
    }
</script>

<style>

</style>
