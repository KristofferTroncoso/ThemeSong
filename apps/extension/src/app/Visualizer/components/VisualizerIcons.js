import { TbWaveSawTool } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
import { RiBubbleChartFill } from "react-icons/ri";
import { AiOutlineExperiment } from "react-icons/ai";
import { GiSpiderMask } from "react-icons/gi";
import { RxGlobe } from "react-icons/rx";
import { BsSnow2, BsFillCassetteFill } from "react-icons/bs";

function VisualizerIcons({ visualizerId, ...props }) {
  return (
    <span {...props}>
      {
        {
          "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d": <TbWaveSawTool />,
          "51dc50c8-eb06-4086-ad9c-a89758f63db6": <ImStatsBars />,
          "685d0ec7-5c52-4e48-a43d-11184a39f3da": <RiBubbleChartFill />,
          "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae": <AiOutlineExperiment />,
          "57e7f170-a53d-4207-87f0-67633df37959": <GiSpiderMask />,
          "2f34a5b3-6d29-42c8-bac0-a7356ee88151": <RxGlobe />,
          "86a81510-3e5d-4d1e-9318-3ea0750393a3": <BsSnow2 />,
          "f8cfcb9f-6639-4702-aa44-2261ba7a543b": <BsFillCassetteFill size={18} />,
        }[visualizerId]
      }
    </span>
  );
}

export default VisualizerIcons;
