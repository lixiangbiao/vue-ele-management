<template>
    <div>
        <el-header class="header">
            <span class="hideAside" @click="collapseclick">
                <i v-if="logoShow" class="iconfont icon-caidan-dakai" style="font-size:24px"></i>
                <i v-else class="iconfont icon-caidan-shousuo" style="font-size:24px"></i>
            </span>
            <ul class="personal">
                <li class="fullScreen" @click="fullScreen">
                    <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                        <i class="iconfont icon-quanping" style="font-size:22px"></i>
                    </el-tooltip>
                </li>
                <li>
                    <!-- <langSelect></langSelect> -->
                </li>
                <!-- <li>{{ $t(`role.${this.$store.getters.info.role}`) }}</li> -->
                <li>
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">will
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">个人中心</el-dropdown-item>
                            <el-dropdown-item command="b">修改密码</el-dropdown-item>
                            <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="icon">
                    <!-- <img :src="require('@/assets/images/header.png')"> -->
                    <img :src="avatar">
                </li>
            </ul>
        </el-header>
        <!-- <tabNav></tabNav> -->
    </div>
</template>

<script>
//import url_1 from "@/assets/images/header.png"
//import Cookies from 'js-cookie'
//import langSelect from '../../../components/lang/langSelect'
//import tabNav from './tabNav'

import { mapState , mapMutations} from 'vuex'
export default {
    name: "Header",
    //components: {tabNav, langSelect},
    data() {
        return {
            isfullScreen: true,
            avatar: require('@/assets/images/header.png')
        };
    },
    computed:{
        ...mapState({
            logoShow: (state) => state.layout.logoShow,
        })
    },
    methods: {
        ...mapMutations(["collapse"]),
        collapseclick() {
            this.collapse()
        },
        fullScreen() {
            if (this.isfullScreen) {
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
                this.isfullScreen = false;
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                this.isfullScreen = true;
            }
        },
        handleCommand(command) {
            if (command === "logout") {
                //Cookies.remove('token');
                location.reload();
            }
        }
    }
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
%w100 {
    width: 100%;
}

%h100 {
    height: 100%;
}

%cursor {
    cursor: pointer;
}

html,
body,
#app,
.el-container,
#asideNav,
ul.el-menu {
    @extend %h100;
}

@mixin set-value($side, $value) {
    @each $prop in $leftright {
        #{$side}-#{$prop}: $value;
    }
}

.header {
    max-height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    .hideAside {
        @extend %cursor;
    }
    .personal {
        display: flex;
        flex-direction: row;
        li {
            @include set-value(margin, 13px);
            font-size: 12px;
        }
        .fullScreen {
            @extend %cursor;
        }
        .el-dropdown-link {
            @extend %cursor;
        }
        .icon img {
            margin-#{$top}: 7px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            width: 40px;
            height: 40px;
        }
    }
}
</style>
