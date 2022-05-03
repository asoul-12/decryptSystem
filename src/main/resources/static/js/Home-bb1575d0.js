import { d as defineComponent, g as ref, c as computed, a as _export_sfc, M as MessagePlugin, b as openBlock, i as createBlock, w as withCtx, j as createVNode, e as createElementBlock, y as renderList, k as createTextVNode, z as toDisplayString, A as Fragment, v as Icon, D as MenuItem, E as Menu, t as reactive, C as Col, R as Row, H as HeadMenu, h as resolveComponent, L as Layout, G as Header, J as Aside, m as Content } from "./main-ef14918d.js";
import { _ as __unplugin_components_0$1 } from "./WordDraw-7d000180.js";
import "./cnchar.draw.min-a1cbc4f2.js";
const menuItem = [
  { value: "stock", label: "\u6211\u7684\u5E93\u5B58", icon: "folder-open", to: "/home/stock" },
  { value: "addStock", label: "\u6DFB\u52A0", icon: "file-add", to: "/home/add-stock" },
  { value: "test", label: "\u6D4B\u8BD5", icon: "folder-open", to: "/home/test" }
];
const menuSiderOption = {
  theme: "default",
  defaultValue: "stock",
  height: "100vh",
  logo: {
    width: "136",
    class: "t-menu__logo--center"
  },
  items: menuItem
};
const _sfc_main$2 = defineComponent({
  name: "SiderMenu",
  setup() {
    const collapsed = ref(true);
    const iconName = computed(() => collapsed.value ? "chevron-right" : "chevron-left");
    const changeCollapsed = () => {
      collapsed.value = !collapsed.value;
      MessagePlugin.info("\u6CA1\u505A\u5462");
    };
    return {
      collapsed,
      iconName,
      changeCollapsed,
      menuSiderOption
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_t_icon = Icon;
  const _component_t_menu_item = MenuItem;
  const _component_t_menu = Menu;
  return openBlock(), createBlock(_component_t_menu, {
    theme: _ctx.menuSiderOption.theme,
    "default-value": _ctx.menuSiderOption.defaultValue
  }, {
    operations: withCtx(() => [
      createVNode(_component_t_icon, {
        class: "t-menu__operations-icon",
        name: _ctx.iconName,
        onClick: _ctx.changeCollapsed
      }, null, 8, ["name", "onClick"])
    ]),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuSiderOption.items, (item, idx) => {
        return openBlock(), createBlock(_component_t_menu_item, {
          key: idx,
          value: item.value,
          to: item.to
        }, {
          icon: withCtx(() => [
            createVNode(_component_t_icon, {
              name: item.icon
            }, null, 8, ["name"])
          ]),
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.label) + " ", 1)
          ]),
          _: 2
        }, 1032, ["value", "to"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["theme", "default-value"]);
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const operationOptions = [
  { icon: "mail" },
  { icon: "user" },
  { icon: "ellipsis" }
];
const _sfc_main$1 = defineComponent({
  name: "Header",
  components: { WordDraw: __unplugin_components_0$1 },
  setup() {
    const wordDrawOptions = reactive({
      content: "\u52A0\u5BC6",
      width: 55,
      type: null,
      strokeAnimationSpeed: 4,
      delayBetweenStrokes: 200
    });
    return {
      wordDrawOptions,
      operationOptions
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_word_draw = __unplugin_components_0$1;
  const _component_t_col = Col;
  const _component_t_row = Row;
  const _component_t_icon = Icon;
  const _component_t_head_menu = HeadMenu;
  return openBlock(), createBlock(_component_t_head_menu, null, {
    logo: withCtx(() => [
      createVNode(_component_t_row, null, {
        default: withCtx(() => [
          createVNode(_component_t_col, {
            style: { "margin-top": "25px" },
            offset: "4"
          }, {
            default: withCtx(() => [
              createVNode(_component_word_draw, { "word-draw-options": _ctx.wordDrawOptions }, null, 8, ["word-draw-options"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    operations: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.operationOptions, (item, idx) => {
        return openBlock(), createElementBlock("a", {
          key: idx,
          href: "javascript:;"
        }, [
          createVNode(_component_t_icon, {
            class: "t-menu__operations-icon",
            name: item.icon
          }, null, 8, ["name"])
        ]);
      }), 128))
    ]),
    _: 1
  });
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var Home_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "Home",
  components: { HeaderMenu: __unplugin_components_0, SiderMenu: __unplugin_components_2 },
  setup() {
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_header_menu = __unplugin_components_0;
  const _component_t_header = Header;
  const _component_sider_menu = __unplugin_components_2;
  const _component_t_aside = Aside;
  const _component_router_view = resolveComponent("router-view");
  const _component_t_content = Content;
  const _component_t_layout = Layout;
  return openBlock(), createBlock(_component_t_layout, null, {
    default: withCtx(() => [
      createVNode(_component_t_header, { id: "MainHeader" }, {
        default: withCtx(() => [
          createVNode(_component_header_menu)
        ]),
        _: 1
      }),
      createVNode(_component_t_layout, null, {
        default: withCtx(() => [
          createVNode(_component_t_aside, { id: "MainSider" }, {
            default: withCtx(() => [
              createVNode(_component_sider_menu)
            ]),
            _: 1
          }),
          createVNode(_component_t_content, { id: "MainContent" }, {
            default: withCtx(() => [
              createVNode(_component_router_view)
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
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Home as default };
