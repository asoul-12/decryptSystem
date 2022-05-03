import { d as defineComponent, o as onMounted, M as MessagePlugin, K as onUnmounted, t as reactive, g as ref, a as _export_sfc, b as openBlock, e as createElementBlock, j as createVNode, w as withCtx, N as normalizeClass, k as createTextVNode, z as toDisplayString, A as Fragment, v as Icon, B as Button, C as Col, O as Divider, R as Row, l as Card, P as ListItemMeta, Q as ListItem, S as List, U as Dialog, V as fetchData, y as renderList, i as createBlock, W as Skeleton } from "./main-ef14918d.js";
import { C as Clipboard } from "./clipboard-57daccf8.js";
const _sfc_main$1 = defineComponent({
  name: "DataCard",
  props: {
    encryptedDataItem: {
      type: Object,
      required: true
    }
  },
  setup(prop) {
    const { encryptedDataItem } = prop;
    const btnCopyClass = `copy-btn-${encryptedDataItem.id}`;
    const btnCopy = new Clipboard(`.${btnCopyClass}`);
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
    const cardData = reactive({
      size: "small",
      theme: "normal",
      bordered: true,
      hoverShadow: true,
      title: encryptedDataItem.label,
      subtitle: encryptedDataItem.method,
      description: encryptedDataItem.createTime,
      rawData: encryptedDataItem.rawData,
      processedData: encryptedDataItem.processedData
    });
    const isBrosweDialogShow = ref(false);
    const brosweHandler = () => {
      isBrosweDialogShow.value = !isBrosweDialogShow.value;
    };
    const copyValue = ref("");
    const copyHandler = () => {
      copyValue.value = encryptedDataItem.processedData;
    };
    const isDeleteDialogShow = ref(false);
    const deleteHandler = () => {
      isDeleteDialogShow.value = !isDeleteDialogShow.value;
    };
    return {
      cardData,
      isBrosweDialogShow,
      brosweHandler,
      btnCopyClass,
      copyValue,
      copyHandler,
      isDeleteDialogShow,
      deleteHandler
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(" \u67E5\u770B ");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" \u590D\u5236 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5220\u9664 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u771F\u7684\u8981\u5220\u9664\u561B\uFF1F\u4F60\u4F1A\u4E22\u5931\u4ED6\u5F88\u4E45\u5F88\u4E45\uFF08\u771F\u7684\u5F88\u4E45\uFF09 ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_t_icon = Icon;
  const _component_t_button = Button;
  const _component_t_col = Col;
  const _component_t_divider = Divider;
  const _component_t_row = Row;
  const _component_t_card = Card;
  const _component_t_list_item_meta = ListItemMeta;
  const _component_t_list_item = ListItem;
  const _component_t_list = List;
  const _component_t_dialog = Dialog;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_t_card, {
      size: _ctx.cardData.size,
      theme: _ctx.cardData.theme,
      bordered: _ctx.cardData.bordered,
      "hover-shadow": _ctx.cardData.hoverShadow,
      title: _ctx.cardData.title,
      subtitle: _ctx.cardData.subtitle,
      description: _ctx.cardData.description
    }, {
      footer: withCtx(() => [
        createVNode(_component_t_row, {
          align: "middle",
          justify: "center"
        }, {
          default: withCtx(() => [
            createVNode(_component_t_col, { flex: "auto" }, {
              default: withCtx(() => [
                createVNode(_component_t_button, {
                  block: "",
                  variant: "text",
                  shape: "square",
                  onClick: _ctx.brosweHandler
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "browse" })
                  ]),
                  default: withCtx(() => [
                    _hoisted_1$1
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
                  class: normalizeClass(_ctx.btnCopyClass),
                  "data-clipboard-text": _ctx.copyValue,
                  block: "",
                  variant: "text",
                  shape: "square",
                  onClick: _ctx.copyHandler
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "queue" })
                  ]),
                  default: withCtx(() => [
                    _hoisted_2$1
                  ]),
                  _: 1
                }, 8, ["class", "data-clipboard-text", "onClick"])
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
                  block: "",
                  variant: "text",
                  shape: "square",
                  onClick: _ctx.deleteHandler
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "delete" })
                  ]),
                  default: withCtx(() => [
                    _hoisted_3
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
      _: 1
    }, 8, ["size", "theme", "bordered", "hover-shadow", "title", "subtitle", "description"]),
    createVNode(_component_t_dialog, {
      header: "\u8BE6\u60C5",
      visible: _ctx.isBrosweDialogShow,
      "on-cancel": _ctx.brosweHandler,
      "on-confirm": _ctx.brosweHandler,
      "on-close": _ctx.brosweHandler
    }, {
      default: withCtx(() => [
        createVNode(_component_t_list, { split: true }, {
          default: withCtx(() => [
            createVNode(_component_t_list_item, null, {
              default: withCtx(() => [
                createVNode(_component_t_list_item_meta, { title: "\u539F\u6570\u636E" }),
                createTextVNode(" " + toDisplayString(_ctx.encryptedDataItem.rawData), 1)
              ]),
              _: 1
            }),
            createVNode(_component_t_list_item, null, {
              default: withCtx(() => [
                createVNode(_component_t_list_item_meta, { title: "\u52A0\u5BC6\u6570\u636E" }),
                createTextVNode(" " + toDisplayString(_ctx.encryptedDataItem.processedData), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["visible", "on-cancel", "on-confirm", "on-close"]),
    createVNode(_component_t_dialog, {
      header: "\u4F60\u786E\u5B9A??",
      visible: _ctx.isDeleteDialogShow,
      "on-cancel": _ctx.deleteHandler,
      "on-confirm": _ctx.deleteHandler,
      "on-close": _ctx.deleteHandler
    }, {
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }, 8, ["visible", "on-cancel", "on-confirm", "on-close"])
  ], 64);
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var Stock_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "Stock",
  components: { DataCard: __unplugin_components_3 },
  setup() {
    const loading = ref(true);
    const encryptedData = ref([]);
    fetchData(2).then((data) => {
      encryptedData.value = data;
      loading.value = false;
    });
    const scrollHandler = (e) => {
      console.log(e);
    };
    return {
      loading,
      encryptedData,
      scrollHandler
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_t_skeleton = Skeleton;
  const _component_t_col = Col;
  const _component_t_row = Row;
  const _component_data_card = __unplugin_components_3;
  return _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(Array(3), (item, idx) => {
      return openBlock(), createBlock(_component_t_row, {
        key: idx,
        class: "data-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_t_col, {
            span: 8,
            offset: 2
          }, {
            default: withCtx(() => [
              createVNode(_component_t_skeleton, {
                loading: _ctx.loading,
                theme: "tab"
              }, null, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 2
      }, 1024);
    }), 128))
  ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.encryptedData, (item) => {
      return openBlock(), createBlock(_component_t_row, {
        key: item.id,
        class: "data-card"
      }, {
        default: withCtx(() => [
          createVNode(_component_t_col, {
            span: 8,
            offset: 2
          }, {
            default: withCtx(() => [
              createVNode(_component_data_card, { "encrypted-data-item": item }, null, 8, ["encrypted-data-item"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024);
    }), 128))
  ]));
}
var Stock = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Stock as default };
