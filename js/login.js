const apiPath = 'https://course-ec-api.hexschool.io';

const app = new Vue({
    el: '#app',
    data: {
        user: {
            email: '',
            password: ''
        }
    },
    methods:{
        login() {
            const loginApiPath = `${apiPath}/api/auth/login`;
            // Login API
            axios.post(loginApiPath, this.user).then( res => {
                const token = res.data.token;
                const expired = res.data.expired;
                //console.log(token, expired);
                document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
                // transfer product html page
                window.location="./product.html";
            }).catch( err => {
                console.log(err);
            })
        },
        logout(){

        }
    }
});