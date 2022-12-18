import { defineStore } from "pinia";

import tools from "@/components/Whiteboard/tools/tool/tools";

const state = () => ({
  tool: null,
  toolArgs: {
    size: 2,
    color: "#000000",
  },
  eraserArgs: {
    size: 2,
    color: "#133337",
  },
  shapeArgs: {
    size: 2,
    color: "#000000",
  },
});

const actions = {
  //ToolArgs
  setToolColor(toolColor) {
    this.toolArgs.color = toolColor;
    // commit("SET_TOOL_COLOR", toolColor);
  },
  setToolSize(toolSize) {
    this.toolArgs.size = toolSize;
    // commit("SET_TOOL_SIZE", toolSize);
  },
  //Eraser
  setEraserSize(eraserSize) {
    this.eraserArgs.size = eraserSize;
    // commit("SET_ERASER_SIZE", eraserSize);
  },
  setEraserColor(eraserColor) {
    this.shapeArgs.size = shapeSize;
    this.eraserArgs.color = eraserColor;
    // commit("SET_ERASER_COLOR", eraserColor);
  },
  //ShapeArgs
  setShapeSize(shapeSize) {
    this.shapeArgs.size = shapeSize;
    // commit("SET_SHAPE_SIZE", shapeSize);
  },
  setShapeColor(shapeColor) {
    this.shapeArgs.color = shapeColor;
    // commit("SET_SHAPE_COLOR", shapeColor);
  },
  //Tool
  setWhiteboardTool(tool) {
    console.log("Tool from setWhiteboardTool:", tool);
    this.tool = tool;

    tools["pencil"].activate();
    if (tools[tool]) {
      console.log("Trying to Activate:", tools[tool]);
      debugger;
      tools[tool].activate();
    }
    // commit("SET_WHITEBOARD_TOOL", tool);
  },
};

const getters = {
  // tool() {
  //   return this.tool;
  // },
  // toolArgs() {
  //   return this.toolArgs;
  // },
  // eraserArgs() {
  //   return this.eraserArgs;
  // },
  // shapeArgs() {
  //   return this.shapeArgs;
  // },
};

export const useWhiteboardStore = defineStore("Whiteboard", {
  state,
  getters,
  actions,
});
