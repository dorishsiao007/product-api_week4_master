import pagination from './pagination.js';
import modal from './modal.js';
import deleteModal from './delete_modal.js';

// Vue Component
Vue.component('pagination', pagination);
Vue.component('modal', modal);
Vue.component('delete', deleteModal);

new Vue({
    el: "#product",
    data: {
        productData: [],
        tempProduct: {imageUrl: ['']},
        token: '',
        paginationData: {},
        api: {
            uuid: '7dcf70ef-1a02-406f-883c-e4682a9c0fa8',
            path: 'https://course-ec-api.hexschool.io'
        }
    },
    methods: {
        getProducts(page = 1) {
            const getProductsApiPath = `${this.api.path}/api/${this.api.uuid}/admin/ec/products?page=${page}`
            axios.get(getProductsApiPath).then(res => {
                this.productData = res.data.data;
                this.paginationData = res.data.meta.pagination;
            }).catch(err => {
                console.log(err);
            });
        },

        openModal: function (action, data) {
            switch (action) {
                case "add": {
                    this.tempProduct = {imageUrl: ['']};
                    break;
                }
                case "update": {
                    // Get Single Product Data
                    const id = data.id;
                    const getProductDetailApiPath = `${this.api.path}/api/${this.api.uuid}/admin/ec/product/${id}`;
                    axios.get(getProductDetailApiPath).then( res => {
                        this.tempProduct = JSON.parse(JSON.stringify(res.data.data));
                    }).catch( err => {
                        console.log(err)
                    })
                    break;
                }
                case "delete": {
                    this.tempProduct = JSON.parse(JSON.stringify(data));
                    break;
                }
                default: {
                    break;
                }
            }
        }
    },
    mounted(){
        // get token
        this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // axios add authorization
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        // get porducts list
        this.getProducts();
    }
});