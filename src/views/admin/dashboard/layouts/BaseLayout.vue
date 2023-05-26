<template>
    <div>
        <section>
            <main>
                <slot name="content"></slot>
            </main>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            URL: import.meta.env.VITE_API_URL
        }
    },
    mounted(){
        this.initAuth();
    },
    methods: {
        initAuth(){
            const token = localStorage.getItem('token_auth');
            if (token == null) {
                this.$router.push({name: 'Landing'});
            }else{
                axios.get(this.URL + 'check_auth', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(({ data }) => {
                    if (data.success == true) {
                        console.log({ status: 'Auth Valid' });   
                    }
                })
                .catch(({ response }) => {
                    if (response.status == 401) {
                        this.$router.push({name: 'Landing'});
                    }
                });
            }
        }
    }
}
</script>