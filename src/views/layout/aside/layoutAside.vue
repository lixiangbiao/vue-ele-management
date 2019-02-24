<template>
    <div class="layoutAside">
        <el-aside class="asideNav">
            <div class="logo-name">
                <p v-if="logoShow">vue</p>
                <p v-else>vue-管理后台</p>
            </div>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="#03152A"
                text-color="rgba(255,255,255,.7)"
                active-text-color="#ffffff"
                :router="true"
                :unique-opened="true"
                :collapse-transition="true"
            >
                <el-menu-item index="/home">
                    <i class="el-icon-menu"></i>
                    <span slot="title">管理首页</span>
                </el-menu-item>

                <el-submenu index="/storage">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">仓库管理</span>
                    </template>
                    <el-menu-item index="/enter">入库单</el-menu-item>
                    <el-menu-item index="/cut">出库单</el-menu-item>
                    <el-menu-item index="/division">存库分配</el-menu-item>
                    <el-menu-item index="/balance">库存余额</el-menu-item>
                </el-submenu>
                <el-submenu index="/product">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">产品管理</span>
                    </template>
                    <el-menu-item index="/depository">产品库存</el-menu-item>
                    <el-menu-item index="/cost">产品成本</el-menu-item>
                    <el-menu-item index="/plist">产品列表</el-menu-item>
                </el-submenu>
                <el-submenu index="/order">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item index="/statement">订单报表</el-menu-item>
                    <el-menu-item index="/olist">订单列表</el-menu-item>
                    <el-menu-item index="/attach">订单归属</el-menu-item>
                </el-submenu>
                <el-submenu index="/customer">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">客户管理</span>
                    </template>
                    <el-menu-item index="/cmessage">客户信息</el-menu-item>
                    <el-menu-item index="/market">客户销售</el-menu-item>
                    <el-menu-item index="/corder">客户订单</el-menu-item>
                    <el-menu-item index="/relation">客户关系</el-menu-item>
                </el-submenu>
                <el-submenu index="/employee">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">员工管理</span>
                    </template>
                    <el-menu-item index="/emessage">员工信息</el-menu-item>
                    <el-menu-item index="/jurisdiction">员工权限</el-menu-item>
                    <el-menu-item index="/newadd">新员工入职</el-menu-item>
                    <el-menu-item index="/performance">员工业绩</el-menu-item>
                </el-submenu>
                <el-menu-item index="/setting">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>
<script>
import { mapState , mapGetters , mapMutations} from 'vuex'
export default {
    name: "layoutAside",
    data() {
        return {
            //isCollapse: false,
        };
    },
    computed:{
        ...mapState({
            //tabindex: 'tabindex', // 第一种写法
            logoShow: (state) => state.layout.logoShow, // 第二种写法
            isCollapse: (state) => state.layout.isCollapse, // 第二种写法
        }),
        ...mapGetters({

        })
    },
    created(){
        //console.log(this)
        //console.log(this.$route.path)
    },
    methods: {
        handleOpen() {},
        handleClose() {}
    }
};
</script>
<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
%w100 {
    width: 100%;
}

%h100 {
    height: 100%;
}

%cursor {
    cursor: pointer;
}

@mixin set-value($side, $value) {
    @each $prop in $leftright {
        #{$side}-#{$prop}: $value;
    }
}

.asideNav {
    width: auto !important;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
    .logo-name {
        color: rgba(255, 255, 255, 0.8);
        background-color: #03152a !important;
        @extend %w100;
        font-weight: 300;
        z-index: 999;
        p {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            transition:width 1s linear
        }
    }
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
        @extend %h100;
        overflow-y: scroll;
    }
    .el-menu {
        flex: 1;
        overflow: inherit;
        border-right: none;
        &::-webkit-scrollbar {
            display: none;
        }
        .fa {
            vertical-align: middle;
            margin-right: 5px;
            width: 24px;
            text-align: center;
            font-size: 18px;
        }
        .el-menu-item {
            background-color: #020f1d !important;
            border-bottom: 1px solid #020f1d;
            &:hover {
                color: #ffffff !important;
                background-color: #375573 !important;
            }
        }
        .el-menu-item.is-active {
            background-color: #56a9ff !important;
        }
        .is-opened > .el-submenu__title > .el-icon-arrow-down {
            color: #ffffff;
            font-weight: 500;
            font-size: 18px;
        }
    }
}
</style>