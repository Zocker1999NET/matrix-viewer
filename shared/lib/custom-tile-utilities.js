'use strict';

// Extending the Hydrogen utilities to add our custom tiles

const { tileClassForEntry, viewClassForTile } = require('hydrogen-view-sdk');

const JumpToPreviousActivitySummaryTileViewModel = require('matrix-viewer-shared/viewmodels/JumpToPreviousActivitySummaryTileViewModel');
const JumpToPreviousActivitySummaryTileView = require('matrix-viewer-shared/views/JumpToPreviousActivitySummaryTileView');
const JumpToNextActivitySummaryTileViewModel = require('matrix-viewer-shared/viewmodels/JumpToNextActivitySummaryTileViewModel');
const JumpToNextActivitySummaryTileView = require('matrix-viewer-shared/views/JumpToNextActivitySummaryTileView');

function customTileClassForEntry(entry) {
  switch (entry.eventType) {
    case 'org.matrix.viewer.jump_to_previous_activity_summary':
      return JumpToPreviousActivitySummaryTileViewModel;
    case 'org.matrix.viewer.jump_to_next_activity_summary':
      return JumpToNextActivitySummaryTileViewModel;
    default:
      return tileClassForEntry(entry);
  }
}

function customViewClassForTile(vm) {
  switch (vm.shape) {
    case 'org.matrix.viewer.jump_to_previous_activity_summary:shape':
      return JumpToPreviousActivitySummaryTileView;
    case 'org.matrix.viewer.jump_to_next_activity_summary:shape':
      return JumpToNextActivitySummaryTileView;
    default:
      return viewClassForTile(vm);
  }
}

module.exports = {
  customTileClassForEntry,
  customViewClassForTile,
};
