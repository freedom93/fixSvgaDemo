<template>
  <div class="rose">
    <div id="demoCanvas"></div>
  </div>
</template>

<script>
export default {
  name: 'rose',
  mounted() {
    const player = new window.SVGA.Player('#demoCanvas');
    const parser = new window.SVGA.Parser('#demoCanvas');
    const svgUrl = `${location.origin}/assets/data/rose.svga`;
    parser.load(svgUrl, (videoItem) => {
      player.setVideoItem(videoItem);
      player.setText({
        text: 'Hello, Freedom!',
        size: '40px',
        color: '#E9446F',
        offset: { x: 0.0, y: 0.0 },
      }, '11');
      player.startAnimation();
    });
  },
};
</script>

<style lang="scss">
@import "~css/lib/mixin";
#demoCanvas{
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
