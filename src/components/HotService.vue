<template>
    <div>
        <div>
            <Icon type="ios-arrow-back" size="40"  class="back-btn" ></Icon>
            <div>
                <Icon type="ios-search" size="40"></Icon>
                <input type="text" placeholder="目的地/景点" ref="input">
            </div>
        </div>

    </div>
</template>
<script>
export default {
    // created() {
    //     this.axios.get('http://localhost:5555').then((r)=>{
    //         console.log(r)
    //     })
    // }
}
</script>
<style lang="scss" scoped>
@import '../sassFuncs/px2rem.scss';

</style>
