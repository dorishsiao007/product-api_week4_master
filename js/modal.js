export default {
    template: `
    <div class=" modal fade" id="UpdaateProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">
                                <div class="row">
                                    <div class="input-group flex-nowrap">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="addon-wrapping">圖片網址</span>
                                        </div>
                                        <input type="text" v-model="tempProduct.imgUrl" class="form-control" placeholder="請輸入圖片網址"
                                            aria-label="PictureUrl" aria-describedby="addon-wrapping">
                                    </div>
                                </div>
                                <div class="row">
                                    <img :src="tempProduct.imgUrl"
                                        class="img-fluid" alt="Responsive image">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="product-title">標題</span>
                                    </div>
                                    <input v-model="tempProduct.title" type="text" class="form-control"
                                        placeholder="請輸入產品標題" aria-label="ProductTitle"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="product-category">分類</span>
                                    </div>
                                    <input v-model="tempProduct.category" type="text" class="form-control"
                                        placeholder="請輸入產品分類" aria-label="ProductCagetory"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="product-unit">單位</span>
                                    </div>
                                    <input v-model="tempProduct.unit" type="text" class="form-control"
                                        placeholder="請輸入產品單位" aria-label="ProductUnit"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="original-price">原價</span>
                                    </div>
                                    <input v-model="tempProduct.origin_price" type="text" class="form-control"
                                        placeholder="請輸入產品原價" aria-label="OriginalPrice"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="price">售價</span>
                                    </div>
                                    <input v-model="tempProduct.price" type="text" class="form-control"
                                        placeholder="請輸入產品售價" aria-label="Price" aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="product-description">產品描述</span>
                                    </div>
                                    <input v-model="tempProduct.description" type="text" class="form-control"
                                        placeholder="請輸入產品描述" aria-label="ProductDescription"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="product-note">說明內容</span>
                                    </div>
                                    <input v-model="tempProduct.content" type="text" class="form-control"
                                        placeholder="請輸入說明內容" aria-label="ProductNote"
                                        aria-describedby="addon-wrapping">
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" v-model="tempProduct.enabled" type="checkbox" value="" id="product-enable">
                                    <label class="form-check-label" for="defaultCheck1">
                                        是否啟用
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="updateProduct">確定</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ["tempProduct"]
};