import React from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import {
  MainContainer,
  ContextContainer,
  ModelContainer,
  TextContainer,
} from "../styles/ARviewer_Markerless.styled";
import ByteSymbolViewer from "../modelViewers/8ByteSymbolViewer";
import GlitchText from "react-glitch-effect/core/GlitchText";
import { osName } from "react-device-detect";

const ARviewer_Markerless_V2 = () => {
  const { projectname, id } = useParams();

  async function activateXR() {
    // Add a canvas element and initialize a WebGL context that is compatible with WebXR.
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const gl = canvas.getContext("webgl", { xrCompatible: true });

    // To be continued in upcoming steps.
    const scene = new THREE.Scene();

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    // directionalLight.position.set(10, 15, 10);
    // scene.add(directionalLight);
    const light = new THREE.AmbientLight(0xffffff, 1.5);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.15);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.15);
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.15);
    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.15);
    const pointLight1 = new THREE.PointLight(0xffffff, 1);

    directionalLight1.position.set(10, 15, 10);
    directionalLight3.position.set(10, 15, -10);
    directionalLight2.position.set(-10, 15, 10);
    directionalLight4.position.set(-10, 15, -10);

    pointLight1.position.set(0, 8, 0);

    scene.add(light);
    scene.add(directionalLight1);
    scene.add(directionalLight2);
    scene.add(directionalLight3);
    scene.add(directionalLight4);
    scene.add(pointLight1);

    // Set up the WebGLRenderer, which handles rendering to the session's base layer.
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      preserveDrawingBuffer: true,
      canvas: canvas,
      context: gl,
    });
    renderer.autoClear = false;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // The API directly updates the camera matrices.
    // Disable matrix auto updates so three.js doesn't attempt
    // to handle the matrices independently.
    const camera = new THREE.PerspectiveCamera();
    camera.matrixAutoUpdate = false;

    // Initialize a WebXR session using "immersive-ar".
    const session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["hit-test"],
    });
    const { XRWebGLLayer } = window;
    session.updateRenderState({
      baseLayer: new XRWebGLLayer(session, gl),
    });

    // A 'local' reference space has a native origin that is located
    // near the viewer's position at the time the session was created.
    const referenceSpace = await session.requestReferenceSpace("local");
    // Create another XRReferenceSpace that has the viewer as the origin.
    const viewerSpace = await session.requestReferenceSpace("viewer");
    // Perform hit testing using the viewer as origin.
    const hitTestSource = await session.requestHitTestSource({
      space: viewerSpace,
    });

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${process.env.PUBLIC_URL}/draco/143/`);
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    let reticle;
    // loader.load("https://immersive-web.github.io/webxr-samples/media/gltf/reticle/reticle.gltf",
    loader.load(
      `${process.env.PUBLIC_URL}/models/8byte_reticle_c1.glb`,
      function (gltf) {
        reticle = gltf.scene;
        reticle.traverse(function (node) {
          if (node.material) {
            node.material.opacity = 0.5;
            node.material.transparent = true;
          }
        });
        reticle.visible = false;
        scene.add(reticle);
      }
    );

    let flower;
    // loader.load("https://immersive-web.github.io/webxr-samples/media/gltf/sunflower/sunflower.gltf",
    // loader.load(`${process.env.PUBLIC_URL}/ar_files/Toadz/glb_files/285.gltf`,
    loader.load(
      `${process.env.PUBLIC_URL}/ar_files/${projectname}/glb_files/${projectname}_${id}.glb`,
      function (gltf) {
        console.log(loader);
        flower = gltf.scene;
        // flower.scale.x = 0.1;
        // flower.scale.y = 0.1;
        // flower.scale.z = 0.1;
        // flower.updateMatrix();
      }
    );

    session.addEventListener("select", (event) => {
      if (flower) {
        const clone = flower.clone();
        clone.position.copy(reticle.position);
        scene.add(clone);
      }
    });

    // Create a render loop that allows us to draw on the AR view.
    const onXRFrame = (time, frame) => {
      // Queue up the next draw request.
      session.requestAnimationFrame(onXRFrame);

      // Bind the graphics framebuffer to the baseLayer's framebuffer
      gl.bindFramebuffer(
        gl.FRAMEBUFFER,
        session.renderState.baseLayer.framebuffer
      );

      // Retrieve the pose of the device.
      // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
      const pose = frame.getViewerPose(referenceSpace);
      if (pose) {
        // In mobile AR, we only have one view.
        const view = pose.views[0];

        const viewport = session.renderState.baseLayer.getViewport(view);
        renderer.setSize(viewport.width, viewport.height);

        // Use the view's transform matrix and projection matrix to configure the THREE.camera.
        camera.matrix.fromArray(view.transform.matrix);
        camera.projectionMatrix.fromArray(view.projectionMatrix);
        camera.updateMatrixWorld(true);

        const hitTestResults = frame.getHitTestResults(hitTestSource);
        if (hitTestResults.length > 0 && reticle) {
          const hitPose = hitTestResults[0].getPose(referenceSpace);
          reticle.visible = true;
          reticle.position.set(
            hitPose.transform.position.x,
            hitPose.transform.position.y,
            hitPose.transform.position.z
          );
          reticle.updateMatrixWorld(true);
        }

        // Render the scene with THREE.WebGLRenderer.
        renderer.render(scene, camera);
      }
    };
    session.requestAnimationFrame(onXRFrame);
  }

  const isApple = osName === "iOS" ? true : false;

  return (
    <MainContainer>
      <ContextContainer>
        {/* <button onClick={activateXR}>Start Hello WebXR</button> */}
        <ModelContainer onClick={activateXR}>
          <TextContainer>
            <GlitchText color1={"#00fffb"} color2="#fb00ff">
              <h1> Enter ∇ </h1>
            </GlitchText>
          </TextContainer>
          <ByteSymbolViewer />
        </ModelContainer>
      </ContextContainer>
      {isApple && (
        <TextContainer style={{ marginTop: "2rem", maxWidth: "90%" }}>
          <p>
            If you're on iOS, you will need to install{" "}
            <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056">
              Mozilla's WebXR Viewer
            </a>{" "}
            to enable this AR experience.
          </p>
        </TextContainer>
      )}
    </MainContainer>
  );
};

export default ARviewer_Markerless_V2;
