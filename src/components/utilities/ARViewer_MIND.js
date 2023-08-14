import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

const ARViewerPage = () => {
  const sceneRef = useRef(null);
  const { projectname, id } = useParams();

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  // #### Production CDN: ####
  // var mind_file_loc = `imageTargetSrc:https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${id["id"]}/Toadz_${id["id"]}.mind;`;
  // var png_file_loc = `https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${id["id"]}/Toadz_AR_${id["id"]}.png`;
  // var glb_file_loc = `https://cdn.jsdelivr.net/gh/0xDeimos/georings_arlib_assets@main/Toadz/Toadz_${id["id"]}/Toadz_${id["id"]}.glb`;
  var mind_file_loc = `imageTargetSrc:${process.env.PUBLIC_URL}/ar_files/${projectname}/mind_files/${projectname}_${id}.mind;`;
  var png_file_loc = `${process.env.PUBLIC_URL}/ar_files/${projectname}/qr_codes/marker/${projectname}_${id}.png`;
  var glb_file_loc = `${process.env.PUBLIC_URL}/ar_files/${projectname}/glb_files/${projectname}_${id}.glb`;

  return (
    <a-scene
      ref={sceneRef}
      loading-screen="enabled:false"
      gltf-model="dracoDecoderPath:/draco/143/"
      mindar-image={mind_file_loc}
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      sourceWidth="1280"
      sourceHeight="960"
      displayWidth="1280"
      displayHeight="960"
    >
      <a-assets>
        <img id="card" src={png_file_loc} alt="" crossOrigin="anonymous" />
        <a-asset-item id="avatarModel" src={glb_file_loc}></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity
        mindar-image-target="targetIndex: 0"
        look-controls="enabled: true"
      >
        <a-plane
          src="#card"
          position="0 0 0"
          height="1"
          width="1"
          rotation="0 0 0"
          opacity="0"
        ></a-plane>
        <a-gltf-model
          rotation="0 0 0 "
          position="0 -0.5 0"
          scale="4 4 4"
          src="#avatarModel"
          // animation="property: position; to: 0 0.2 0; dur: 4000; easing: easeInOutQuad; loop: true; dir: alternate"
          // animation="property: rotation; to: 0 360 0; dur: 20000;easing: linear; loop: true;"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default ARViewerPage;
