<template>
  <div id="app">
    <div id="demoCanvas"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import SVGA from 'svgaplayerweb';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // const player = new SVGA.Player('#demoCanvas');
    // const parser = new SVGA.Parser('#demoCanvas'); // Must Provide same selector eg:#demoCanvas IF support IE6+
    // const svgUrl = `${location.origin}/assets/media/rose.svga`;
    // parser.load(svgUrl, (videoItem) => {
    //     player.setVideoItem(videoItem);
    //     // player.setImage('//web2.yystatic.com/public/global/base/image/yybear2.jpg', '99');
    //     player.setText({
    //       text: 'Hello, Freedom!',
    //       size: '20px',
    //       color: '#000000',
    //       offset: {x: 0.0, y: -10.0}
    //     }, '_01hengfu');
    //     player.startAnimation();
    // });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#demoCanvas{
  width: 90%;
  height: 90%;
  background: rgba(255, 255, 255, 0.3);
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
