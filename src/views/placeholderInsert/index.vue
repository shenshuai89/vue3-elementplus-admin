<template>
  <div class="placeholder-container">
    <el-form ref="form" :model="form">
      <el-form-item prop="form.content">
        占位符插入
        <div
          v-if="!showCode"
          :contenteditable="true"
          class="el-textarea__inner el-textarea placeholderTextarea"
          v-html="textcontent"
          @blur="getblur($event)"
          @input="handlePlaceholderInput($event)"
        ></div>
        <div
          v-else
          :contenteditable="true"
          class="el-textarea__inner el-textarea placeholderTextarea"
          v-text="textcontent"
          @blur="getblur($event)"
          @input="handlePlaceholderInput($event)"
        ></div>
      </el-form-item>
      <div class="list-show">
        <p
          v-for="li in list"
          :key="li.value"
          class="insert-item"
          @click="addPlaceholder(li.value)"
        >
          {{ li.label }}
        </p>
      </div>
    </el-form>
    <el-button @click="handleShowCode">显示源码</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
const showCode = ref(false);
const textcontent = ref("");
const temporaryContent = ref("");
const list = reactive([
  { label: "姓名", value: "name" },
  { label: "年龄", value: "age" },
  { label: "电话", value: "phone" },
]);
const form = reactive({ content: "" });
let sel: Selection | null = window.getSelection();
let range: Range;

const handleShowCode = () => {
  showCode.value = !showCode.value;
  textcontent.value = temporaryContent.value;
};
const getblur = (event: Event) => {
  sel = window.getSelection();
  if (sel) {
    range = sel.getRangeAt(0);
    range.deleteContents();
  }
  byCodeSetContent(event);
};
const handlePlaceholderInput = (event: Event) => {
  byCodeSetContent(event);
};
const byCodeSetContent = (event: Event) => {
  if (showCode.value) {
    temporaryContent.value = (event.target as HTMLInputElement).innerText;
  } else {
    temporaryContent.value = (event.target as HTMLInputElement).innerHTML;
  }
};
const addPlaceholder = (item: string) => {
  console.log(item);
  const html = `<span class="placeholder-varible" contenteditable="false">{{ ${item} }}</span>`;
  insertHtmlAtCaret(html);
  form.content = html;
};
const insertHtmlAtCaret = (html: string) => {
  if (window.getSelection() && range) {
    // IE9 and non-IE
    if (sel?.getRangeAt && sel.rangeCount) {
      var el = document.createElement("div");
      if (showCode.value) {
        el.innerText = html;
      } else {
        el.innerHTML = html;
      }
      var frag = document.createDocumentFragment();
      var node;
      var lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else {
    ElMessage.error("请先选择输入框");
  }
};
</script>
<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
}
.placeholderTextarea {
  height: 300px;
  width: calc(100% - 22px);
}
.list-show {
  border: 1px solid rgb(202, 202, 202);
  padding: 10px;
  .insert-item {
    display: inline-block;
    font-size: 18px;
    width: 120px;
    color: #888;
    cursor: pointer;
    border-right: 1px solid #ccc;
    text-align: center;
  }
}
:deep(.placeholder-varible) {
  background: #ccc;
  padding: 1px 3px;
  border-radius: 2px;
  cursor: no-drop;
}
</style>
<style></style>
