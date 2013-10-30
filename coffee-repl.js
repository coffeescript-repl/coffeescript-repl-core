// Generated by CoffeeScript 1.6.3
(function() {
  var REPL, script;

  if (typeof CoffeeScript === "undefined" || CoffeeScript === null) {
    script = document.createElement("script");
    script.src = "http://coffeescript.org/extras/coffee-script.js";
    script.onload = function() {
      return (new REPL).loop();
    };
    document.body.appendChild(script);
  } else {
    setTimeout(function() {
      return (new REPL).loop();
    });
  }

  REPL = (function() {
    var dump, space, type;

    function REPL() {
      window.eye_repl = this;
      this.done = false;
      this.history = {
        inputs: [],
        outputs: [],
        add: function(input, output) {
          this.inputs.unshift(input);
          this.outputs.unshift(output);
          window.$0 = this.outputs[0];
          window.$1 = this.outputs[1];
          window.$2 = this.outputs[2];
          window.$3 = this.outputs[3];
          window.$4 = this.outputs[4];
          if (this.inputs.length > 5) {
            return this.inputs.length = this.outputs.length = 5;
          }
        }
      };
    }

    REPL.prototype.loop = function() {
      var input, output,
        _this = this;
      input = this.read();
      output = this["eval"](input);
      console.log(output);
      this.history.add(input, output);
      if (!this.done) {
        return setTimeout(function() {
          return _this.loop();
        });
      }
    };

    REPL.prototype.read = function() {
      return prompt(this.print());
    };

    REPL.prototype["eval"] = function(code) {
      var err;
      if (/^exit/.test(code)) {
        this.done = true;
        return void 0;
      }
      try {
        return eval(CoffeeScript.compile(code, {
          bare: true
        }));
      } catch (_error) {
        err = _error;
        return "" + err;
      }
    };

    REPL.prototype.print = function(input, output) {
      var i, v, _i, _len, _ref, _results;
      _ref = this.history.inputs;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        v = _ref[i];
        _results.push("coffee> " + this.history.inputs[i] + "\n" + (dump(this.history.outputs[i])));
      }
      return _results;
    };

    dump = function(o, i) {
      var k, v;
      if (i == null) {
        i = 0;
      }
      switch (type(o)) {
        case "null":
        case "number":
        case "boolean":
        case "undefined":
          return "" + o;
        case "function":
          return ("" + o).split("{")[0] + "{ [native code] }";
        case "date":
        case "string":
          return JSON.stringify(o);
        case "array":
          if (i <= 3) {
            return "[" + ((function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = o.length; _i < _len; _i++) {
                v = o[_i];
                _results.push(dump(v));
              }
              return _results;
            })()).join(", ") + "]";
          }
          break;
        default:
          if (i <= 2) {
            if (Object.keys(o).length === 0) {
              return "{}";
            } else {
              return "{\n" + ((function() {
                var _results;
                _results = [];
                for (k in o) {
                  v = o[k];
                  _results.push("" + (space(i + 1)) + k + ": " + (dump(v, i + 1)));
                }
                return _results;
              })()).join(",\n") + ("\n" + (space(i)) + "}");
            }
          } else {
            return Object.prototype.toString.apply(o);
          }
      }
    };

    space = function(i) {
      var _i, _results;
      return (function() {
        _results = [];
        for (var _i = 0; 0 <= i ? _i <= i : _i >= i; 0 <= i ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        return "";
      }).join("  ");
    };

    type = function(o) {
      if (o === null) {
        return "null";
      } else if (o === void 0) {
        return "undefined";
      } else if (o.nodeType) {
        return "node";
      } else if (Array.isArray(o)) {
        return "array";
      } else if (typeof o !== "object") {
        return typeof o;
      } else if (Object.prototype.toString.apply(o) === "[object Function]") {
        return "function";
      } else if (Object.prototype.toString.apply(o) === "[object Object]") {
        return "object";
      } else {
        return "";
      }
    };

    return REPL;

  })();

}).call(this);

/*
//@ sourceMappingURL=coffee-repl.map
*/
