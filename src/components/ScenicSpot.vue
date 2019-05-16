<template>
    <div>
        
    </div>
</template>
<script>
export default {
    created() {
        this.axios.get('http://localhost:5555').then((r)=>{
            console.log(r)
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../sassFuncs/px2rem.scss';

</style>
