import React from "react";
import "@google/model-viewer/dist/model-viewer";
import {
  MainContainer,
  ModelContainer,
  ModelPoster,
  ModelButton,
  ByteModelWrapper,
} from "../styles/ARviewer_Markerless_V3.styled";
import { useParams } from "react-router-dom";
import ByteSymbolViewer from "../modelViewers/8ByteSymbolViewer";

const ARviewer_Markerless_V3 = () => {
  const { projectname, id } = useParams();
  return (
    <MainContainer>
      <ModelContainer>
        <model-viewer
          src={`${process.env.PUBLIC_URL}/ar_files/${projectname}/glb_files/${projectname}_${id}.glb`}
          ar
          ar-modes="webxr quick-look"
          disable-zoom
          camera-controls
          autoplay
          environment-image="neutral"
          shadow-intensity="1"
          reveal="manual"
          style={{ width: "100%", height: "100%" }}
          disable_occlusion={true}
          // xr-environment
          ar-placement={projectname === "Ringers" ? "wall" : "floor"}
          bounds={projectname === "Ringers" ? "tight" : "legacy"}
        >
          <ModelButton slot="ar-button">Initiate 8Byte AR ?</ModelButton>
          <ModelPoster slot="poster">
            <ByteModelWrapper>
              <ByteSymbolViewer></ByteSymbolViewer>
            </ByteModelWrapper>
          </ModelPoster>
        </model-viewer>
      </ModelContainer>
    </MainContainer>
  );
};

export default ARviewer_Markerless_V3;
