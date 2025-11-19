import { useCanvas } from "@/context/context";
import { Crop, Expand, Eye, Maximize2, Palette, Sliders, Text } from "lucide-react";
import React from "react";
import CropContent from "./tools/crop";
import ResizeControls from "./tools/resize";
import AdjustControls from "./tools/adjust";
import BackgroundControls from "./tools/ai-background";
import TextControls from "./tools/text";
import AIExtenderControls from "./tools/ai-extend";
import AIEditor from "./tools/ai-edit";

const TOOL_CONFIGS = {
  crop: {
    title: "Crop",
    icon: Crop,
    description: "Crop and trim your image",
  },
  resize: {
    title: "Resize",
    icon: Expand,
    description: "Change project dimensions",
  },
  adjust: {
    title: "Adjust",
    icon: Sliders,
    description: "Brightness, contrast, and more (Manual saving required)",
  },
  background: {
    title: "Background",
    icon: Palette,
    description: "Remove or change background",
  },
  ai_extender: {
    title: "AI Image Extender",
    icon: Maximize2,
    description: "Extend image boundaries with AI",
  },
  text: {
    title: "Add Text",
    icon: Text,
    description: "Customize in Various Fonts",
  },
  ai_edit: {
    title: "AI Editing",
    icon: Eye,
    description: "Enhance image quality with AI",
  },
};

const EditorSidebar =({ project }) => {
    const { activeTool } = useCanvas();
    const toolConfig = TOOL_CONFIGS[activeTool];

    if (!toolConfig) {
        return null;
    }

    const Icon = toolConfig.icon;

    return (
        <div className="min-w-96 border-r flex flex-col">
            <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-white" />
                    <h2 className="text-lg font-semibold text-white">
                        {toolConfig.title}
                    </h2>
                </div>
                <p className="text-sm text-white mt-1">{toolConfig.description}</p>
            </div>

            <div className="flex-1 p-4 overflow-y-scroll">
                {renderToolConfig(activeTool, project)}
            </div>
        </div>
    );
};

function renderToolConfig(activeTool, project) {
    switch (activeTool) {
        case "crop":
            return <CropContent />;
        case "resize":
            return <ResizeControls project={project} />;
        case "adjust":
            return <AdjustControls />;
        case "background":
            return <BackgroundControls project={project} />
        case "text":
            return <TextControls />;
        case "ai_extender":
            return <AIExtenderControls project={project} />;
        case "ai_edit":
            return <AIEditor project={project} />;
        
        default:
            return <div className="text-white">Select a tool to start</div>;
    }
}

export default EditorSidebar;