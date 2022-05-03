import { d as defineComponent, o as onMounted, a as _export_sfc, b as openBlock, e as createElementBlock } from "./main-ef14918d.js";
import { c as cnchar, d as draw } from "./cnchar.draw.min-a1cbc4f2.js";
const _sfc_main = defineComponent({
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
const _hoisted_1 = { id: "drawAnimation" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_0 as _ };
