import Ember from 'ember';
import Droppable from 'ember-drag-drop/mixins/droppable';

export default Ember.Component.extend(Droppable, {
  classNames: ["draggable-object-target"],

  handlePayload: function(payload, event) {
    var obj = this.get('coordinator').getObject(payload,{target: this});
    this.sendAction('action',obj,{target: this, event: event});
  },

  handleDrop: function(event) {
    var dataTransfer = event.dataTransfer;
    var payload = dataTransfer.getData("Text");
    this.handlePayload(payload, event);
  },

  acceptDrop: function(event) {
    this.handleDrop(event);
  },

  actions: {
    acceptForDrop: function() {
      var hashId = this.get('coordinator.clickedId');
      this.handlePayload(hashId);
    }
  }
});
