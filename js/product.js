import pagination from './pagination.js';

const uuid = '7dcf70ef-1a02-406f-883c-e4682a9c0fa8';
const apiPath = 'https://course-ec-api.hexschool.io';

// Vue Component
Vue.component('pagination', pagination);

new Vue({
    el: "#product",
    data: {
        productData: [],
        tempProduct: {},
        token: '',
        paginationData: {}
    },
    methods: {
        getProducts(page = 1) {
            const getProductsApiPath = `${apiPath}/api/${uuid}/admin/ec/products?page=${page}`
            axios.get(getProductsApiPath).then(res => {
                this.productData = res.data.data;
                this.paginationData = res.data.meta.pagination;
                console.log(this.productData);
                console.log(this.paginationData);
            }).catch(err => {
                console.log(err);
            });
        },
        updateProduct: function () {
            if(this.tempProduct.id){
                // Update Product Data
                const id = this.tempProduct.id;
                this.productData.forEach((item, index) => {
                    if (item.id === id) {
                        this.productData[index] = this.tempProduct;
                    }
                });
                this.tempProduct = {};
            }
            else{
                // Add Product Data
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.productData.push(this.tempProduct);
                this.tempProduct = {};
            }
        },

        deleteProduct: function () {
            const id = this.tempProduct.id;
            this.productData.forEach((item, index) => {
                if (item.id === id) {
                    this.productData.splice(index, 1);
                }
            });
            this.tempProduct = {};
        },

        openModal: function (action, data) {
            switch (action) {
                case "add": {
                    this.tempProduct = {};
                    break;
                }
                case "update": {
                    this.tempProduct = JSON.parse(JSON.stringify(data));
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
    created(){
        // get token
        this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // axios add authorization
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        // get porducts list
        this.getProducts();
    }
});