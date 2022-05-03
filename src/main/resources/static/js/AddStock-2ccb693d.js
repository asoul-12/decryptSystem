import { a as _export_sfc, d as defineComponent, o as onMounted, M as MessagePlugin, K as onUnmounted, g as ref, t as reactive, b as openBlock, i as createBlock, w as withCtx, R as Row, j as createVNode, X as createBaseVNode, v as Icon, Y as Avatar, Z as Select, F as FormItem, I as Input, $ as Loading, s as Form, B as Button, C as Col, O as Divider, l as Card } from "./main-ef14918d.js";
import { C as Clipboard } from "./clipboard-57daccf8.js";
const methods = [
  { label: "a", value: "a" },
  { label: "b", value: "b" },
  { label: "c", value: "c" }
];
const _sfc_main = defineComponent({
  name: "AddStock",
  components: {},
  setup() {
    const btnCopy = new Clipboard(".copy-btn");
    onMounted(() => {
      btnCopy.on("success", () => {
        MessagePlugin.success("copy success");
      });
      btnCopy.on("error", () => {
        MessagePlugin.error("copy fail, try it again");
      });
    });
    onUnmounted(() => {
      btnCopy.destroy();
    });
    const loading = ref(false);
    const encryptedData = reactive({
      id: "",
      label: "",
      createTime: "",
      method: "",
      rawData: "",
      processedData: "xx"
    });
    const encryptedClickHandler = () => {
      loading.value = !loading.value;
    };
    const copyValue = ref("");
    const copyClickHandler = () => {
      if (encryptedData.processedData) {
        copyValue.value = encryptedData.processedData;
      } else {
        MessagePlugin.error("\u4F60\u8FD8\u6CA1\u6709\u52A0\u5BC6\u4EFB\u4F55\u6570\u636E");
      }
    };
    return {
      loading,
      encryptedData,
      methods,
      encryptedClickHandler,
      copyValue,
      copyClickHandler
    };
  }
});
const _hoisted_1 = { style: { "width": "25px", "display": "flex", "justify-content": "center" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_t_icon = Icon;
  const _component_t_avatar = Avatar;
  const _component_t_select = Select;
  const _component_t_form_item = FormItem;
  const _component_t_input = Input;
  const _component_t_loading = Loading;
  const _component_t_form = Form;
  const _component_t_button = Button;
  const _component_t_col = Col;
  const _component_t_divider = Divider;
  const _component_t_row = Row;
  const _component_t_card = Card;
  return openBlock(), createBlock(_component_t_row, null, {
    default: withCtx(() => [
      createVNode(_component_t_col, {
        span: 6,
        offset: 3,
        style: { "margin-top": "30px" }
      }, {
        default: withCtx(() => [
          createVNode(_component_t_card, { bordered: "" }, {
            avatar: withCtx(() => [
              createVNode(_component_t_avatar, { size: "56px" }, {
                icon: withCtx(() => [
                  createVNode(_component_t_icon, { name: "lock-on" })
                ]),
                _: 1
              })
            ]),
            content: withCtx(() => [
              createVNode(_component_t_form, {
                data: _ctx.encryptedData,
                "label-width": 80,
                "status-icon": false
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_form_item, {
                    label: "\u52A0\u5BC6\u65B9\u5F0F",
                    "status-icon": false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_select, {
                        modelValue: _ctx.encryptedData.method,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.encryptedData.method = $event),
                        options: _ctx.methods,
                        placeholder: "\u9009\u62E9\u52A0\u5BC6\u65B9\u5F0F"
                      }, null, 8, ["modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_form_item, {
                    label: "\u6E90\u6570\u636E",
                    "status-icon": false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_t_input, {
                        modelValue: _ctx.encryptedData.rawData,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.encryptedData.rawData = $event),
                        placeholder: "\u8F93\u5165\u9700\u8981\u52A0\u5BC6\u7684\u6570\u636E"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_form_item, { label: "\u52A0\u5BC6\u6570\u636E" }, {
                    statusIcon: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        createVNode(_component_t_loading, {
                          loading: _ctx.loading,
                          size: "small"
                        }, null, 8, ["loading"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_t_input, {
                        modelValue: _ctx.encryptedData.processedData,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.encryptedData.processedData = $event),
                        placeholder: "\u70B9\u51FB\u52A0\u5BC6",
                        disabled: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])
            ]),
            footer: withCtx(() => [
              createVNode(_component_t_row, {
                align: "middle",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_col, { flex: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_t_button, {
                        size: "large",
                        variant: "text",
                        onClick: _ctx.encryptedClickHandler,
                        block: ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_icon, { name: "app" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_col, { flex: "none" }, {
                    default: withCtx(() => [
                      createVNode(_component_t_divider, { theme: "vertical" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_col, { flex: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_t_button, {
                        class: "copy-btn",
                        "data-clipboard-text": _ctx.copyValue,
                        size: "large",
                        variant: "text",
                        onClick: _ctx.copyClickHandler,
                        block: ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_t_icon, { name: "file-copy" })
                        ]),
                        _: 1
                      }, 8, ["data-clipboard-text", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var AddStock = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AddStock as default };
