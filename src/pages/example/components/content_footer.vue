<template>
    <footer>
        Copyright &copy; {{ owner }} . All Rights Reserved.
    </footer>
</template>
<script>
    export default
    {
        data: function () {
            return {
                owner: 'vanging.com'
            };
        },
        components: {}
    }
</script>
<style scoped>
    footer
    {
        background-color: tan;
        text-align: center;
        padding: 5px;
        font-size: 18px;
    }
</style>