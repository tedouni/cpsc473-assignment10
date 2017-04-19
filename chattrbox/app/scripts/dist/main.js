(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    // console.log('Hello ES6!');
    _wsClient2.default.init('ws://localhost:3001');
    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({
            message: 'pow!'
        });
        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVjtBQUNBLHVCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNBLHVCQUFPLG1CQUFQLENBQTJCLFlBQU07QUFDN0IsWUFBSSxVQUFVLElBQUksV0FBSixDQUFnQjtBQUMxQixxQkFBUztBQURpQixTQUFoQixDQUFkO0FBR0EsMkJBQU8sV0FBUCxDQUFtQixRQUFRLFNBQVIsRUFBbkI7QUFDSCxLQUxEO0FBTUEsdUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDcEMsZ0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSCxLQUZEO0FBR0gsQzs7SUFHQyxXO0FBQ0YsK0JBSUc7QUFBQSxZQUhVLENBR1YsUUFIQyxPQUdEO0FBQUEsNkJBRkMsSUFFRDtBQUFBLFlBRk8sQ0FFUCw2QkFGVyxRQUVYO0FBQUEsa0NBREMsU0FDRDtBQUFBLFlBRFksQ0FDWixrQ0FEaUIsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ2hCOztBQUFBOztBQUNDLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7b0NBRVc7QUFDUixtQkFBTztBQUNILHNCQUFNLEtBQUssSUFEUjtBQUVILHlCQUFTLEtBQUssT0FGWDtBQUdILDJCQUFXLEtBQUs7QUFIYixhQUFQO0FBS0g7Ozs7OztrQkFHVSxPOzs7OztBQ3RDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDZixhQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDSDs7QUFFRCxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzFDLFdBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ2xCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDSCxLQUhEO0FBSUg7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUM3QyxXQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDdEIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6QjtBQUNBLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLHdCQUFnQixJQUFoQjtBQUNILEtBSkQ7QUFLSDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDMUIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7O2tCQUVjO0FBQ1gsY0FEVztBQUVYLDRDQUZXO0FBR1gsa0RBSFc7QUFJWDtBQUpXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSGVsbG8gRVM2IScpO1xuICAgICAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICAgICAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3BvdyEnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBtZXNzYWdlOiBtLFxuICAgICAgICB1c2VyOiB1ID0gJ2JhdG1hbicsXG4gICAgICAgIHRpbWVzdGFtcDogdCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICB9KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgICAgIHRoaXMudXNlciA9IHU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTtcbiIsImxldCBzb2NrZXQ7XG5cbmZ1bmN0aW9uIGluaXQodXJsKSB7XG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0LFxuICAgIHJlZ2lzdGVyT3BlbkhhbmRsZXIsXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcbiAgICBzZW5kTWVzc2FnZVxufVxuIl19
