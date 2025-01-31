"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanOCR = scanOCR;

var _reactNativeVisionCamera = require("react-native-vision-camera");

const plugin = _reactNativeVisionCamera.VisionCameraProxy.initFrameProcessorPlugin('scanOCR');

/**
 * Scans OCR.
 */
function scanOCR(frame) {
  'worklet';

  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin!');
  }

  return plugin.call(frame);
}
//# sourceMappingURL=index.js.map