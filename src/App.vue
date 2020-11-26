<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
p{
  margin: 0px;
}
// banner公共样式
#index{
    padding: 0.9375rem 0.625rem;
    background: #f4f4f4;
    .index_banner{
      img{
        width: 100%;
        height: 86px;
      }
    }
    .index_title{
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 0.625rem;
      img{
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.625rem;
      }
    }
    .index_tofo{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 0.75rem;
        img{
          width: 10.75rem;
          height: 4.375rem;
          padding-bottom: 0.625rem;
        }
    }
    .list_title{
        font-weight: 1rem;
        font-weight: bold;
        padding-bottom: 0.625rem;
    } 
}
// 列表公共样式
.commonlist{
    background: #f4f4f4;     
    .content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .content_list{
            width: 10.75rem;
            background: #fff;
            border-radius: 0.3125rem;
            margin-bottom: 0.625rem;
            .list_have{
                width: 10.75rem;
                height: 10.75rem;
                border-top-left-radius: 0.3125rem;
                border-top-right-radius: 0.3125rem;
            }
            .list_introduce{
                display: flex;
                padding: 0px 0.625rem;
                font-size: 0.875rem;
                img{
                    width: 0.875rem;
                    height: 0.875rem;
                    vertical-align: middle;
                }
            }
            .list_price{
                display: flex;
                justify-content: space-between;
                padding: 0.3125rem 0.625rem;
                box-sizing: border-box;
                p:first-child{
                    color: #FD3C40;
                    font-size: 1rem;
                    font-weight: bold;
                    span{
                        font-size: 0.875rem;
                    }
                }
                p:last-child{
                    width: 2.75rem;
                    height: 1.25rem;
                    text-align: center;
                    line-height: 1.25rem;
                    background: url("./assets/ticket.png") no-repeat;
                    background-size: 100% 100%;
                    color: #fff;
                    font-size: 0.625rem;
                }
            }
            .list_original{
                display: flex;
                padding: 0rem 0.625rem;
                box-sizing: border-box;
                justify-content: space-between;
                padding-bottom: 0.625rem;
                 p{
                    color: #999999;
                    font-size: 0.75rem;
                    font-weight: bold;
                }
                p:first-child{
                    text-decoration: line-through;
                }
            }
        }
    }
}

</style>
