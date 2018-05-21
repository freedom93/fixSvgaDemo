<template>
  <div class="rose">
    <div id="roseCanvas"></div>
  </div>
</template>

<script>
const fixUrl = '/fixSvgaDemo/svga-demo/output';
export default {
  name: 'rose',
  mounted() {
    const player = new window.SVGA.Player('#roseCanvas');
    const parser = new window.SVGA.Parser('#roseCanvas');
    const svgUrl = `${location.origin}${__PROD__ ? fixUrl : ''}/assets/data/rose.svga`;
    console.log(svgUrl);
    parser.load(svgUrl, (videoItem) => {
      player.setVideoItem(videoItem);
      player.setText({
        text: 'Hello, Angel!',
        size: '28px',
        color: '#F44C7D',
        offset: { x: 0.0, y: 30.0 },
      }, '11');
      player.startAnimation();
    });
  },
};
</script>

<style lang="scss">
@import "~css/lib/mixin";
#roseCanvas{
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
