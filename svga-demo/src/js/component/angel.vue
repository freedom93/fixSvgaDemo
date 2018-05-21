<template>
  <div class="angel">
    <div id="angelCanvas"></div>
  </div>
</template>

<script>
const fixUrl = '/fixSvgaDemo/svga-demo/output';
export default {
  name: 'angel',
  mounted() {
    const player = new window.SVGA.Player('#angelCanvas');
    const parser = new window.SVGA.Parser('#angelCanvas');
    const svgUrl = `${location.origin}${__PROD__ ? fixUrl : ''}/assets/data/angel.svga`;
    console.log(svgUrl);
    parser.load(svgUrl, (videoItem) => {
      player.setVideoItem(videoItem);
      player.startAnimation();
    });
  },
};
</script>

<style lang="scss">
@import "~css/lib/mixin";
#angelCanvas{
  width: 25%;
  height: 50%;
  margin: auto;
}
</style>
