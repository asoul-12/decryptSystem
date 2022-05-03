import { d as defineComponent, c as computed, u as useSizeProps, r as renderFn, _ as _defineProperty, o as onMounted, a as _export_sfc, b as openBlock, e as createElementBlock, f as router, g as ref, M as MessagePlugin, h as resolveComponent, i as createBlock, w as withCtx, j as createVNode, n as normalizeStyle, k as createTextVNode, B as Button, C as Col, R as Row, l as Card, L as Layout, m as Content } from "./main-ef14918d.js";
import { c as cnchar, d as draw } from "./cnchar.draw.min-a1cbc4f2.js";
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$1 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8 2.5c-1.9 0-3.5 1.45-3.5 3.3h1c0-1.24 1.09-2.3 2.5-2.3s2.5 1.06 2.5 2.3c0 .88-.77 1.75-1.76 2.12-.72.28-1.24.95-1.24 1.76V11h1V9.68c0-.36.23-.68.6-.82 1.2-.46 2.4-1.6 2.4-3.06 0-1.85-1.6-3.3-3.5-3.3zM8 12a.75.75 0 100 1.5.75.75 0 000-1.5z",
      "fillOpacity": 0.9
    }
  }]
};
var help = defineComponent({
  name: "HelpIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-help", className.value]);
    var finalStyle = computed(() => _objectSpread$1(_objectSpread$1({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      }
    }));
    return () => renderFn(element$1, finalProps.value);
  }
});
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M11.55 7.74c.2.12.2.4 0 .52l-5.1 2.94a.3.3 0 01-.45-.26V5.06a.3.3 0 01.45-.26l5.1 2.94z",
      "fillOpacity": 0.9
    }
  }]
};
var play = defineComponent({
  name: "PlayIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-play", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      }
    }));
    return () => renderFn(element, finalProps.value);
  }
});
const _sfc_main$2 = defineComponent({
  name: "WelcomeCard",
  props: {
    wordDrawOptions: {
      type: Object,
      require: true
    }
  },
  setup(prop) {
    const { wordDrawOptions } = prop;
    const {
      content,
      width,
      type,
      strokeAnimationSpeed,
      delayBetweenStrokes
    } = wordDrawOptions;
    onMounted(() => {
      cnchar.use(draw);
      cnchar.draw(content, {
        el: "#drawAnimation",
        type: type ? cnchar.draw.TYPE.ANIMATION : void 0,
        style: {
          length: width
        },
        animation: {
          strokeAnimationSpeed,
          delayBetweenStrokes
        }
      });
    });
    return {};
  }
});
const _hoisted_1$1 = { id: "drawAnimation" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1);
}
var WorldDraw = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function redirectToHome() {
  const token = localStorage.getItem("token");
  if (token) {
    router.push("/home");
  } else {
    window.location.assign("http://localhost:8080/#/login");
  }
}
const _sfc_main$1 = defineComponent({
  name: "WelcomeCard",
  components: { HelpIcon: help, PlayIcon: play, WorldDraw },
  setup() {
    const cardOptions = {
      style: {
        width: "700px",
        marginTop: "100px"
      }
    };
    const wordDrawOptions = {
      content: "\u52A0\u5BC6",
      width: 322,
      type: "animation",
      strokeAnimationSpeed: 2,
      delayBetweenStrokes: 500
    };
    const msg = ref(null);
    const moreBtnClick = () => {
      if (!msg.value) {
        msg.value = MessagePlugin.info({
          content: "\u6CA1\u505A\u5462"
        });
      } else {
        MessagePlugin.close(msg.value);
        msg.value = null;
      }
    };
    return {
      cardOptions,
      moreBtnClick,
      wordDrawOptions,
      toHome: redirectToHome
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5F00\u59CB ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8BE6\u60C5 ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_world_draw = resolveComponent("world-draw");
  const _component_play_icon = resolveComponent("play-icon");
  const _component_t_button = Button;
  const _component_t_col = Col;
  const _component_help_icon = resolveComponent("help-icon");
  const _component_t_row = Row;
  const _component_t_card = Card;
  return openBlock(), createBlock(_component_t_row, null, {
    default: withCtx(() => [
      createVNode(_component_t_col, {
        span: 6,
        offset: 3
      }, {
        default: withCtx(() => [
          createVNode(_component_t_card, {
            style: normalizeStyle(_ctx.cardOptions.style),
            "header-bordered": "",
            "hover-shadow": "",
            shadow: ""
          }, {
            footer: withCtx(() => [
              createVNode(_component_t_row, null, {
                default: withCtx(() => [
                  createVNode(_component_t_col, { span: 6 }, {
                    default: withCtx(() => [
                      createVNode(_component_t_button, {
                        button: "",
                        variant: "text",
                        size: "large",
                        onClick: _ctx.toHome,
                        block: ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_play_icon)
                        ]),
                        default: withCtx(() => [
                          _hoisted_1
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_col, { span: 6 }, {
                    default: withCtx(() => [
                      createVNode(_component_t_button, {
                        button: "",
                        variant: "text",
                        size: "large",
                        onClick: _ctx.moreBtnClick,
                        block: ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_help_icon)
                        ]),
                        default: withCtx(() => [
                          _hoisted_2
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_world_draw, { "word-draw-options": _ctx.wordDrawOptions }, null, 8, ["word-draw-options"])
            ]),
            _: 1
          }, 8, ["style"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "Welcome",
  components: {
    WelcomeCard: __unplugin_components_0
  },
  setup() {
    return {};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_welcome_card = __unplugin_components_0;
  const _component_t_content = Content;
  const _component_t_layout = Layout;
  return openBlock(), createBlock(_component_t_layout, null, {
    default: withCtx(() => [
      createVNode(_component_t_content, { style: { "height": "100vh" } }, {
        default: withCtx(() => [
          createVNode(_component_welcome_card)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Welcome as default };
