<template>
    <div id="app">
        <nav_top></nav_top>
        <div class="body">
            <nav_side></nav_side>
            <content_main></content_main>
        </div>
        <content_footer></content_footer>
    </div>
</template>
<script>
    import nav_top from './nav_top.vue';
    import nav_side from './nav_side.vue';
    import content_footer from './content_footer.vue';
    import content_main from './content_main.vue';

    export default
        {
            data: function ()
            {
                return {
                };
            },
            components:
                {
                    nav_top: nav_top,
                    nav_side: nav_side,
                    content_footer: content_footer,
                    content_main: content_main,
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
    html,
    body
    {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    #app
    {
        width: 100%;
        min-height: 100%;

        display: flex;

        /*主轴的方向*/
        flex-direction: column;

        /*如果一条轴线排不下，如何换行*/
        flex-wrap: nowrap;

        /*flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap*/
        flex-flow: column nowrap;

        /*项目在主轴上的对齐方式*/
        justify-content: space-between;

        /*定义项目在交叉轴上如何对齐*/
        align-items: stretch;

        /*定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。*/
        align-content: stretch;

        /*float: none;*/
        /*clear: none;*/
        /*vertical-align: inherit;*/
    }
    header
    {
        /*定义项目的排列顺序。数值越小，排列越靠前，默认为0。*/
        order: 0;

        /*定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。*/
        flex-grow: 0;

        /*项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。*/
        flex-shrink: 0;

        /*定义了在分配多余空间之前，项目占据的主轴空间*/
        flex-basis: auto;

        /*flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto*/
        flex: auto;

        /*属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性*/
        align-self: flex-start;
    }
    .body
    {
        flex-grow: 1;

        display: flex;

    }
    footer
    {
        flex-grow: 0;
    }
</style>