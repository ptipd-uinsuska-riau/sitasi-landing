<template>
    <div>
        <div class="container-floating">
            <div class="ba-we-love-subscribers popup-ani" :class="{ 'open': isFormOpen }">
                <header>
                    <h1>Ada seratus??</h1>
                    <p class="text-sm text-left px-4 text-gray-300">Kalau ada ide atau masukan, boleh banget kirim pesan
                        pribadi lewat formulir di bawah, ya!</p>
                </header>
                <form action="" method="post" @submit.prevent="openPopup">
                    <input class="border border-sky-200 px-2 py-2 shadow-md" v-model="email" type="email">
                    <input class="logo-ani" name="submit" type="submit">
                </form>
            </div>
            <div class="ba-we-love-subscribers-fab" @click="toggleFab">
                <div class="wrap" :class="{ 'ani': isFabOpen }">
                    <div class="img-fab img"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isFormOpen = ref(false);
const isFabOpen = ref(false);
const email = ref('');

const openPopup = () => {
    // window.open('http://feedburner.google.com/fb/a/mailverify?uri=barreldotim', 'popupwindow', 'scrollbars=yes,width=550,height=520');
    isFormOpen.value = false;
};

const toggleFab = () => {
    isFabOpen.value = !isFabOpen.value;
    isFormOpen.value = !isFormOpen.value;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.ba-we-love-subscribers {
    width: 290px;
    height: 50px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 12px 45px rgba(0, 0, 0, .15);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin: 0 0 10px 0;
    overflow: hidden;
    opacity: 0;
}

.ba-we-love-subscribers.open {
    height: 270px;
    opacity: 1;
}

.ba-we-love-subscribers.popup-ani {
    -webkit-transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ba-we-love-subscribers h1 {
    font-size: 20px;
    color: #757575;
    padding: 25px 0;
    margin: 0;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

}

.ba-we-love-subscribers .love {
    width: 20px;
    height: 20px;
    background-position: 35px 84px;
    display: inline-block;
    margin: 0 6px;
    background-size: 62px;
}

.ba-we-love-subscribers .ba-logo {
    width: 65px;
    height: 25px;
    background-position: 0px;
    margin: 0 auto;
    opacity: .5;
    cursor: pointer;
}

.ba-we-love-subscribers .ba-logo:hover {
    opacity: 1;
}

.logo-ani {
    transition: 0.5s linear;
    -webkit-transition: 0.5s linear;
}

.ba-we-love-subscribers input {
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 15px;
    border: 0;
    outline: none;
    margin: 8px 0;
    width: 100%;
    box-sizing: border-box;
    line-height: normal;
    /*Bootstrap Overide*/
    font-family: sans-serif;
    /*Bootstrap Overide*/
}

.ba-we-love-subscribers form {
    padding: 5px 30px 0;
    margin-bottom: 15px;
}

.ba-we-love-subscribers input[name="email"] {
    background-color: #eee;
}

.ba-we-love-subscribers input[name="submit"] {
    background-color: #00aeef;
    cursor: pointer;
    color: #fff;
}

.ba-we-love-subscribers input[name="submit"]:hover {
    background-color: #26baf1;
}

.ba-we-love-subscribers .img {
    background-image: url("https://4.bp.blogspot.com/-1J75Et4_5vc/WAYhWRVuMiI/AAAAAAAAArE/gwa-mdtq0NIqOrlVvpLAqdPTV4VAahMsQCPcB/s1600/barrel-we-love-subscribers-img.png");
}

.ba-we-love-subscribers-fab {
    width: 65px;
    height: 65px;
    background-color: #00aeef;
    border-radius: 30px;
    float: right;
    box-shadow: 0px 12px 45px rgba(0, 0, 0, .3);
    z-index: 5;
    position: relative;
}

.ba-we-love-subscribers-fab .img-fab {
    height: 30px;
    width: 30px;
    margin: 15px auto;
    background-image: url("https://4.bp.blogspot.com/-1J75Et4_5vc/WAYhWRVuMiI/AAAAAAAAArE/gwa-mdtq0NIqOrlVvpLAqdPTV4VAahMsQCPcB/s1600/barrel-we-love-subscribers-img.png");
    background-position: -1px -53px;
}

.ba-we-love-subscribers-fab .wrap {
    transform: rotate(0deg);
    -webkit-transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
}

.ba-we-love-subscribers-fab .ani {
    transform: rotate(45deg);
    -webkit-transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
}

.ba-we-love-subscribers-fab .close {
    background-position: -2px 1px;
    transform: rotate(-45deg);
    float: none;
    /*Bootstrap Overide*/
    opacity: 1;
    /*Bootstrap Overide*/
}

.container-floating {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 1000;
}

.ba-settings {
    position: absolute;
    top: -25px;
    right: 0px;
    padding: 10px 20px;
    background-color: #555;
    border-radius: 5px;
    color: #fff;
}
</style>