<template>
  <label>
    <input v-model="isChecked" type="checkbox" />
    <span></span>
  </label>
</template>
<script>
export default {
  name: "checkbox",
  data: function () {
    return {
      isChecked: this.isDone,
    };
  },
  watch: {
    isChecked(newValue) {
      this.$emit("onCheck", newValue, this.index);
    },
  },
  props: {
    isDone: Boolean,
    index: Number,
  },
};
</script>
<style>
label {
  position: relative;
}
span {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 4px;
  transition-property: background border;
  transition-duration: 200ms;
  transition-timing-function: ease;
}
span:after {
  content: "";
  position: absolute;
  top: 25%;
  left: 50%;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  height: 9px;
  width: 4px;
  transform: rotate(45deg) translate(-50%);
  visibility: hidden;
}
input {
  display: none;
}

input:checked ~ span {
  background: #3182ce;
  border-color: #3182ce;
}
input:checked ~ span::after {
  visibility: visible;
}
</style>
