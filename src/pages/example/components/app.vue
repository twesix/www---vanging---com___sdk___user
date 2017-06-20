<template>
    <div id="app">
    </div>
</template>
<script>
    import navbar from '../../../vendor/components/navbar.vue';
    import login from './panels/login.vue';
    import system_report from './panels/system_report.vue';
    import employee_report from './panels/employee_report.vue';
    import update_or_delete_employee from './panels/update_or_delete_employee.vue';
    import settle_the_wage from './panels/settle_the_wage.vue';
    import add_employee from './panels/add_employee.vue';
    export default
        {
            data: function ()
            {
                return {
                };
            },
            components:
                {
                },
            computed:
                {
                },
            methods:
                {
                },
            mounted: function()
            {
            }
        }
</script>
<style scoped>
    #app
    {
        width: 100%;
        height: 100%;
    }
</style>