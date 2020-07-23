export default {
    template: `
    <div class="modal fade" id="DeleteProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">刪除產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否確定要刪除 {{ tempProduct.title }} 產品
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="deleteProduct" data-dismiss="modal">確認刪除</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        deleteProduct(){
            console.log(this.tempProduct);
            const deleteProductApiPath = `${this.api.path}/api/${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`
                
            axios.delete(deleteProductApiPath).then(res => {
                this.$emit('delete');
                this.tempProduct = {imageUrl: ['']};
            }).catch(err => {
                console.log(err);
            })
        }
    },
    props: ['tempProduct', 'api']
}