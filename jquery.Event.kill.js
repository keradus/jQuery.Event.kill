/*
 * jQuery Event.kill plugin
 * Simple plugin to kill event - both stop propagation and prevent default action.
 *
 * @author Dariusz Rumiński
 * @license MIT
 * @link https://github.com/keradus/jQuery.Event.kill
 * @version 1.0.0
 */

/*globals jQuery */

(function ($) {
    "use strict";

    $.Event.prototype.kill = function () {
        this.stopPropagation();
        this.preventDefault();
    };
}(jQuery));
